import { faFont, faHeadphones, faImage } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@/Components/Icon";
import { classnames } from "@/Lib/classnames";
import type { VideoElementType } from "@/types/video";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export function ElementsPanel() {
	return (
		<ul className="size-full p-4 overflow-x-hidden overflow-y-auto flex flex-col justify-start items-center gap-2">
			<ElementItem id={0} type="text" />
			<ElementItem id={1} type="image" />
			<ElementItem id={2} type="audio" />
		</ul>
	);
}

function ElementItem({ id, type }: { id: number; type: VideoElementType }) {
	return (
		<li key={id} className={classnames("w-full h-fit p-4 rounded-sm shadow-sm shadow-gray-300 flex flex-row justify-start items-center gap-4", "bg-white hover:bg-gray-100")}>
			<Icon className="text-base" icon={getIconByType(type)} />
			<span className="text-base">{getLabelByType(type)}</span>
		</li>
	);
}

function getIconByType(type: VideoElementType): IconDefinition {
	switch (type) {
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

function getLabelByType(type: VideoElementType): string {
	switch (type) {
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
