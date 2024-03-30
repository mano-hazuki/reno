import { Icon } from "@/Components/Icon";
import { classnames } from "@/Lib/classnames";
import { faFont, faHeadphones, faImage, faSquare } from "@fortawesome/free-solid-svg-icons";

import type { RenoVideo } from "@/Lib/video";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export function CreateElementPanel() {
	return (
		<menu className="size-full p-4 overflow-x-hidden overflow-y-auto flex flex-col justify-start items-center gap-2">
			<ElementItem id={0} type="rect" />
			<ElementItem id={1} type="text" />
			<ElementItem id={2} type="image" />
			<ElementItem id={3} type="audio" />
		</menu>
	);
}

function ElementItem({ id, type }: { id: number; type: RenoVideo.ElementType }) {
	return (
		<li key={id} className="w-full h-fit">
			<button
				type="button"
				className={classnames("w-full h-fit p-4 rounded-sm shadow-sm shadow-gray-300 flex flex-row justify-start items-center gap-4", "bg-white hover:bg-gray-100")}
				onClick={() => {}}>
				<Icon className="text-base" icon={getIconByType(type)} />
				<span className="text-base truncate">{getLabelByType(type)}</span>
			</button>
		</li>
	);
}

function getIconByType(type: RenoVideo.ElementType): IconDefinition {
	switch (type) {
		case "rect": {
			return faSquare;
		}
		case "text": {
			return faFont;
		}
		case "image": {
			return faImage;
		}
		case "audio": {
			return faHeadphones;
		}
	}
}

function getLabelByType(type: RenoVideo.ElementType): string {
	switch (type) {
		case "rect": {
			return "Rect";
		}
		case "text": {
			return "Text";
		}
		case "image": {
			return "Image";
		}
		case "audio": {
			return "Audio";
		}
	}
}
