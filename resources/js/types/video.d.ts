export type VideoData = {
	canvas: CanvasProps;
	tracks: Track[];
};

export type CanvasProps = {
	width: number;
	height: number;
	backgroundColor: string;
};

export type Track = {
	id: number;
	name: string;
	disabled: boolean;
	locked: boolean;
	elements: VideoElement[];
};

export type VideoElementType = "text" | "image" | "audio";
export type VideoElement = {
	id: number;
	type: VideoElementType;
	start: number;
	duration: number;
};

export type Position = {
	x: number;
	y: number;
};

export type Margin = {
	left: number;
	top: number;
	right: number;
	bottom: number;
};

export type Padding = {
	left: number;
	top: number;
	right: number;
	bottom: number;
};

export type Background = {
	color: string;
	opacity: number;
};

export type BorderAppearance = "solid" | "dotted";
export type Border = {
	enabled: boolean;
	width: number;
	appearance: BorderAppearance;
	color: string;
	radius: number;
};

export type Outline = {
	enabled: boolean;
	width: number;
	color: string;
};

export type Style = {
	position: Position;
	padding: Padding;
	margin: Margin;
	border: Border;
	outline: Outline;
	background: Background;
	opacity: number;
};

/* Text Element */
export type Text = {
	text: string;
	color: string;
};
export type TextStyle = Style & {
	text: Text;
};
export type TextElement = VideoElement & {
	style: TextStyle;
};

/* Image Element */
export type Image = {
	src: string;
	opacity: number;
};
export type ImageStyle = Style & {
	image: Image;
};
export type ImageElement = VideoElement & {
	style: ImageStyle;
};

/* Audio Element */
export type Audio = {
	src: string;
	volume: number;
};
export type AudioStyle = Style & {
	audio: Audio;
};
export type AudioElement = VideoElement & {
	style: AudioStyle;
};
