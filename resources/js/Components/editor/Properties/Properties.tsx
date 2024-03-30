import { elementSelectedIdAtom } from "@/Pages/Video/Editor";
import { useAtomValue } from "jotai";
import { CanvasProperty } from "./CanvasProperty";
import { ElementProperties } from "./ElementProperties";

export function Properties() {
	const selectedId = useAtomValue(elementSelectedIdAtom);
	if (selectedId == null) {
		return <CanvasProperty />;
	}
	return <ElementProperties />;
}
