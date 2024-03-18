import { Head } from "@inertiajs/react";
import { createContext, useEffect, useState } from "react";

import { ControlPanel } from "@/Components/editor/ControlPanel";
import { ElementsPanel } from "@/Components/editor/ElementsPanel";
import { PropertiesPanel } from "@/Components/editor/PropertiesPanel";
import { TopBar } from "@/Components/editor/TopBar";
import { VideoPreviewPanel } from "@/Components/editor/VideoPreviewPanel";

import type { AuthenticatedPageProps, UserVideo } from "@/types";
import type { CanvasProps, Track, VideoData, VideoElement } from "@/types/video";

export const TracksContext = createContext({} as { tracks: Track[] | undefined; setTracks: React.Dispatch<React.SetStateAction<Track[] | undefined>> });

interface Props extends AuthenticatedPageProps {
	video?: UserVideo;
}

export type Tool = "select" | "text" | "image";

export default function Editor({ auth, video }: Props) {
	const [title, setTitle] = useState<string>(video ? video.title : "New Video");
	const [canvas, setCanvas] = useState<CanvasProps>();
	const [tracks, setTracks] = useState<Track[]>();
	const [isLoading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown>();
	const [tool, setTool] = useState<Tool>("select");
	const [element, setElement] = useState<VideoElement | null>(null);

	function handleDragStart(event: React.DragEvent) {
		event.dataTransfer.setData("", "");
	}

	function handleDragOver(event: React.DragEvent) {
		event.preventDefault();
	}

	async function fetchVideoData() {
		try {
			setLoading(true);
			const res = await fetch("/data.json");
			const data = (await res.json()) as VideoData;
			setCanvas(data.canvas);
			setTracks(data.tracks);
		} catch (e: unknown) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		fetchVideoData();
	}, []);
	return (
		<TracksContext.Provider value={{ tracks, setTracks }}>
			<Head title={title} />
			<main className="w-svh h-svh bg-white flex flex-col justify-start items-center">
				{/* Top Bar */}
				<div className="w-full h-14 flex-none border-b border-b-gray-200">
					<TopBar title={title} setTitle={setTitle} tool={tool} setTool={setTool} />
				</div>

				<div className="w-full h-full flex-1 flex flex-row justify-start items-center">
					{/* Elements */}
					<div className="w-2/12 h-full border-r border-r-gray-200">
						<ElementsPanel />
					</div>

					{/* Video Preview and Track bar */}
					<div className="w-7/12 h-full flex flex-col justify-start items-center">
						{/* Video Preview */}
						<div className="w-full h-3/5">
							<VideoPreviewPanel />
						</div>

						{/* Control */}
						<div className="w-full h-2/5 border-t border-t-gray-200">
							<ControlPanel />
						</div>
					</div>

					{/* Properties */}
					<div className="w-3/12 h-full border-l border-l-gray-200">
						<PropertiesPanel element={element} />
					</div>
				</div>
			</main>
		</TracksContext.Provider>
	);
}
