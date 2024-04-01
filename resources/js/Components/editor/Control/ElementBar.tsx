import { useAtom } from "jotai/react";

import { classnames } from "@/Lib/classnames";
import type { RenoVideo } from "@/Lib/video";
import { elementSelectedIdAtom } from "@/Pages/Video/Editor";

interface Props {
	element: RenoVideo.Element;
	videoDuration: number;
}

// export function ElementBar(props: Props) {
// 	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);
// 	const updateElementId = () => setElementId(props.element.id);
// 	return (
// 		<button
// 			type="button"
// 			onClick={updateElementId}
// 			style={{ left: getElementX(element), width: getElementWidth(element), height: elementHeight }}
// 			className={classnames(
// 				"absolute px-4 text-white text-opacity-80 flex flex-row justify-start items-center rounded bg-white bg-opacity-10 hover:bg-opacity-20",
// 				props.element.id === elementId ? "border-2 border-emerald-400" : "",
// 			)}>
// 			{props.element.id}
// 		</button>
// 	);
// }
