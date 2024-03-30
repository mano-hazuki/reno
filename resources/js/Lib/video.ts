export namespace RenoVideo {
	export type Data = {
		canvas: Canvas;
		tracks: Track[];
		elements: Element[];
	};

	export type Canvas = {
		width: number;
		height: number;
		color: string;
	};

	export type Track = {
		id: number;
		name: string;
		disabled: boolean;
		locked: boolean;
	};

	/* Styles */
	export type Position = {
		x: number;
		y: number;
	};

	export type Padding = {
		left: number;
		top: number;
		right: number;
		bottom: number;
	};

	export type Margin = {
		left: number;
		top: number;
		right: number;
		bottom: number;
	};

	export type Border = {
		enabled: boolean;
		width: number;
		radius: number;
		color: string;
	};

	export type Outline = {
		enabled: boolean;
		width: number;
		color: string;
	};

	export type Background = {
		color: string;
	};

	export type Rect = {
		color: string;
	};

	export type Text = {
		value: string;
		color: string;
		fontSize: number;
		fontFamily: string;
		fontWeight: number;
		lineHeight: number;
		letterSpacing: number;
	};

	export type Image = {
		src: string;
		opacity: number;
	};

	export type Audio = {
		src: string;
		volume: number;
	};

	export type ElementType = "rect" | "text" | "image" | "audio";
	export type Element = {
		id: number;
		trackId: number;
		type: ElementType;
		start: number;
		duration: number;
		position?: Position;
		padding?: Padding;
		margin?: Margin;
		border?: Border;
		outline?: Outline;
		background?: Background;
		rect?: Rect;
		text?: Text;
		image?: Image;
		audio?: Audio;
	};
	// export type RectElement = Element & {
	// 	position: Position;
	// 	padding: Padding;
	// 	margin: Margin;
	// 	border: Border;
	// 	outline: Outline;
	// 	rect: Rect;
	// };
	// export type TextElement = Element & {
	// 	position: Position;
	// 	padding: Padding;
	// 	margin: Margin;
	// 	border: Border;
	// 	outline: Outline;
	// 	background: Background;
	// 	text: Text;
	// };
	// export type ImageElement = Element & {
	// 	position: Position;
	// 	padding: Padding;
	// 	margin: Margin;
	// 	border: Border;
	// 	image: Image;
	// };
	// export type AudioElement = Element & {
	// 	audio: Audio;
	// };
}
