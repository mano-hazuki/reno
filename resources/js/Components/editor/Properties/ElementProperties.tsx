import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { useAtomValue } from "jotai/react";
import { AudioProperty } from "./AudioProperty";
import { BackgroundProperty } from "./BackgroundProperty";
import { BorderProperty } from "./BorderProperty";
import { ImageProperty } from "./ImageProperty";
import { MarginProperty } from "./MarginProperty";
import { OutlineProperty } from "./OutlineProperty";
import { PaddingProperty } from "./PaddingProperty";
import { PositionProperty } from "./PositionProperty";
import { RectProperty } from "./RectProperty";
import { TextProperty } from "./TextProperty";

import type { RenoVideo } from "@/Lib/video";
import { TimeProperty } from "./TimeProperty";

export function ElementProperties() {
	const elements = useAtomValue(elementsAtom);
	const selectId = useAtomValue(elementSelectedIdAtom);
	if (selectId == null) {
		return;
	}
	const element = elements.find((e) => e.id === selectId) as RenoVideo.Element;
	// Check if the element has supported property
	const hasPositionProp = Object.hasOwn(element, "position");
	const hasPaddingProp = Object.hasOwn(element, "padding");
	const hasMarginProp = Object.hasOwn(element, "margin");
	const hasBorderProp = Object.hasOwn(element, "border");
	const hasOutlineProp = Object.hasOwn(element, "outline");
	const hasBackgroundProp = Object.hasOwn(element, "background");
	const hasRectProp = Object.hasOwn(element, "rect");
	const hasTextProp = Object.hasOwn(element, "text");
	const hasImageProp = Object.hasOwn(element, "image");
	const hasAudioProp = Object.hasOwn(element, "audio");
	return (
		<div className="size-full p-4 overflow-y-hidden bg-white bg-opacity-5 rounded flex flex-col justify-start items-center gap-3">
			<menu className="size-full py-2 overflow-y-auto flex flex-col justify-start items-center gap-2">
				<TimeProperty />

				{hasPositionProp && <PositionProperty />}
				{hasPaddingProp && <PaddingProperty />}
				{hasMarginProp && <MarginProperty />}
				{hasBorderProp && <BorderProperty />}
				{hasOutlineProp && <OutlineProperty />}
				{hasBackgroundProp && <BackgroundProperty />}
				{hasRectProp && <RectProperty />}
				{hasTextProp && <TextProperty />}
				{hasImageProp && <ImageProperty />}
				{hasAudioProp && <AudioProperty />}
			</menu>
		</div>
	);
}
