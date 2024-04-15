import { Icon } from "@/Components/Icon";
import { zeroPadding } from "@/Lib/time";
import { elementsAtom, newElementTypeAtom, tracksAtom, videoLastIdAtom } from "@/Pages/Video/Editor";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { useAtom, useAtomValue } from "jotai/react";
import { useState } from "react";

import { type RenoVideo, initialAudioElement, initialImageElement, initialRectElement, initialTextElement } from "@/Lib/video";
import type { ChangeEvent, SetStateAction } from "react";

export function AddElementModal() {
	const [elements, setElements] = useAtom(elementsAtom);
	const [newElementType, setNewElementType] = useAtom(newElementTypeAtom);
	const [lastId, setLastId] = useAtom(videoLastIdAtom);
	const [trackId, setTrackId] = useState<number>(0);
	const [startHour, setStartHour] = useState<number>(0);
	const [startMinute, setStartMinute] = useState<number>(0);
	const [startSecond, setStartSecond] = useState<number>(0);
	const [durationHour, setDurationHour] = useState<number>(0);
	const [durationMinute, setDurationMinute] = useState<number>(0);
	const [durationSecond, setDurationSecond] = useState<number>(0);
	const updateStartHour = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const hour = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 24 ? 23 : Math.floor(value);
		setStartHour(hour);
	};
	const updateStartMinute = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const minute = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setStartMinute(minute);
	};
	const updateStartSecond = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const second = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setStartSecond(second);
	};
	const updateDurationHour = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const hour = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 24 ? 23 : Math.floor(value);
		setDurationHour(hour);
	};
	const updateDurationMinute = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const minute = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setDurationMinute(minute);
	};
	const updateDurationSecond = (event: ChangeEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const second = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setDurationSecond(second);
	};
	if (newElementType == null) {
		return;
	}
	const hideModal = () => setNewElementType(null);
	const reset = () => {
		setTrackId(0);
		setStartHour(0);
		setStartMinute(0);
		setStartSecond(0);
		setDurationHour(0);
		setDurationMinute(0);
		setDurationSecond(0);
	};
	const addElement = () => {
		const newElement = (): RenoVideo.Element => {
			const id = lastId + 1;
			const start = startHour * 60 * 60 * 1000 + startMinute * 60 * 1000 + startSecond * 1000;
			const duration = durationHour * 60 * 60 * 1000 + durationMinute * 60 * 1000 + durationSecond * 1000;

			switch (newElementType) {
				case "rect": {
					return initialRectElement(id, trackId, start, duration);
				}
				case "text": {
					return initialTextElement(id, trackId, start, duration);
				}
				case "image": {
					return initialImageElement(id, trackId, start, duration);
				}
				case "audio": {
					return initialAudioElement(id, trackId, start, duration);
				}
			}
		};
		setElements([...elements, newElement()]);
		setLastId(newElement().id);
		reset();
		hideModal();
	};
	return (
		<div className="absolute top-0 z-20 size-full bg-black bg-opacity-20">
			<div className="size-full backdrop-blur flex flex-row justify-center items-center">
				<div className="relative w-fit h-fit max-w-full max-h-full rounded bg-zinc-900">
					<div
						style={{ minWidth: "32svw", minHeight: "20svw" }}
						className="relative w-fit h-fit max-w-full max-h-full p-8 rounded bg-white bg-opacity-10 flex flex-col justify-between items-start">
						<h1 className="text-2xl text-white">Add {`${newElementType}`} element</h1>

						<div className="w-full h-px bg-white bg-opacity-5" />

						<div className="w-full h-fit flex flex-col items-start gap-4">
							{/* Track */}
							<div className="w-full h-fit flex flex-row items-center gap-4">
								<span className="w-1/6 text-lg text-white text-opacity-80 truncate">Track</span>
								<Dropdown trackId={trackId} setTrackId={setTrackId} />
							</div>

							{/* Start */}
							<div className="w-full h-fit flex flex-row items-center gap-4">
								<span className="w-1/6 text-lg text-white text-opacity-80 truncate">Starts at</span>
								<span className="w-fit h-fit p-2 rounded bg-white bg-opacity-10 flex flex-row items-center gap-2">
									<input
										className="w-16 h-fit text-center text-lg text-white placeholder:text-opacity-10"
										type="text"
										value={zeroPadding(startHour, 2)}
										onChange={updateStartHour}
									/>
									<span className="text-lg text-white text-opacity-60">:</span>
									<input
										className="w-16 h-fit text-center text-lg text-white placeholder:text-opacity-10"
										type="text"
										value={zeroPadding(startMinute, 2)}
										onChange={updateStartMinute}
									/>
									<span className="text-lg text-white text-opacity-60">:</span>
									<input
										className="w-16 h-fit text-center text-lg text-white placeholder:text-opacity-10"
										type="text"
										value={zeroPadding(startSecond, 2)}
										onChange={updateStartSecond}
									/>
								</span>
							</div>

							{/* Duration */}
							<div className="w-full h-fit flex flex-row items-center gap-4">
								<span className="w-1/6 h-fit text-lg text-white text-opacity-80 truncate">Duration</span>
								<span className="w-fit h-fit p-2 rounded bg-white bg-opacity-10 flex flex-row items-center gap-2">
									<input
										className="w-16 h-fit text-center text-lg text-white placeholder:text-opacity-10"
										type="text"
										value={zeroPadding(durationHour, 2)}
										onChange={updateDurationHour}
									/>
									<span className="text-lg text-white text-opacity-60">:</span>
									<input
										className="w-16 h-fit text-center text-lg text-white placeholder:text-opacity-10"
										type="text"
										value={zeroPadding(durationMinute, 2)}
										onChange={updateDurationMinute}
									/>
									<span className="text-lg text-white text-opacity-60">:</span>
									<input
										className="w-16 h-fit text-center text-lg text-white placeholder:text-opacity-10"
										type="text"
										value={zeroPadding(durationSecond, 2)}
										onChange={updateDurationSecond}
									/>
								</span>
							</div>
						</div>

						<div className="w-full h-px bg-white bg-opacity-5" />

						<div className="w-full h-fit flex flex-row justify-between items-center">
							<button
								className="px-4 py-2 text-base text-white rounded bg-white bg-opacity-10 hover:bg-opacity-20"
								type="button"
								onClick={() => {
									reset();
									hideModal();
								}}>
								Cancel
							</button>
							<button className="px-4 py-2 text-base text-white rounded bg-emerald-400 bg-opacity-80 hover:bg-opacity-100" type="button" onClick={addElement}>
								Add
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function Dropdown({ trackId, setTrackId }: { trackId: number; setTrackId: React.Dispatch<SetStateAction<number>> }) {
	const [isExpanding, setExpanding] = useState<boolean>(false);
	const toggle = () => setExpanding(!isExpanding);
	const tracks = useAtomValue(tracksAtom);
	const trackName = tracks.find((track) => track.id === trackId)?.name;
	return (
		<span
			style={{ borderBottomLeftRadius: isExpanding ? "0" : "0.25rem", borderBottomRightRadius: isExpanding ? "0" : "0.25rem" }}
			className="relative w-fit h-fit p-2 rounded-t bg-white bg-opacity-10 flex flex-col items-center gap-2">
			<button className="w-fit h-fit px-2 flex flex-row items-center gap-4" type="button" onClick={toggle}>
				<div className="w-56 h-fit text-lg text-white placeholder:text-opacity-10">{trackName}</div>
				<Icon className="text-lg text-white text-opacity-60" icon={isExpanding ? faCaretUp : faCaretDown} />
			</button>
			<DropdownContents isExpanding={isExpanding} toggle={toggle} setTrackId={setTrackId} />
		</span>
	);
}

function DropdownContents({ isExpanding, toggle, setTrackId }: { isExpanding: boolean; toggle: () => void; setTrackId: React.Dispatch<SetStateAction<number>> }) {
	if (!isExpanding) {
		return;
	}
	const tracks = useAtomValue(tracksAtom);
	return (
		<menu className="absolute top-full w-full h-fit rounded-b bg-zinc-900 flex flex-col justify-start items-center">
			{tracks.map((track) => (
				<li key={track.id} className="w-full h-fit bg-white bg-opacity-20 hover:bg-opacity-30 last:rounded-b">
					<button
						type="button"
						className="w-full h-fit px-4 py-2 text-lg text-white"
						onClick={() => {
							setTrackId(track.id);
							toggle();
						}}>
						{track.name}
					</button>
				</li>
			))}
		</menu>
	);
}
