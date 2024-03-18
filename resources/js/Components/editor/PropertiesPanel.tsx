import type { VideoElement } from "@/types/video";

interface Props {
	element: VideoElement | null;
}

export function PropertiesPanel({ element }: Props) {
	if (!element) {
		return <NotSelected />;
	}
	return <div className="size-full bg-white">Properties</div>;
}

function NotSelected() {
	return (
		<div className="size-full bg-white flex flex-row justify-center items-center">
			<p>No element selected</p>
		</div>
	);
}
