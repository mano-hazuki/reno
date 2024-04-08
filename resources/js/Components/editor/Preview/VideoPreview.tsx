import { useAtomValue } from "jotai/react";
import _ from "lodash";
import { useEffect, useRef, useState } from "react";

import { canvasAtom, elementsAtom, videoCurrentTimeAtom } from "@/Pages/Video/Editor";
import { VideoElementPreview } from "./VideoElementPreview";

export function VideoPreview() {
	const canvas = useAtomValue(canvasAtom);
	const previewRef = useRef<HTMLDivElement>(null);
	const [scaleFactor, setScaleFactor] = useState<number>(1);
	const currentTime = useAtomValue(videoCurrentTimeAtom);
	const elements = useAtomValue(elementsAtom);

	function updatePreviewSize() {
		if (!previewRef.current) {
			return;
		}
		const { height } = previewRef.current.getBoundingClientRect();
		setScaleFactor(height / canvas.height);
	}
	const onWindowResize = _.debounce(() => {
		updatePreviewSize();
	}, 500);

	useEffect(() => {
		updatePreviewSize();
		window.addEventListener("resize", onWindowResize);
		return () => window.removeEventListener("resize", onWindowResize);
	});
	return (
		<div className="size-full p-8 rounded bg-white bg-opacity-5 flex flex-col justify-start items-center">
			<div ref={previewRef} style={{ width: "auto", height: "90%", backgroundColor: canvas.color }} className="relative aspect-video overflow-hidden">
				{elements
					.filter((elem) => currentTime >= elem.start && currentTime <= elem.start + elem.duration)
					.map((element) => (
						<VideoElementPreview element={element} scaleFactor={scaleFactor} />
					))}
			</div>
		</div>
	);
}
