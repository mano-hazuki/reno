import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useAtomValue } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent, FocusEvent } from "react";

export function OutlineProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const elementId = useAtomValue(elementSelectedIdAtom);

	const enabled = elements.find((e) => e.id === elementId)!.outline!.enabled;
	const updateEnabled = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.outline!.enabled = event.target.checked;
		});
	};
	const width = elements.find((e) => e.id === elementId)!.outline!.width;
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
			prev.find((e) => e.id === elementId)!.outline!.width = width;
		});
	};
	const color = elements.find((e) => e.id === elementId)!.outline!.color;
	const updateColor = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.outline!.color = event.target.value;
		});
	};
	return (
		<li key="outline" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Outline</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-start items-center gap-4">
				<span className="w-full h-fit px-4 py-4 rounded flex flex-row justify-between items-center gap-3 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Enabled</span>
					<input
						className="w-5 h-5 flex-none rounded border border-white border-opacity-10 bg-white bg-opacity-5 checked:bg-emerald-400"
						type="checkbox"
						checked={enabled}
						onChange={updateEnabled}
					/>
				</span>

				<span className="w-full h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Width</span>
					<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={width} placeholder="Right" onBlur={updateWidth} />
				</span>

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
