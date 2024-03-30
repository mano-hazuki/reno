import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent } from "react";

export function MarginProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);
	const valueLeft = elements.find((e) => e.id === elementId)!.margin!.left;
	const updateLeft = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.margin!.left = Number.parseInt(event.target.value);
		});
	};
	const valueTop = elements.find((e) => e.id === elementId)!.margin!.top;
	const updateTop = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.padding!.top = Number.parseInt(event.target.value);
		});
	};
	const valueRight = elements.find((e) => e.id === elementId)!.margin!.right;
	const updateRight = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.margin!.right = Number.parseInt(event.target.value);
		});
	};
	const valueBottom = elements.find((e) => e.id === elementId)!.margin!.bottom;
	const updateBottom = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.margin!.bottom = Number.parseInt(event.target.value);
		});
	};
	return (
		<li key="margin" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Margin</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-start items-center gap-4">
				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Left</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={valueLeft} placeholder="Left" onChange={updateLeft} />
					</span>
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Top</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={valueTop} placeholder="Top" onChange={updateTop} />
					</span>
				</div>
				<div className="w-full h-fit flex flex-row justify-between items-center gap-4">
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Right</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={valueRight} placeholder="Right" onChange={updateRight} />
					</span>
					<span className="w-1/2 h-fit px-4 py-4 rounded flex flex-row items-center gap-3 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">Bottom</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={valueBottom} placeholder="Bottom" onChange={updateBottom} />
					</span>
				</div>
			</div>
		</li>
	);
}
