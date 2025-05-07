"use client";

import { useState } from "react";

type NavigationGraphProps = {
  selected: string;
  setSelected: (string: string) => void;
};

export default function NavigationGraph({
  selected,
  setSelected,
}: NavigationGraphProps) {
  return (
    <div className="grid grid-cols-[1fr_min-content_1fr] text-amber-300 self-center cursor-pointer">
      <div
        className={`px-4 py-2 bg-slate-600 rounded-l-md ${
          selected === "monthly" ? "gold-striped-lighter text-slate-700" : ""
        }`}
        onClick={() => {
          setSelected("monthly");
        }}
      >
        Mesecni
      </div>
      <div className="w-0.5 h-full bg-orange-300"></div>
      <div
        className={`px-4 py-2 rounded-r-md bg-slate-600 text-center ${
          selected === "yearly" ? "gold-striped-lighter text-slate-700" : ""
        }`}
        onClick={() => {
          setSelected("yearly");
        }}
      >
        Godisnji
      </div>
    </div>
  );
}
