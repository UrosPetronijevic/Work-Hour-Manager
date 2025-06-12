"use client";

import { monthName } from "@/_lib/_dates/currentDateData";

export default function Calendar() {
  return (
    <div className="bg-red-300">
      <h1>{monthName}</h1>

      <div></div>
    </div>
  );
}
