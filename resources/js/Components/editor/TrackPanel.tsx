import { useLayoutEffect, useRef, useState } from "react";

import { debounce } from "lodash";

import { faEye, faEyeSlash, faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import type { VideoElement, VideoTrack } from "@/Lib/video";

export function TrackPanel({ tracks }: { tracks: VideoTrack[] }) {
	return (
		<ul className="size-full overflow-y-auto bg-slate-200 rounded flex flex-col justify-start items-center gap-2">
			{tracks.map((track) => (
				<TrackItem key={track.id} track={track} />
			))}
		</ul>
	);
}

function TrackItem({ track }: { track: VideoTrack }) {
	const timelineRef = useRef<HTMLSpanElement>(null);
	const [timelinePos, setTimelinePos] = useState({ x: 0, y: 0 });
	const [timelineSize, setTimelineSize] = useState({ width: 0, height: 0 });
	const updateWidth = debounce(() => {
		if (timelineRef.current !== null) {
			const { x, y, width, height } = timelineRef.current.getBoundingClientRect();
			setTimelinePos({ x, y });
			setTimelineSize({ width, height });
		}
	}, 500);

	useLayoutEffect(() => {
		updateWidth();
		window.addEventListener("resize", updateWidth);
		return () => {
			window.removeEventListener("resize", updateWidth);
		};
	}, []);
	return (
		<li className="w-full h-16 p-2 bg-white rounded flex flex-row justify-start items-center gap-4">
			<span className="w-fit h-full flex-none flex flex-row items-center gap-4">
				<span className="p-2">{track.name}</span>
				<FontAwesomeIcon icon={track.locked ? faLock : faLockOpen} className="text-sm" />
				<FontAwesomeIcon icon={track.disabled ? faEyeSlash : faEye} className="text-sm" />
			</span>
			<span ref={timelineRef} className="relative w-full h-full flex-1 bg-slate-200 rounded overflow-x-auto">
				{track.elements.map((elem) => (
					<TimelineElement key={elem.id} element={elem} parentWidth={timelineSize.width} />
				))}
			</span>
		</li>
	);
}

function TimelineElement({ element, parentWidth }: { element: VideoElement; parentWidth: number }) {
	const id = element.id;
	const type = element.type;
	const timelineStart: number = 0.0; // 00:00:00.0000
	const timelineEnd: number = 2 * 60 * 1000; // 2 minutes
	const widthPerMs: number = parentWidth / (timelineEnd - timelineStart);
	const color = (): string => {
		switch (type) {
			case "text": {
				return "#FF0000";
			}
			case "image": {
				return "#00FF00";
			}
			case "audio": {
				return "#0000FF";
			}
		}
	};
	return (
		<span
			style={{ left: `${widthPerMs * element.start}px`, width: `${widthPerMs * element.duration}px`, backgroundColor: color() }}
			className="absolute h-full p-2 bg-red-500 rounded flex flex-row justify-start items-center">
			{id}
		</span>
	);
}
