import type { RenoVideo } from "@/Lib/video";

export function RectElementPreview({ element, scaleFactor }: { element: RenoVideo.Element; scaleFactor: number }) {
	const style: React.CSSProperties = {
		// Position
		position: "absolute",
		left: element.position!.x * scaleFactor,
		top: element.position!.y * scaleFactor,
		// Padding
		paddingLeft: element.padding!.left * scaleFactor,
		paddingTop: element.padding!.top * scaleFactor,
		paddingRight: element.padding!.right * scaleFactor,
		paddingBottom: element.padding!.bottom * scaleFactor,
		// Margin
		marginLeft: element.margin!.left * scaleFactor,
		marginTop: element.margin!.top * scaleFactor,
		marginRight: element.margin!.right * scaleFactor,
		marginBottom: element.margin!.bottom * scaleFactor,
		// Border
		borderStyle: element.border!.enabled ? "solid" : "none",
		borderWidth: element.border!.width * scaleFactor,
		borderRadius: element.border!.enabled ? element.border!.radius * scaleFactor : 0,
		borderColor: element.border!.color,
		// Outline
		outlineStyle: element.outline!.enabled ? "solid" : "none",
		outlineWidth: element.outline!.width * scaleFactor,
		outlineColor: element.outline!.color,
		// Rect
		width: element.rect!.width,
		height: element.rect!.height,
		backgroundColor: element.rect!.color,
	};
	return <span style={style} />;
}
