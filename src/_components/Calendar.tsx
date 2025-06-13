"use client";

import {
  dayNamesShort,
  formatMonthYear,
  getEndOfMonth,
  getEndOfWeek,
  getStartOfMonth,
  getStartOfWeek,
  isSameMonth,
  isToday,
} from "@/_lib/_dates/currentDateData";

import { useState } from "react";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  /////////////////////////////////////////////////////////////////////////

  const handlePrevMonth = (): void => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() - 1);
    setCurrentMonth(newDate);
  };

  const handleNextMonth = (): void => {
    const newDate = new Date(currentMonth);
    newDate.setMonth(newDate.getMonth() + 1);
    setCurrentMonth(newDate);
  };

  /////////////////////////////////////////////////////////////////////////

  const monthStart = getStartOfMonth(currentMonth);
  const monthEnd = getEndOfMonth(currentMonth);
  const gridStart = getStartOfWeek(monthStart);
  const gridEnd = getEndOfWeek(monthEnd);

  const calendarDays: Date[] = [];
  let day: Date = new Date(gridStart);

  while (day <= gridEnd) {
    calendarDays.push(new Date(day));
    day.setDate(day.getDate() + 1);
  }

  /////////////////////////////////////////////////////////////////////////

  return (
    <div className="max-w-full rounded-lg bg-white px-4 py-8 shadow-lg">
      {/* Header */}
      <div className="mb-8 flex items-center justify-center gap-8 text-2xl">
        <button onClick={handlePrevMonth}>&lt;</button>
        <h2 className="font-semibold capitalize">
          {formatMonthYear(currentMonth, "sr-Latn")}
        </h2>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7 gap-2">
        {dayNamesShort.map((dayName: string) => (
          <div
            key={dayName}
            className="text-center text-lg font-medium text-gray-500"
          >
            {dayName}
          </div>
        ))}

        {calendarDays.map((day: Date) => (
          <div
            key={day.toString()}
            className={`
              flex p-4 py-5 cursor-pointer items-center justify-center rounded-full
              ${
                !isSameMonth(day, currentMonth)
                  ? "text-gray-400 cursor-not-allowed"
                  : ""
              }
              ${isToday(day) ? "bg-red-500 font-bold text-white" : ""}
              ${
                isSameMonth(day, currentMonth) && !isToday(day)
                  ? "hover:bg-gray-200"
                  : ""
              }
            `}
          >
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
}
