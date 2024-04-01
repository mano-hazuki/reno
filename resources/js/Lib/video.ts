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
		width: number;
		height: number;
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
		width: number;
		height: number;
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
}

export const initialPositionProp: RenoVideo.Position = {
	x: 0,
	y: 0,
};

export const initialPaddingProp: RenoVideo.Padding = {
	left: 0,
	top: 0,
	right: 0,
	bottom: 0,
};

export const initialMarginProp: RenoVideo.Margin = {
	left: 0,
	top: 0,
	right: 0,
	bottom: 0,
};

export const initialBorderProp: RenoVideo.Border = {
	enabled: false,
	width: 0,
	radius: 0,
	color: "#000000",
};

export const initialOutlineProp: RenoVideo.Outline = {
	enabled: false,
	width: 0,
	color: "#000000",
};

export const initialBackgroundProp: RenoVideo.Background = {
	color: "#FFFFFF",
};

export const initialRectProp: RenoVideo.Rect = {
	width: 0,
	height: 0,
	color: "#FFFFFF",
};

export const initialTextProp: RenoVideo.Text = {
	value: "",
	color: "#FFFFFF",
	fontSize: 16,
	fontFamily: "Roboto",
	fontWeight: 400,
	lineHeight: 1.6,
	letterSpacing: 1.0,
};

export const initialImageProp: RenoVideo.Image = {
	src: "",
	width: 0,
	height: 0,
	opacity: 1.0,
};

export const initialAudioProp: RenoVideo.Audio = {
	src: "",
	volume: 100,
};

export const initialRectElement = (id: number, trackId: number, start: number, duration: number): RenoVideo.Element => {
	const element: RenoVideo.Element = {
		id: id,
		trackId: trackId,
		type: "rect",
		start: start,
		duration: duration,
		position: initialPositionProp,
		padding: initialPaddingProp,
		margin: initialMarginProp,
		border: initialBorderProp,
		outline: initialOutlineProp,
		rect: initialRectProp,
	};
	return element;
};

export const initialTextElement = (id: number, trackId: number, start: number, duration: number): RenoVideo.Element => {
	const element: RenoVideo.Element = {
		id: id,
		trackId: trackId,
		type: "text",
		start: start,
		duration: duration,
		position: initialPositionProp,
		padding: initialPaddingProp,
		margin: initialMarginProp,
		border: initialBorderProp,
		outline: initialOutlineProp,
		background: initialBackgroundProp,
		text: initialTextProp,
	};
	return element;
};

export const initialImageElement = (id: number, trackId: number, start: number, duration: number): RenoVideo.Element => {
	const element: RenoVideo.Element = {
		id: id,
		trackId: trackId,
		type: "image",
		start: start,
		duration: duration,
		position: initialPositionProp,
		padding: initialPaddingProp,
		margin: initialMarginProp,
		border: initialBorderProp,
		image: initialImageProp,
	};
	return element;
};

export const initialAudioElement = (id: number, trackId: number, start: number, duration: number): RenoVideo.Element => {
	const element: RenoVideo.Element = {
		id: id,
		trackId: trackId,
		type: "audio",
		start: start,
		duration: duration,
		audio: initialAudioProp,
	};
	return element;
};
