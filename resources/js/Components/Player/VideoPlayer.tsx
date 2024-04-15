import { faCompress, faExpand, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { useAnimationFrame } from "framer-motion";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

import type { RenoVideo } from "@/Lib/video";
import { VideoElementPreview } from "../Editor/Preview/VideoElementPreview";
import { Icon } from "../Icon";
import { VideoPlayerError } from "./VideoPlayerError";

interface Props {
	videoData: RenoVideo.Data | null;
}

export function VideoPlayer(props: Props) {
	if (!props.videoData) {
		return <VideoPlayerError />;
	}
	const videoAreaRef = useRef<HTMLDivElement>(null);
	const playingRef = useRef<boolean>(false);
	const [scaleFactor, setScaleFactor] = useState<number>(1);
	const [isPlaying, setPlaying] = useState<boolean>(false);
	const [isFullscreen, setFullscreen] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const timeBarRef = useRef<HTMLDivElement>(null);
	const playedTimeRatio = currentTime / props.videoData.duration;
	const togglePlaying = () => {
		setPlaying(!isPlaying);
		playingRef.current = !isPlaying;
	};
	const goFullscreen = () => {
		if (!videoAreaRef.current) {
			return;
		}
		videoAreaRef.current.requestFullscreen();
		setFullscreen(true);
	};
	const exitFullscreen = () => {
		document.exitFullscreen();
	};
	useAnimationFrame((_, delta) => {
		const videoData = props.videoData;
		if (videoData == null) {
			return;
		}
		const isPlaying = playingRef.current;
		if (isPlaying) {
			if (currentTime === videoData.duration) {
				togglePlaying();
			}
			setCurrentTime((prev) => Math.min(prev + delta, videoData.duration));
		}
	});

	function updateVideoSize() {
		if (!videoAreaRef.current || props.videoData == null) {
			return;
		}
		const { height } = videoAreaRef.current.getBoundingClientRect();
		setScaleFactor(height / props.videoData.canvas.height);
	}
	function updateFullscreen() {
		if (!videoAreaRef.current) {
			return;
		}
		setFullscreen(document.fullscreenElement != null);
	}
	const onWindowResize = _.debounce(() => {
		updateVideoSize();
	}, 500);
	useEffect(() => {
		updateVideoSize();
		updateFullscreen();
		window.addEventListener("resize", onWindowResize);
		return () => window.removeEventListener("resize", onWindowResize);
	});
	return (
		<div id="video" className="relative z-0 size-full bg-black">
			{/* Video Content */}
			<div ref={videoAreaRef} style={{ backgroundColor: props.videoData.canvas.color }} className="size-full overflow-hidden">
				{props.videoData.elements
					.filter((elem) => currentTime >= elem.start && currentTime <= elem.start + elem.duration)
					.map((element) => (
						<VideoElementPreview element={element} scaleFactor={scaleFactor} />
					))}
			</div>

			{/* Video controls */}
			<div className="absolute bottom-0 left-0 right-0 z-10 w-full h-fit bg-black bg-opacity-50 flex flex-col justify-end align-center">
				{/* Time bar */}
				<div ref={timeBarRef} style={{ width: "100%", height: "4px" }} className="relative bg-white bg-opacity-25">
					<div style={{ width: `${playedTimeRatio * 100}%`, height: "100%" }} className="bg-emerald-400 bg-opacity-80" />
				</div>

				{/* Control buttons */}
				<menu className="relative w-full h-fit px-2 flex flex-row justify-between items-center">
					<li key="player_toggle_playing">
						<button type="button" className="w-fit h-fit p-2" onClick={togglePlaying}>
							<Icon icon={isPlaying ? faPause : faPlay} className="text-white text-opacity-80" />
						</button>
					</li>
					<li key="player_toggle_fullscreen">
						<button type="button" className="w-fit h-fit p-2" onClick={() => (isFullscreen ? exitFullscreen() : goFullscreen())}>
							<Icon icon={isFullscreen ? faCompress : faExpand} className="text-white text-opacity-80" />
						</button>
					</li>
				</menu>
			</div>
		</div>
	);
}
