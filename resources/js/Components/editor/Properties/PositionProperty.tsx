import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent } from "react";

export function PositionProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);
	const valueX = elements.find((e) => e.id === elementId)!.position!.x;
	const updatePosX = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.position!.x = Number.parseInt(event.target.value);
		});
	};
	const valueY = elements.find((e) => e.id === elementId)!.position!.y;
	const updatePosY = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.position!.y = Number.parseInt(event.target.value);
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
					<input className="w-full h-fit flex-1 text-white truncate" type="text" value={valueX} placeholder="X" onChange={updatePosX} />
				</span>

				<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Y</span>
					<input className="w-full h-fit flex-1 text-white truncate" type="text" value={valueY} placeholder="Y" onChange={updatePosY} />
				</span>
			</div>
		</li>
	);
}
