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
import { useAbsenceStore } from "@/_stores/absencesStore";

import { useState } from "react";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  const { selected, setSelected } = useAbsenceStore();

  console.log(selected);

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

  const handleDayClick = (day: Date): void => {
    // Prevent selecting days from other months
    if (!isSameMonth(day, currentMonth)) {
      return;
    }

    const dayNumber = day.getDate();
    const isAlreadySelected = selected.includes(dayNumber);

    if (isAlreadySelected) {
      // If already selected, remove it from the array
      setSelected(selected.filter((d) => d !== dayNumber));
    } else {
      // If not selected, add it to the array
      setSelected([...selected, dayNumber]);
    }
  };

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

        {calendarDays.map((day: Date) => {
          const isDaySelected = selected.includes(day.getDate());
          const isDayInCurrentMonth = isSameMonth(day, currentMonth);
          const isDayToday = isToday(day);

          return (
            <div
              key={day.toString()}
              className={`
                flex p-4 py-5 cursor-pointer items-center justify-center rounded-full transition-colors duration-200
                ${
                  !isDayInCurrentMonth ? "text-gray-300 cursor-not-allowed" : ""
                }
                ${
                  isDayToday && !isDaySelected
                    ? "bg-red-500 font-bold text-white"
                    : ""
                }

                ${
                  isDaySelected && isDayInCurrentMonth
                    ? "bg-blue-500 text-white"
                    : ""
                }

                ${
                  isDayInCurrentMonth && !isDayToday && !isDaySelected
                    ? "hover:bg-gray-200"
                    : ""
                }
              `}
              onClick={() => handleDayClick(day)}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
}
