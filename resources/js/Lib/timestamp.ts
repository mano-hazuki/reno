// export interface Date {
//   year: number;
//   month: number;
//   day: number;
// }
//
// export interface Time {
//   hour: number;
//   minute: number;
//   second: number;
//   millisecond: number;
// }
//
// export interface Diff {
//   diff?: {
//     hour?: number;
//     minute?: number;
//   };
// }
//
// type DateTime = Date & Time & Diff;
//
// export function getDateTimeFromIso(isoDateTime: string): UTCFormat {
//   const dateAndTime: string[] = isoDateTime.split("T", 2);
//   const dateRaw: string[] = dateAndTime[0].split("-", 3);
//   const timeRaw: string[] = dateAndTime[1].split(":", 3);
//   const msAndZone: string[] = timeRaw[2].split(".", 2);
//   const date: Date = {
//     year: parseInt(dateRaw[0]),
//     month: parseInt(dateRaw[1]),
//     day: parseInt(dateRaw[2])
//   };
//   const time: Time = {
//     hour: parseInt(timeRaw[0]),
//     minute: parseInt(timeRaw[1]),
//     second: parseInt(msAndZone[0])
//   };
// }
//
// function getElapsedDateTime() {
//
// }
