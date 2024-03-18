import { Icon } from "@/Components/Icon";
import { faArrowPointer, faFont, faImage } from "@fortawesome/free-solid-svg-icons";

import { classnames } from "@/Lib/classnames";

import type { Tool } from "@/Pages/video/Editor";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
	title: string;
	setTitle: React.Dispatch<React.SetStateAction<string>>;
	tool: Tool;
	setTool: React.Dispatch<React.SetStateAction<Tool>>;
}

export function TopBar({ title, setTitle, tool, setTool }: Props) {
	return (
		<div className="w-full h-full bg-white flex flex-row justify-between items-center">
			<div className="w-2/5 h-full flex flex-row justify-start items-center">
				<ToolButton toolType="select" currentTool={tool} setTool={setTool} />
				<ToolButton toolType="text" currentTool={tool} setTool={setTool} />
				<ToolButton toolType="image" currentTool={tool} setTool={setTool} />
			</div>
			<div className="w-1/5 h-full flex flex-row justify-center items-center">
				<input type="text" placeholder="Type video title" value={title} onChange={(event) => setTitle(event.target.value)} className="w-full h-full flex-none text-center" />
			</div>
			<div className="w-2/5 h-full flex flex-row justify-end items-center">Others</div>
		</div>
	);
}

function ToolButton({ toolType, currentTool, setTool }: { toolType: Tool; currentTool: Tool; setTool: React.Dispatch<React.SetStateAction<Tool>> }) {
	const isSelected: boolean = currentTool === toolType;
	return (
		<button
			type="button"
			className={classnames("w-auto h-full aspect-square flex flex-row justify-center items-center", isSelected ? "bg-emerald-400" : "bg-white hover:bg-gray-200")}
			onClick={() => setTool(toolType)}>
			<Icon icon={getToolIcon(toolType)} className={classnames("size-1/3", isSelected ? "text-white" : "text-black")} />
		</button>
	);
}

function getToolIcon(toolType: Tool): IconDefinition {
	switch (toolType) {
		case "select": {
			return faArrowPointer;
		}
		case "text": {
			return faFont;
		}
		case "image": {
			return faImage;
		}
	}
}
