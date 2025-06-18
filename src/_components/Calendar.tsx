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
  monthNames,
} from "@/_lib/_dates/currentDateData";

import { useAbsenceStore, Absence } from "@/_stores/absencesStore";
import useProfileStore from "@/_stores/activeProfile";

import { useMemo, useState } from "react";

const absenceColorMap: { [key: string]: string } = {
  "Bolovanje 100": "bg-yellow-400",
  "Bolovanje 30": "bg-yellow-300",
  "Bolovanje na teret fonda": "bg-yellow-200",
  "Godisnji odmor": "bg-green-300",
  "Placeno odsustvo": "bg-blue-400",
  "Porodiljsko odsustvo": "bg-blue-300",
};

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const { activeProfile } = useProfileStore();
  const { selected, setSelected, absences } = useAbsenceStore();

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

  const absenceLookup = useMemo(() => {
    // If there's no active profile, return an empty map so no colors are shown.
    if (!activeProfile) {
      return new Map<string, Absence>();
    }

    const map = new Map<string, Absence>();
    absences
      // Filter absences to only include those for the current active profile.
      .filter(
        (absence) => absence.kadrovskiBroj === activeProfile.kadrovskiBroj
      )
      // Then, create the map from the filtered list.
      .forEach((absence) => {
        const key = `${absence.godina}-${absence.mesec}-${absence.dan}`;
        map.set(key, absence);
      });
    return map;
  }, [absences, activeProfile]);

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
          // --- STEP 3: Update Rendering Logic ---
          const isDaySelected = selected.includes(day.getDate());
          const isDayInCurrentMonth = isSameMonth(day, currentMonth);
          const isDayToday = isToday(day);

          // Create a key for the current day to look up in our map
          const dayKey = `${day.getFullYear()}-${
            monthNames[day.getMonth()]
          }-${day.getDate()}`;
          const absenceInfo = absenceLookup.get(dayKey);
          const absenceBgColor = absenceInfo
            ? absenceColorMap[absenceInfo.odsustva]
            : null;

          return (
            <div
              key={day.toString()}
              className={`
                flex p-4 py-5 cursor-pointer items-center justify-center rounded-full transition-colors duration-200
                ${
                  !isDayInCurrentMonth ? "text-gray-300 cursor-not-allowed" : ""
                }

                {/* Priority 1: Selected Day */}
                ${
                  isDaySelected && isDayInCurrentMonth
                    ? "bg-blue-500 text-white"
                    : ""
                }

                {/* Priority 2: Today (if not selected) */}
                ${
                  !isDaySelected && isDayToday
                    ? "bg-red-500 font-bold text-white"
                    : ""
                }

                {/* Priority 3: Absence Day (if not selected and not today) */}
                ${
                  !isDaySelected && absenceBgColor && isDayInCurrentMonth
                    ? `${absenceBgColor} text-gray-800`
                    : ""
                }

                {/* Priority 4: Default Hover (if no other style applies) */}
                ${
                  isDayInCurrentMonth &&
                  !isDaySelected &&
                  !isDayToday &&
                  !absenceBgColor
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
