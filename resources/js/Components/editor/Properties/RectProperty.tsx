import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useAtomValue } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent, FocusEvent } from "react";

export function RectProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const elementId = useAtomValue(elementSelectedIdAtom);

	const width = elements.find((e) => e.id === elementId)!.rect!.width;
	const updateWidth = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const width = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.rect!.width = width;
		});
	};
	const height = elements.find((e) => e.id === elementId)!.rect!.height;
	const updateHeight = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const height = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.rect!.height = height;
		});
	};
	const color = elements.find((e) => e.id === elementId)!.rect!.color;
	const updateColor = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.rect!.color = event.target.value;
		});
	};
	return (
		<li key="rect" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Rect</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-start items-center gap-4">
				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">W</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={width} placeholder="Width" onBlur={updateWidth} />
					</span>
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">H</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={height} placeholder="Height" onBlur={updateHeight} />
					</span>
				</div>
				<div className="w-full h-fit px-4 py-4 rounded flex flex-row items-center gap-4 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Color</span>
					<span className="w-full h-fit flex-1 flex flex-row justify-start items-center gap-2">
						<span style={{ backgroundColor: color }} className="w-auto h-6 aspect-square flex-none rounded" />
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={color} placeholder="Color" onChange={updateColor} />
					</span>
				</div>
			</div>
		</li>
	);
}
