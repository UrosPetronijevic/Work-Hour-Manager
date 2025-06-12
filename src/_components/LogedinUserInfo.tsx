import {
  dayName,
  dayNumber,
  monthNumber,
  year,
} from "@/_lib/_dates/currentDateData";

export default function LogedinUserInfo() {
  return (
    <div className="flex justify-between p-4 text-2xl gold-striped-lighter font-bold">
      <span className="text-slate-600 tracking-wide">
        {dayName} | {dayNumber}.
        {monthNumber < 10 ? `0${monthNumber}` : monthNumber}.{year}
      </span>
      <span className="text-slate-600">username</span>
    </div>
  );
}
