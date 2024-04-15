import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useAtomValue } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent, FocusEvent } from "react";

export function BorderProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const elementId = useAtomValue(elementSelectedIdAtom);

	const enabled = elements.find((e) => e.id === elementId)!.border!.enabled;
	const updateEnabled = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.border!.enabled = event.target.checked;
		});
	};
	const width = elements.find((e) => e.id === elementId)!.border!.width;
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
			prev.find((e) => e.id === elementId)!.border!.width = width;
		});
	};
	const radius = elements.find((e) => e.id === elementId)!.border!.radius;
	const updateRadius = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const radius = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.border!.radius = radius;
		});
	};
	const color = elements.find((e) => e.id === elementId)!.border!.color;
	const updateColor = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.border!.color = event.target.value;
		});
	};
	return (
		<li key="border" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Border</span>
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

				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Width</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={width} placeholder="Width" onBlur={updateWidth} />
					</span>
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Radius</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={radius} placeholder="Radius" onBlur={updateRadius} />
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
