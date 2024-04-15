import moment from "moment";

export function msToTimeText(timeInMs: number): string {
	const hour = zeroPadding(Math.floor(timeInMs / (1000 * 60 * 60)), 2);
	const minute = zeroPadding(Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60)), 2);
	const second = zeroPadding(Math.floor(((timeInMs % (1000 * 60 * 60)) % (1000 * 60)) / 1000), 2);
	return `${hour}:${minute}:${second}`;
}

export function timeTextToMs(timeText: string): number {
	const times = timeText.split(":", 3);
	const hourToMs = Number.parseInt(times[0]) * 60 * 60 * 1000;
	const minuteToMs = Number.parseInt(times[1]) * 60 * 1000;
	const secondToMs = Number.parseInt(times[2]) * 1000;
	return hourToMs + minuteToMs + secondToMs;
}

export function msToTimes(timeInMs: number) {
	const hour = Math.floor(timeInMs / (1000 * 60 * 60));
	const minute = Math.floor((timeInMs % (1000 * 60 * 60)) / (1000 * 60));
	const second = Math.floor(((timeInMs % (1000 * 60 * 60)) % (1000 * 60)) / 1000);
	return { hour, minute, second };
}

export function zeroPadding(num: number, digits: number): string {
	let strNum = num.toString();
	while (strNum.length < digits) {
		strNum = `0${strNum}`;
	}
	return strNum;
}
export function toDisplayDate(date: string) {
	return moment(date, moment.ISO_8601).format("L");
}
