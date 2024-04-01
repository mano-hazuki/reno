import type { RenoVideo } from "@/Lib/video";
import { ImageElementPreview } from "./ImageElementPreview";
import { RectElementPreview } from "./RectElementPreview";
import { TextElementPreview } from "./TextElementPreview";

export function VideoElementPreview({ element, scaleFactor }: { element: RenoVideo.Element; scaleFactor: number }) {
	const getElementComponent = () => {
		switch (element.type) {
			case "rect": {
				return <RectElementPreview element={element} scaleFactor={scaleFactor} />;
			}
			case "text": {
				return <TextElementPreview element={element} scaleFactor={scaleFactor} />;
			}
			case "image": {
				return <ImageElementPreview element={element} scaleFactor={scaleFactor} />;
			}
			case "audio": {
				return null;
			}
		}
	};
	return getElementComponent();
}
