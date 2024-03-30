import { canvasAtom, elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useImmerAtom } from "jotai-immer";
import { useAtom, useAtomValue } from "jotai/react";
import { useState } from "react";
import { Icon } from "../Icon";

import type { RenoVideo } from "@/Lib/video";

export function PropertiesPanel() {
	const elementId = useAtomValue(elementSelectedIdAtom);
	if (elementId == null) {
		return <CanvasOptions />;
	}
	return <Accordion />;
}

// TODO: Fix design
function CanvasOptions() {
	const [canvas, setCanvas] = useAtom(canvasAtom);
	return (
		<div className="size-full">
			<h2 className="text-black text-base p-4">Canvas Options</h2>
			<div className="w-full h-px bg-gray-200" />
			<menu className="w-full h-fit p-4 overflow-y-auto flex flex-col justify-start items-center bg-white">
				<li key="width" className="w-full h-fit pb-2">
					<label className="w-full h-fit flex flex-row justify-start items-center gap-4">
						Width
						<input className="" type="text" value={canvas.width} onChange={(e) => setCanvas({ ...canvas, width: Number.parseInt(e.target.value) })} />
					</label>
				</li>
				<li key="height" className="w-full h-fit">
					<label className="w-full h-fit flex flex-row justify-start items-center gap-4">
						Height
						<input className="" type="text" value={canvas.height} onChange={(e) => setCanvas({ ...canvas, height: Number.parseInt(e.target.value) })} />
					</label>
				</li>
				<li key="color" className="w-full h-fit">
					<label className="w-full h-fit flex flex-row justify-start items-center gap-4">
						Color
						<input className="" type="text" value={canvas.color} onChange={(e) => setCanvas({ ...canvas, color: e.target.value })} />
					</label>
				</li>
			</menu>
		</div>
	);
}

function Accordion() {
	const elements = useAtomValue(elementsAtom);
	const elementId = useAtomValue(elementSelectedIdAtom);
	if (elementId == null) {
		return;
	}
	const element = elements.find((e) => e.id === elementId) as RenoVideo.Element; // Already checked in PropertiesPanel component!
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
		<menu className="size-full overflow-y-auto flex flex-col justify-start items-center">
			{/* Fundamental section components */}
			<TimeSection />

			{/* Mount section component if the element has supported property  */}
			{/* {hasPositionProp && <PositionSection />}
			{hasPaddingProp && <PaddingSection />}
			{hasMarginProp && <MarginSection />}
			{hasBorderProp && <BorderSection />}
			{hasOutlineProp && <OutlineSection />}
			{hasBackgroundProp && <BackgroundSection />}
			{hasRectProp && <RectSection />}
			{hasTextProp && <TextSection />}
			{hasImageProp && <ImageSection />}
			{hasAudioProp && <AudioSection />} */}
		</menu>
	);
}

// TODO: Fix layout
function TimeSection() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);
	const [elements, setElements] = useAtom(elementsAtom);
	if (elementId == null) {
		return;
	}
	function updateStart(event: React.ChangeEvent<HTMLInputElement>) {
		if (elementId == null) {
			return;
		}
		setElements((draft) => {
			if (!draft) {
				return;
			}
			draft.find((e) => e.id === elementId)!.start = Number.parseInt(event.target.value);
		});
	}
	return (
		<li key="time" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Time</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Start: </span>
					<input className="w-16 h-4" type="text" value={elements.find((e) => e.id === elementId)!.start} onChange={updateStart} />
				</div>
				{/* <div className="flex flex-row items-center gap-4">
					<span className="">Duration: </span>
					<input className="w-16 h-4" type="text" value={element.duration} onChange={(e) => setElement({ ...element, duration: Number.parseInt(e.target.value) })} />
				</div> */}
			</div>
		</li>
	);
}

