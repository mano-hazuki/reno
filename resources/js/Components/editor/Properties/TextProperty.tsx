import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp, faFont, faTextHeight, faTextWidth } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent } from "react";

export function TextProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);

	const value = elements.find((e) => e.id === elementId)!.text!.value;
	const updateValue = (event: ChangeEvent<HTMLTextAreaElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.value = event.target.value;
		});
	};
	const color = elements.find((e) => e.id === elementId)!.text!.color;
	const updateColor = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.color = event.target.value;
		});
	};
	const fontFamily = elements.find((e) => e.id === elementId)!.text!.fontFamily;
	const updateFontFamily = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.fontFamily = event.target.value;
		});
	};
	const fontWeight = elements.find((e) => e.id === elementId)!.text!.fontWeight;
	const updateFontWeight = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.fontWeight = Number.parseInt(event.target.value);
		});
	};
	const fontSize = elements.find((e) => e.id === elementId)!.text!.fontSize;
	const updateFontSize = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.fontSize = Number.parseInt(event.target.value);
		});
	};
	const lineHeight = elements.find((e) => e.id === elementId)!.text!.lineHeight;
	const updateLineHeight = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.lineHeight = Number.parseInt(event.target.value);
		});
	};
	const letterSpacing = elements.find((e) => e.id === elementId)!.text!.letterSpacing;
	const updateLetterSpacing = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.text!.letterSpacing = Number.parseInt(event.target.value);
		});
	};
	return (
		<li key="text" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Text</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-start items-center gap-4">
				<textarea className="w-full h-fit p-4 rounded text-white bg-white bg-opacity-5 whitespace-pre" placeholder="Value" defaultValue={value} onChange={updateValue} />

				<span className="w-full h-fit p-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
					<Icon className="flex-none text-white text-opacity-80" icon={faFont} />
					<input className="w-full h-fit flex-1 text-white truncate" type="text" value={fontFamily} placeholder="Font Family" onChange={updateFontFamily} />
				</span>

				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit p-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Size</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={fontSize} placeholder="Size" onChange={updateFontSize} />
					</span>
					<span className="w-1/2 h-fit p-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Weight</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={fontWeight} placeholder="Weight" onChange={updateFontWeight} />
					</span>
				</div>

				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit p-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<Icon className="flex-none text-lg text-white text-opacity-80" icon={faTextHeight} />
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={lineHeight} placeholder="Line Height" onChange={updateLineHeight} />
					</span>
					<span className="w-1/2 h-fit p-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<Icon className="flex-none text-lg text-white text-opacity-80" icon={faTextWidth} />
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={letterSpacing} placeholder="Letter Spacing" onChange={updateLetterSpacing} />
					</span>
				</div>

				<span className="w-full h-fit px-4 py-4 rounded flex flex-row items-center gap-4 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Color</span>
					<span className="w-full h-fit flex-1 flex flex-row justify-start items-center gap-2">
						<span style={{ backgroundColor: color }} className="w-auto h-6 aspect-square flex-none rounded" />
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={color} placeholder="Color" onChange={updateColor} />
					</span>
				</span>
			</div>
		</li>
	);
}
