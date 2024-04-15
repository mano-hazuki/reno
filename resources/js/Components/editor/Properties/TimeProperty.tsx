import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import type { FocusEvent } from "react";
import { useState } from "react";

import { Icon } from "@/Components/Icon";
import { msToTimes, zeroPadding } from "@/Lib/time";
import { elementSelectedIdAtom, elementsAtom } from "@/Pages/Video/Editor";
import { useAtom } from "jotai/react";

export function TimeProperty() {
	const [isOpen, setOpen] = useState<boolean>(false);
	const toggle = () => setOpen(!isOpen);

	const [elements, setElements] = useAtom(elementsAtom);
	const [elementId, setElementId] = useAtom(elementSelectedIdAtom);
	const initialStart = elements.find((el) => el.id === elementId)?.start;
	const initialDuration = elements.find((el) => el.id === elementId)?.duration;

	const [startHour, setStartHour] = useState<number>(msToTimes(initialStart ?? 0).hour);
	const [startMinute, setStartMinute] = useState<number>(msToTimes(initialStart ?? 0).minute);
	const [startSecond, setStartSecond] = useState<number>(msToTimes(initialStart ?? 0).second);
	const [durationHour, setDurationHour] = useState<number>(msToTimes(initialDuration ?? 0).hour);
	const [durationMinute, setDurationMinute] = useState<number>(msToTimes(initialDuration ?? 0).minute);
	const [durationSecond, setDurationSecond] = useState<number>(msToTimes(initialDuration ?? 0).second);

	const updateTime = () => {
		const start = startHour * 60 * 60 * 1000 + startMinute * 60 * 1000 + startSecond * 1000;
		const duration = durationHour * 60 * 60 * 1000 + durationMinute * 60 * 1000 + durationSecond * 1000;
		setElements((prev) => {
			if (!prev) {
				return;
			}
			prev.find((el) => el.id === elementId)!.start = start;
			prev.find((el) => el.id === elementId)!.duration = duration;
		});
	};
	const updateStartHour = (event: FocusEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const hour = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 24 ? 23 : Math.floor(value);
		setStartHour(hour);
		updateTime();
	};
	const updateStartMinute = (event: FocusEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const minute = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setStartMinute(minute);
		updateTime();
	};
	const updateStartSecond = (event: FocusEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const second = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setStartSecond(second);
		updateTime();
	};
	const updateDurationHour = (event: FocusEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const hour = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 24 ? 23 : Math.floor(value);
		setDurationHour(hour);
		updateTime();
	};
	const updateDurationMinute = (event: FocusEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const minute = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setDurationMinute(minute);
		updateTime();
	};
	const updateDurationSecond = (event: FocusEvent<HTMLInputElement>) => {
		const value = Number.parseInt(event.target.value);
		const second = Number.isNaN(value) ? 0 : value < 0 ? 0 : value >= 60 ? 59 : Math.floor(value);
		setDurationSecond(second);
		updateTime();
	};
	return (
		<li key="time" className="w-full h-fit px-4 flex flex-col justify-start items-center gap-2">
			<button className="w-full h-fit p-4 border-b border-b-white border-opacity-5 flex flex-row justify-between items-center" type="button" onClick={() => toggle()}>
				<span className="text-lg text-white text-opacity-80">Time</span>
				<Icon className="text-base text-white text-opacity-60" icon={isOpen ? faAngleUp : faAngleDown} />
			</button>
			<div style={{ display: isOpen ? "flex" : "none" }} className="w-full h-fit px-4 py-2 flex flex-col justify-start items-center gap-4">
				{/* Start */}
				<div className="w-full h-fit p-4 rounded bg-white bg-opacity-5 flex flex-row items-center gap-2">
					<span className="w-fit text-white text-opacity-80 truncate">Starts at</span>
					<span className="w-fit h-fit flex flex-row items-center">
						<input className="w-8 h-fit text-center text-white placeholder:text-opacity-10" type="text" defaultValue={zeroPadding(startHour, 2)} onBlur={updateStartHour} />
						<span className="text-white text-opacity-60">:</span>
						<input className="w-8 h-fit text-center text-white placeholder:text-opacity-10" type="text" defaultValue={zeroPadding(startMinute, 2)} onBlur={updateStartMinute} />
						<span className="text-white text-opacity-60">:</span>
						<input className="w-8 h-fit text-center text-white placeholder:text-opacity-10" type="text" defaultValue={zeroPadding(startSecond, 2)} onBlur={updateStartSecond} />
					</span>
				</div>

				{/* Duration */}
				<div className="w-full h-fit p-4 rounded bg-white bg-opacity-5 flex flex-row items-center gap-2">
					<span className="w-fit h-fit text-white text-opacity-80 truncate">Duration</span>
					<span className="w-fit h-fit flex flex-row items-center">
						<input className="w-8 h-fit text-center text-white placeholder:text-opacity-10" type="text" defaultValue={zeroPadding(durationHour, 2)} onBlur={updateDurationHour} />
						<span className="text-white text-opacity-60">:</span>
						<input
							className="w-8 h-fit text-center text-white placeholder:text-opacity-10"
							type="text"
							defaultValue={zeroPadding(durationMinute, 2)}
							onBlur={updateDurationMinute}
						/>
						<span className="text-white text-opacity-60">:</span>
						<input
							className="w-8 h-fit text-center text-white placeholder:text-opacity-10"
							type="text"
							defaultValue={zeroPadding(durationSecond, 2)}
							onBlur={updateDurationSecond}
						/>
					</span>
				</div>
			</div>
		</li>
	);
}
