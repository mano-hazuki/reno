import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer, faCut } from "@fortawesome/free-solid-svg-icons";

export function ToolPanel() {
	return (
		<div className="w-fit h-full p-2 bg-white rounded flex flex-col justify-start items-center gap-2">
			<FontAwesomeIcon icon={ faArrowPointer } className="text-lg p-2" />
			<FontAwesomeIcon icon={ faCut } className="text-lg p-2" />
		</div>
	);
}