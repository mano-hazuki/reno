import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent, FocusEvent } from "react";

export function PositionProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);

	const valueX = elements.find((e) => e.id === elementId)!.position!.x;
	const updatePosX = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const x = Number.isNaN(value) ? 0 : value;
			prev.find((e) => e.id === elementId)!.position!.x = x;
		});
	};
	const valueY = elements.find((e) => e.id === elementId)!.position!.y;
	const updatePosY = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const y = Number.isNaN(value) ? 0 : value;
			prev.find((e) => e.id === elementId)!.position!.y = y;
		});
	};
	return (
		<li key="position" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Position</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-row justify-between items-center gap-4">
				<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">X</span>
					<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={valueX} placeholder="X" onBlur={updatePosX} />
				</span>

				<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Y</span>
					<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={valueY} placeholder="Y" onBlur={updatePosY} />
				</span>
			</div>
		</li>
	);
}
