import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent, FocusEvent } from "react";

export function PaddingProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);
	const valueLeft = elements.find((e) => e.id === elementId)!.padding!.left;
	const updateLeft = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const left = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.padding!.left = left;
		});
	};
	const valueTop = elements.find((e) => e.id === elementId)!.padding!.top;
	const updateTop = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const top = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.padding!.top = top;
		});
	};
	const valueRight = elements.find((e) => e.id === elementId)!.padding!.right;
	const updateRight = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const right = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.padding!.right = right;
		});
	};
	const valueBottom = elements.find((e) => e.id === elementId)!.padding!.bottom;
	const updateBottom = (event: FocusEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			const value = Number.parseInt(event.target.value);
			const bottom = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
			prev.find((e) => e.id === elementId)!.padding!.bottom = bottom;
		});
	};
	return (
		<li key="padding" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Padding</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-start items-center gap-4">
				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Left</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={valueLeft} placeholder="Left" onBlur={updateLeft} />
					</span>
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Top</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={valueTop} placeholder="Top" onBlur={updateTop} />
					</span>
				</div>
				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Right</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={valueRight} placeholder="Right" onBlur={updateRight} />
					</span>
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Bottom</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" defaultValue={valueBottom} placeholder="Bottom" onBlur={updateBottom} />
					</span>
				</div>
			</div>
		</li>
	);
}
