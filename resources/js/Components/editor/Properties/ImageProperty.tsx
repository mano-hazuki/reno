import { Icon } from "@/Components/Icon";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useAtomValue } from "jotai/react";
import { useState } from "react";

import type { ChangeEvent } from "react";

export function ImageProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const elementId = useAtomValue(elementSelectedIdAtom);
	const src = elements.find((e) => e.id === elementId)!.image!.src;
	const updateSrc = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.image!.src = event.target.value;
		});
	};
	const opacity = elements.find((e) => e.id === elementId)!.image!.opacity;
	const updateOpacity = (event: ChangeEvent<HTMLInputElement>) => {
		if (elementId == null) {
			return;
		}
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((e) => e.id === elementId)!.image!.opacity = Number.parseInt(event.target.value);
		});
	};
	return (
		<li key="image" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Image</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-between items-center gap-4">
				<span className="w-full h-fit px-4 py-4 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Src</span>
					<input className="w-full h-fit flex-1 text-white truncate" type="text" value={src} placeholder="Src" onChange={updateSrc} />
				</span>

				<span className="w-full h-fit px-4 py-4 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
					<span className="flex-none text-white text-opacity-80">Opacity</span>
					<input className="w-full h-fit flex-1 text-white truncate" type="text" value={opacity} placeholder="Opacity" onChange={updateOpacity} />
				</span>
			</div>
		</li>
	);
}
