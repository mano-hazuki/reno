import { Icon } from "@/Components/Icon";
import { classnames } from "@/Lib/classnames";
import { elementSelectedIdAtom, elementsAtom, tracksAtom, videoDurationAtom } from "@/Pages/Video/Editor";
import { faArrowPointer, faCut, faEye, faEyeSlash, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useSetAtom } from "jotai/react";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

const TOOL_TYPES = ["select", "cut"] as const;
type ToolType = (typeof TOOL_TYPES)[number];

export function ControlPanel() {
	const [tracks, setTracks] = useAtom(tracksAtom);
	const [toolType, setToolType] = useState<ToolType>("select");
	const [trackX, setTrackX] = useState<number>(0);
	const [trackY, setTrackY] = useState<number>(0);
	const [trackHeight, setTrackHeight] = useState<number>(64);
	const laneRef = useRef<HTMLDivElement>(null);
	const [laneTimeScale, setLaneTimeScale] = useState<number>(60); // milliseconds per px
	const [laneWidth, setLaneWidth] = useState<number>(0);
	const [laneHeight, setLaneHeight] = useState<number>(0);
	const [elements, setElements] = useAtom(elementsAtom);
	const [videoDuration, setVideoDuration] = useAtom(videoDurationAtom);
	const setSelectedElementId = useSetAtom(elementSelectedIdAtom);
	const onWindowResize = _.debounce(() => {
		updateLaneWidth();
	}, 500);
	const updateLaneWidth = () => {
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
	useEffect(() => {
		updateVideoDuration();
		updateLaneWidth();
		window.addEventListener("resize", onWindowResize);
		return () => window.removeEventListener("resize", onWindowResize);
	});
	return (
		<div className="relative size-full max-h-full flex flex-row justify-between items-center">
			{/* Tools */}
			<ul className="relative w-fit h-full flex-none p-4 bg-white border-r border-r-gray-200 flex flex-col justify-start items-center gap-2">
				{TOOL_TYPES.map((type, i) => (
					<ToolItem id={i} toolType={type} isSelected={type === toolType} parentState={{ setToolType }} />
				))}
			</ul>

			{/* Timeline */}
			<div className="relative size-full flex-1 flex flex-col justify-between items-end overflow-auto">
				{/* Current time indicator bar */}
				<div style={{ width: laneWidth, height: "100%" }} className="absolute top-0 right-0">
					<div style={{ left: "24px", top: "0px", width: "3px", height: "100%" }} className="relative z-20 bg-emerald-400 opacity-50" />
				</div>

				{/* Timeline scales */}
				<div style={{ width: laneWidth }} className="h-fit flex-none px-4 py-2 bg-white border-b border-b-gray-200 flex flex-row justify-between items-center gap-4">
					<span className="text-xs text-black">{msToTimeText(trackX * laneTimeScale)}</span>
					<span className="text-xs text-black">{msToTimeText((trackX + laneWidth / 4) * laneTimeScale)}</span>
					<span className="text-xs text-black">{msToTimeText((trackX + (laneWidth / 4) * 2) * laneTimeScale)}</span>
					<span className="text-xs text-black">{msToTimeText((trackX + (laneWidth / 4) * 3) * laneTimeScale)}</span>
					<span className="text-xs text-black">{msToTimeText((trackX + laneWidth) * laneTimeScale)}</span>
				</div>

				{/* Track controls and Track lanes */}
				<div className="size-full flex-1 overflow-hidden bg-white flex flex-row justify-between items-start">
					{/* Track Controls */}
					<div style={{ top: -trackY }} className="relative w-fit h-fit flex-none">
						{tracks.map((track) => (
							<div
								style={{ width: "fit-content", height: trackHeight }}
								className="px-2 bg-white border-b border-b-gray-200 border-r border-r-gray-200 flex flex-row justify-start items-center gap-2">
								<input className="w-32 min-w-32 max-w-32 h-full px-2 truncate" placeholder="Track name" onChange={() => {}} value={track.name} />
								<button
									type="button"
									onClick={() => {}}
									className={classnames("w-auto h-1/2 aspect-square flex flex-row justify-center items-center", "bg-transparent hover:bg-gray-200")}>
									<Icon icon={track.locked ? faLock : faLockOpen} className="text-base text-black" />
								</button>
								<button
									type="button"
									onClick={() => {}}
									className={classnames("w-auto h-1/2 aspect-square flex flex-row justify-center items-center", "bg-transparent hover:bg-gray-200")}>
									<Icon icon={track.disabled ? faEyeSlash : faEye} className="text-base text-black" />
								</button>
							</div>
						))}
					</div>

					{/* Track lanes */}
					<div
						ref={laneRef}
						onScroll={() => {
							if (laneRef.current == null) {
								return;
							}
							setTrackX(laneRef.current.scrollLeft);
							setTrackY(laneRef.current.scrollTop);
						}}
						className="relative size-full flex-1 overflow-auto">
						{tracks.map((track) => (
							<div style={{ width: videoDuration / laneTimeScale, height: trackHeight }} className="relative flex flex-row items-center bg-white border-b border-b-gray-200">
								{/* Elements */}
								{elements
									.filter((e) => e.trackId === track.id)
									.map((element) => (
										<button
											type="button"
											style={{ left: `${(element.start / videoDuration) * 100}%`, width: `${(element.duration / videoDuration) * 100}%`, height: `${trackHeight - 12}px` }}
											onClick={() => setSelectedElementId(element.id)}
											className="absolute px-4 flex flex-row justify-start items-center bg-gray-200 hover:bg-gray-300 rounded-sm">
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

interface ToolItemProps {
	id: number;
	toolType: ToolType;
	isSelected: boolean;
	parentState: {
		setToolType: React.Dispatch<React.SetStateAction<ToolType>>;
	};
}

function ToolItem({ id, toolType, isSelected, parentState }: ToolItemProps) {
	return (
		<li key={`tool ${id}`} className="w-fit h-fit">
			<button
				type="button"
				className={classnames(
					"size-8 p-2 rounded-sm shadow-sm shadow-gray-300 flex flex-row justify-center items-center",
					isSelected ? "bg-emerald-400" : "bg-white hover:bg-gray-100",
				)}
				onClick={() => parentState.setToolType(toolType)}>
				<Icon icon={getIconByToolType(toolType)} className={classnames("text-xl", isSelected ? "text-white" : "text-black")} />
			</button>
		</li>
	);
}

function getIconByToolType(toolType: ToolType) {
	switch (toolType) {
		case "select": {
			return faArrowPointer;
		}
		case "cut": {
			return faCut;
		}
	}
}

function msToTimeText(timeInMs: number) {
	const hour = zeroPadding(Math.floor(timeInMs / (1000 * 60 * 60)), 2);
	const minute = zeroPadding(Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60)), 2);
	const second = zeroPadding(Math.floor(((timeInMs % (1000 * 60 * 60)) % (1000 * 60)) / 1000), 2);
	return `${hour}:${minute}:${second}`;
}

function zeroPadding(num: number, digits: number): string {
	let strNum = num.toString();
	while (strNum.length < digits) {
		strNum = `0${strNum}`;
	}
	return strNum;
}
