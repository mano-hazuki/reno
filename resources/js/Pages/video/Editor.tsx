import { ControlPanel } from "@/Components/Editor/ControlPanel";
import { CreateElementPanel } from "@/Components/Editor/CreateElementPanel";
import { PropertiesPanel } from "@/Components/Editor/PropertiesPanel";
import { TopBar } from "@/Components/Editor/TopBar";
import { VideoPreviewPanel } from "@/Components/Editor/VideoPreviewPanel";
import { Head } from "@inertiajs/react";
import { atom, createStore } from "jotai";
import { atomWithImmer } from "jotai-immer";
import { Provider } from "jotai/react";
import { useEffect, useState } from "react";

import { Properties } from "@/Components/Editor/Properties/Properties";
import type { RenoVideo } from "@/Lib/video";
import type { AuthenticatedPageProps, UserVideo } from "@/types";

/* Initial values of video data */
const initialCanvas: RenoVideo.Canvas = {
	width: 1920,
	height: 1080,
	color: "#FFFFFF",
};
const initialTracks: RenoVideo.Track[] = [
	{
		id: 0,
		name: "Track 1",
		disabled: false,
		locked: false,
	},
];
const initialElements: RenoVideo.Element[] = [];

export const editorStore = createStore();

export const canvasAtom = atom<RenoVideo.Canvas>(initialCanvas);
export const tracksAtom = atom<RenoVideo.Track[]>(initialTracks);
export const elementsAtom = atomWithImmer<RenoVideo.Element[]>(initialElements);

export const elementSelectedIdAtom = atomWithImmer<number | null>(null);

export const videoCurrentTimeAtom = atom<number>(0);
export const videoDurationAtom = atom<number>(0);
export const videoLastIdAtom = atom<number>(0);

interface Props extends AuthenticatedPageProps {
	video?: UserVideo;
}

export default function Editor({ auth, video }: Props) {
	const [title, setTitle] = useState<string>(video ? video.title : "New Video");
	const [isLoading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<unknown>();

	async function fetchVideoData() {
		try {
			setLoading(true);

			const res = await fetch("/data_new.json");
			const data = (await res.json()) as RenoVideo.Data;
			editorStore.set(canvasAtom, data.canvas);
			editorStore.set(tracksAtom, data.tracks);
			editorStore.set(elementsAtom, data.elements);
		} catch (e: unknown) {
			setError(e);
		} finally {
			setLoading(false);
		}
	}
	useEffect(() => {
		fetchVideoData();
	});
	return (
		<Provider store={editorStore}>
			<Head title={title} />
			<main className="w-svh h-svh overflow-hidden bg-zinc-900 flex flex-col justify-start items-center">
				{/* Top Bar */}
				<div className="w-full h-20 px-4 pt-4 pb-2 flex-none">
					<TopBar title={title} setTitle={setTitle} />
				</div>

				<div style={{ width: "100%", height: "calc(100svh - 5rem)" }} className="flex-1 flex flex-row justify-start items-center">
					{/* Elements */}
					<div className="w-1/12 h-full">
						<CreateElementPanel />
					</div>

					{/* Video Preview and Track bar */}
					<div className="w-8/12 h-full flex flex-col justify-start items-center">
						{/* Video Preview */}
						<div className="w-full h-4/6">
							<VideoPreviewPanel />
						</div>

						{/* Control */}
						<div className="w-full h-2/6">
							<ControlPanel />
						</div>
					</div>

					{/* Properties */}
					<div className="w-3/12 h-full px-4 pt-2 pb-4 overflow-hidden">
						<Properties />
					</div>
				</div>
			</main>
		</Provider>
	);
}
