import moment from "moment";
export function timeFormat(time: string) {
  return moment(time).format("MMMM D, YYYY");
}

export function dateFormat(date: string) {
  return moment(date).format("YYYY-MM-DD");
}

export function dateFormatWithWeek(date: string) {
  return moment(date).format("dddd, MMMM D, YYYY");
}
