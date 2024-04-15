import { canvasAtom } from "@/Pages/Video/Editor";
import { useAtom } from "jotai/react";

import type { ChangeEvent } from "react";

export function CanvasProperty() {
	const [canvas, setCanvas] = useAtom(canvasAtom);

	function updateWidth(event: ChangeEvent<HTMLInputElement>) {
		const value = Number.parseInt(event.target.value);
		const width = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
		const height = (width / 16) * 9;
		setCanvas({ ...canvas, width: width, height: height });
	}
	function updateHeight(event: ChangeEvent<HTMLInputElement>) {
		const value = Number.parseInt(event.target.value);
		const height = Number.isNaN(value) ? 0 : value < 0 ? 0 : value;
		const width = (height / 9) * 16;
		setCanvas({ ...canvas, height: height, width: width });
	}
	function updateColor(e: ChangeEvent<HTMLInputElement>) {
		setCanvas({ ...canvas, color: e.target.value });
	}
	return (
		<div className="size-full p-4 bg-white bg-opacity-5 rounded flex flex-col justify-start items-start gap-3">
			<h2 className="px-4 py-2 flex-none text-xl text-white text-opacity-80">Canvas Options</h2>
			<div className="w-full h-px flex-none bg-white opacity-5" />
			<menu className="size-full py-2 flex-1 flex flex-col justify-start items-center gap-2">
				<li className="w-full h-16 px-4 py-2 flex flex-row justify-between items-center gap-4">
					<span className="w-1/5 h-full px-2 truncate text-lg text-white text-opacity-80 flex flex-row items-center">Size</span>

					<span className="w-2/5 h-full px-4 py-2 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">W</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={canvas.width} placeholder="Width" onChange={updateWidth} />
					</span>

					<span className="w-2/5 h-full px-4 py-2 rounded flex flex-row items-center gap-2 bg-white bg-opacity-5">
						<span className="flex-none text-white text-opacity-80">H</span>
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={canvas.height} placeholder="Height" onChange={updateHeight} />
					</span>
				</li>

				<li className="w-full h-16 px-4 py-2 flex flex-row justify-between items-center gap-4">
					<span className="w-1/5 h-full px-2 truncate text-lg text-white text-opacity-80 flex flex-row items-center">Color</span>

					<span className="w-4/5 h-full px-4 py-2 rounded flex flex-row items-center gap-4 bg-white bg-opacity-5">
						<span style={{ backgroundColor: canvas.color }} className="w-auto h-4/5 aspect-square flex-none rounded" />
						<input className="w-full h-fit flex-1 text-white truncate" type="text" value={canvas.color} placeholder="Color" onChange={updateColor} />
					</span>
				</li>
			</menu>
		</div>
	);
}
