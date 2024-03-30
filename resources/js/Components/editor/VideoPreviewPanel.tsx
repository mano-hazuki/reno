import { canvasAtom, videoCurrentTimeAtom } from "@/Pages/Video/Editor";
import { useAtom, useAtomValue } from "jotai/react";
import { useRef } from "react";

export function VideoPreviewPanel() {
	const [canvas, setCanvas] = useAtom(canvasAtom);
	const previewRef = useRef<HTMLDivElement>(null);
	const currentTimeline = useAtomValue(videoCurrentTimeAtom);
	return (
		<div className="size-full p-4 flex flex-col justify-start items-center">
			<div ref={previewRef} style={{ backgroundColor: canvas.color }} className="w-auto h-5/6 aspect-video">
				{/* Insert video elements dynamically here */}
			</div>
		</div>
	);
}