// TODO: Fix design
function PositionSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.position) {
		return;
	}
	return (
		<li key="position" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Position</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">X: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.position.x}
						onChange={(e) => setElement({ ...element, position: { ...element.position!, x: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Y: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.position.y}
						onChange={(e) => setElement({ ...element, position: { ...element.position!, y: Number.parseInt(e.target.value) } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function PaddingSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.padding) {
		return;
	}
	return (
		<li key="padding" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Padding</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Left: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.padding.left}
						onChange={(e) => setElement({ ...element, padding: { ...element.padding!, left: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Top: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.padding.top}
						onChange={(e) => setElement({ ...element, padding: { ...element.padding!, top: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Right: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.padding.right}
						onChange={(e) => setElement({ ...element, padding: { ...element.padding!, right: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Bottom: </span>
					<input
						className="h-fit"
						type="text"
						value={element.padding.bottom}
						onChange={(e) => setElement({ ...element, padding: { ...element.padding!, bottom: Number.parseInt(e.target.value) } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function MarginSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.margin) {
		return;
	}
	return (
		<li key="margin" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Margin</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Left: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.margin.left}
						onChange={(e) => setElement({ ...element, margin: { ...element.margin!, left: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Top: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.margin.top}
						onChange={(e) => setElement({ ...element, margin: { ...element.margin!, top: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Right: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.margin.right}
						onChange={(e) => setElement({ ...element, margin: { ...element.margin!, right: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Bottom: </span>
					<input
						className="h-fit"
						type="text"
						value={element.margin.bottom}
						onChange={(e) => setElement({ ...element, margin: { ...element.margin!, bottom: Number.parseInt(e.target.value) } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function BorderSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.border) {
		return;
	}
	return (
		<li key="border" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Border</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Enabled: </span>
					<input
						className="w-16 h-4"
						type="checkbox"
						checked={element.border.enabled}
						onChange={(e) => setElement({ ...element, border: { ...element.border!, enabled: !element.border!.enabled } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Width: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.border.width}
						onChange={(e) => setElement({ ...element, border: { ...element.border!, width: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Radius: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.border.radius}
						onChange={(e) => setElement({ ...element, border: { ...element.border!, radius: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Color: </span>
					<input className="h-fit" type="text" value={element.border.color} onChange={(e) => setElement({ ...element, border: { ...element.border!, color: e.target.value } })} />
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function OutlineSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.outline) {
		return;
	}
	return (
		<li key="outline" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Outline</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Enabled: </span>
					<input
						className="w-16 h-4"
						type="checkbox"
						checked={element.outline.enabled}
						onChange={(e) => setElement({ ...element, outline: { ...element.outline!, enabled: !element.outline!.enabled } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Width: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.outline.width}
						onChange={(e) => setElement({ ...element, outline: { ...element.outline!, width: Number.parseInt(e.target.value) } })}
					/>
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Color: </span>
					<input
						className="h-fit"
						type="text"
						value={element.outline.color}
						onChange={(e) => setElement({ ...element, outline: { ...element.outline!, color: e.target.value } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function BackgroundSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.background) {
		return;
	}
	return (
		<li key="background" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Background</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Color: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.background.color}
						onChange={(e) => setElement({ ...element, background: { ...element.background!, color: e.target.value } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function RectSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.rect) {
		return;
	}
	return (
		<li key="rect" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Rect</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Color: </span>
					<input className="w-16 h-4" type="text" value={element.rect.color} onChange={(e) => setElement({ ...element, rect: { ...element.rect!, color: e.target.value } })} />
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function TextSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.text) {
		return;
	}
	return (
		<li key="text" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Text</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex-col justify-start items-start gap-4">
				{/* Value */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Value: </span>
					<input className="w-16 h-4" type="text" value={element.text.value} onChange={(e) => setElement({ ...element, text: { ...element.text!, value: e.target.value } })} />
				</div>

				{/* Size */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Size: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.text.size}
						onChange={(e) => setElement({ ...element, text: { ...element.text!, size: Number.parseInt(e.target.value) } })}
					/>
				</div>

				{/* Color */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Color: </span>
					<input className="h-fit" type="text" value={element.text.color} onChange={(e) => setElement({ ...element, text: { ...element.text!, color: e.target.value } })} />
				</div>

				{/* Font Family */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Font Family: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.text.fontFamily}
						onChange={(e) => setElement({ ...element, text: { ...element.text!, fontFamily: e.target.value } })}
					/>
				</div>

				{/* Font Weight */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Font Weight: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.text.fontWeight}
						onChange={(e) => setElement({ ...element, text: { ...element.text!, fontWeight: Number.parseInt(e.target.value) } })}
					/>
				</div>

				{/* Line Height */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Line Height: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.text.lineHeight}
						onChange={(e) => setElement({ ...element, text: { ...element.text!, lineHeight: Number.parseInt(e.target.value) } })}
					/>
				</div>

				{/* Letter Spacing */}
				<div className="flex flex-row items-center gap-4">
					<span className="">Letter Spacing: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.text.letterSpacing}
						onChange={(e) => setElement({ ...element, text: { ...element.text!, letterSpacing: Number.parseInt(e.target.value) } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function ImageSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.image) {
		return;
	}
	return (
		<li key="image" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Image</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Image URL: </span>
					<input className="w-16 h-4" type="text" value={element.image.src} onChange={(e) => setElement({ ...element, image: { ...element.image!, src: e.target.value } })} />
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Opacity: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.image.opacity}
						onChange={(e) => setElement({ ...element, image: { ...element.image!, opacity: Number.parseInt(e.target.value) } })}
					/>
				</div>
			</div>
		</li>
	);
}

// TODO: Fix layout
function AudioSection() {
	const [element, setElement] = useAtom(selectedElementAtom);
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);
	if (!element || !element.audio) {
		return;
	}
	return (
		<li key="audio" className="w-full h-fit border-b border-b-gray-200 flex-none flex flex-col justify-start items-center">
			<button className="w-full h-fit p-4 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-black text-base">Audio</span>
				<Icon className="text-black text-base" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit p-4 flex flex-row justify-between items-start gap-4">
				<div className="flex flex-row items-center gap-4">
					<span className="">Source URL: </span>
					<input className="w-16 h-4" type="text" value={element.audio.src} onChange={(e) => setElement({ ...element, audio: { ...element.audio!, src: e.target.value } })} />
				</div>
				<div className="flex flex-row items-center gap-4">
					<span className="">Volume: </span>
					<input
						className="w-16 h-4"
						type="text"
						value={element.audio.volume}
						onChange={(e) => setElement({ ...element, audio: { ...element.audio!, volume: Number.parseInt(e.target.value) } })}
					/>
				</div>
			</div>
		</li>
	);
}
