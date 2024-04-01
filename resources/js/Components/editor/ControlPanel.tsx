import { faEye, faEyeSlash, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai/react";
import _ from "lodash";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { Icon } from "@/Components/Icon";
import { classnames } from "@/Lib/classnames";
import { msToTimeText } from "@/Lib/time";
import type { RenoVideo } from "@/Lib/video";
import { elementSelectedIdAtom, elementsAtom, tracksAtom, videoCurrentTimeAtom, videoDurationAtom } from "@/Pages/Video/Editor";

export function ControlPanel() {
	const [tracks, setTracks] = useAtom(tracksAtom);
	const [trackX, setTrackX] = useState<number>(0);
	const [trackY, setTrackY] = useState<number>(0);
	const [trackHeight, setTrackHeight] = useState<number>(64);
	const laneRef = useRef<HTMLDivElement>(null);
	const [laneTimeScale, setLaneTimeScale] = useState<number>(60); // milliseconds per px
	const [laneWidth, setLaneWidth] = useState<number>(0);
	const [laneHeight, setLaneHeight] = useState<number>(0);
	const [elements, setElements] = useAtom(elementsAtom);
	const [videoDuration, setVideoDuration] = useAtom(videoDurationAtom);
	const [selectedElementId, setSelectedElementId] = useAtom(elementSelectedIdAtom);
	const [currentTime, setCurrentTime] = useAtom(videoCurrentTimeAtom);
	const onWindowResize = _.debounce(() => {
		updateLaneWidth();
	}, 500);
	const updateLaneSize = () => {
		if (!laneRef.current) {
			return;
		}
		const { width, height } = laneRef.current.getBoundingClientRect();
		setLaneWidth(width);
		setLaneHeight(height);
	};
	const updateVideoDuration = () => {
		for (const element of elements) {
			const end = element.start + element.duration;
			if (end > videoDuration) {
				setVideoDuration(end);
			}
		}
	};
	const updateTrackPos = () => {
		if (laneRef.current == null) {
			return;
		}
		setTrackX(laneRef.current.scrollLeft);
		setTrackY(laneRef.current.scrollTop);
	};
	const getElementX = (element: RenoVideo.Element): string => `${(element.start / videoDuration) * 100}%`;
	const getElementWidth = (element: RenoVideo.Element): string => `${(element.duration / videoDuration) * 100}%`;
	const elementHeight = `${trackHeight - 12}px`;

	const updateCurrentTime = (event: MouseEvent) => {
		if (!timelineScaleRef.current) {
			return;
		}
		const timelineScalePosX = timelineScaleRef.current.getBoundingClientRect().left;
		const clickedX = trackX + (event.pageX - timelineScalePosX);
		setCurrentTime(clickedX * laneTimeScale);
	};
	const timelineScaleRef = useRef<HTMLDivElement>(null);
	const getIndicatorPosX = () => {
		return currentTime / laneTimeScale - trackX;
	};

	useEffect(() => {
		updateVideoDuration();
		updateLaneSize();
		window.addEventListener("resize", onWindowResize);
		return () => window.removeEventListener("resize", onWindowResize);
	});
	return (
		<div className="relative size-full max-h-full rounded bg-white bg-opacity-5 flex flex-row justify-between items-center">
			{/* Timeline */}
			<div className="relative size-full flex-1 flex flex-col justify-between items-end overflow-auto">
				{/* Timeline scales */}
				<div
					ref={timelineScaleRef}
					style={{ width: laneWidth, height: "fit-content" }}
					className="relative flex-none px-4 py-2 flex flex-row justify-between items-center gap-4"
					onMouseDown={updateCurrentTime}>
					{/* CurrenTime indicator */}
					<div style={{ width: "2px", height: `calc(${laneHeight}px + 100%)`, left: getIndicatorPosX() }} className="absolute top-0 z-20 bg-emerald-400 bg-opacity-75" />

					{/* Timeline scales */}
					<span className="text-xs text-white text-opacity-80">{msToTimeText(trackX * laneTimeScale)}</span>
					<span className="text-xs text-white text-opacity-80">{msToTimeText((trackX + laneWidth / 4) * laneTimeScale)}</span>
					<span className="text-xs text-white text-opacity-80">{msToTimeText((trackX + (laneWidth / 4) * 2) * laneTimeScale)}</span>
					<span className="text-xs text-white text-opacity-80">{msToTimeText((trackX + (laneWidth / 4) * 3) * laneTimeScale)}</span>
					<span className="text-xs text-white text-opacity-80">{msToTimeText((trackX + laneWidth) * laneTimeScale)}</span>
				</div>

				{/* Track controls and Track lanes */}
				<div className="size-full flex-1 overflow-hidden flex flex-row justify-between items-start">
					{/* Track Controls */}
					<div style={{ top: -trackY }} className="relative w-fit h-fit flex-none">
						{tracks.map((track) => (
							<div
								style={{ width: "fit-content", height: trackHeight }}
								className="px-2 border-t-2 border-t-white border-r-2 border-r-white border-opacity-5 flex flex-row justify-start items-center gap-2">
								<input className="w-32 min-w-32 max-w-32 h-full px-2 truncate text-white text-opacity-80" placeholder="Track name" onChange={() => {}} value={track.name} />
								<button
									type="button"
									onClick={() => {}}
									className={classnames("w-auto h-1/2 aspect-square rounded flex flex-row justify-center items-center", "bg-transparent hover:bg-white hover:bg-opacity-10")}>
									<Icon icon={track.locked ? faLock : faLockOpen} className="text-base text-white text-opacity-80" />
								</button>
								<button
									type="button"
									onClick={() => {}}
									className={classnames("w-auto h-1/2 aspect-square rounded flex flex-row justify-center items-center", "bg-transparent hover:bg-white hover:bg-opacity-10")}>
									<Icon icon={track.disabled ? faEyeSlash : faEye} className="text-base text-white text-opacity-80" />
								</button>
							</div>
						))}
					</div>

					{/* Track lanes */}
					<div ref={laneRef} onScroll={updateTrackPos} className="relative size-full flex-1 overflow-auto border-t-2 border-t-white border-opacity-5">
						{tracks.map((track) => (
							<div style={{ width: videoDuration / laneTimeScale, height: trackHeight }} className="relative flex flex-row items-center">
								<div style={{ width: laneWidth, height: trackHeight }} className="absolute border-b-2 border-b-white border-opacity-5" />
								{/* Elements */}
								{elements
									.filter((e) => e.trackId === track.id)
									.map((element) => (
										<button
											type="button"
											style={{ left: getElementX(element), width: getElementWidth(element), height: elementHeight }}
											onClick={() => setSelectedElementId(element.id)}
											className={classnames(
												"absolute px-4 text-white text-opacity-80 flex flex-row justify-start items-center rounded bg-white bg-opacity-10 hover:bg-opacity-20",
												element.id === selectedElementId ? "border-2 border-emerald-400" : "",
											)}>
											{element.id}
										</button>
									))}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
