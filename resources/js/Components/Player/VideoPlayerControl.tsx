import { faCompress, faExpand, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

import type { RenoVideo } from "@/Lib/video";
import { Icon } from "../Icon";

interface Props {
	videoData: RenoVideo.Data;
	controller: {
		playingRef: React.MutableRefObject<boolean>;
		isFullscreen: boolean;
		setFullscreen: React.Dispatch<React.SetStateAction<boolean>>;
		currentTime: number;
		setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
	};
}

export function VideoPlayerControl({ videoData, controller }: Props) {
	const timeBarRef = useRef<HTMLDivElement>(null);
	const playedTimeRatio = controller.currentTime / videoData.duration;
	if (!controller.playingRef) {
		return;
	}
	const isPlaying = controller.playingRef.current;
	const togglePlaying = () => {
		controller.playingRef.current = !controller.playingRef.current;
	};
	return (
		<div className="absolute top-0 left-0 right-0 size-full flex flex-col justify-end align-center">
			{/* Time bar */}
			<div ref={timeBarRef} style={{ width: "100%", height: "4px" }} className="relative bg-white bg-opacity-25">
				<div style={{ width: `${playedTimeRatio * 100}%`, height: "100%" }} className="bg-emerald-400 bg-opacity-80" />
			</div>

			{/* Video Control */}
			<menu className="relative w-full h-fit px-2 flex flex-row justify-between items-center">
				<li key="player_toggle_playing" className="p-2">
					<button type="button" className="w-fit h-fit p-2" onClick={togglePlaying}>
						<Icon icon={isPlaying ? faPause : faPlay} className="text-white text-opacity-80" />
					</button>
				</li>
				<li key="player_toggle_fullscreen" className="p-2">
					<Icon icon={controller.isFullscreen ? faCompress : faExpand} className="text-white text-opacity-80" />
				</li>
			</menu>
		</div>
	);
}
