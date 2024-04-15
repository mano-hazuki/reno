import { Icon } from "@/Components/Icon";
import { classnames } from "@/Lib/classnames";
import { newElementTypeAtom } from "@/Pages/Video/Editor";
import { faFont, faHeadphones, faImage, faSquare } from "@fortawesome/free-solid-svg-icons";
import { useAtom } from "jotai";

import type { RenoVideo } from "@/Lib/video";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export function AddElement() {
	return (
		<menu className="size-full p-4 overflow-x-hidden overflow-y-auto rounded bg-white bg-opacity-5 flex flex-col justify-start items-center">
			<ElementItem id={0} type="rect" />
			<ElementItem id={1} type="text" />
			<ElementItem id={2} type="image" />
			<ElementItem id={3} type="audio" />
		</menu>
	);
}

function ElementItem({ id, type }: { id: number; type: RenoVideo.ElementType }) {
	const [newElementType, setNewElementType] = useAtom(newElementTypeAtom);
	return (
		<li key={id} className="w-full h-auto aspect-square p-2">
			<button
				type="button"
				className={classnames("w-full h-full rounded flex flex-col justify-center items-center gap-2", "bg-transparent hover:bg-white hover:bg-opacity-5")}
				onClick={() => {
					setNewElementType(type);
				}}>
				<Icon className="text-xl text-white text-opacity-80" icon={getIconByType(type)} />
				<span className="text-base text-white text-opacity-60 truncate">{getLabelByType(type)}</span>
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
