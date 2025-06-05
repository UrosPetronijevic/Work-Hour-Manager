"use client";

import { useState } from "react";

export default function TableNavigation() {
  const [activeItem, setActiveItem] = useState<string | null>("Mor"); // Initial state is null

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveItem(e.target.value);
  };

  const handleItemClick = (value: string) => {
    setActiveItem(value);
  };

  return (
    <ul className="grid grid-cols-5 cursor-pointer p-2 bg-gradient-to-b from-slate-600 from- to-slate-500 to- text-[#E8B248ff] rounded-3xl">
      <li className="w-full">
        <select
          onChange={handleChange}
          value={activeItem || ""}
          className={`w-full h-full text-center outline-none ${
            activeItem === "Mor" ||
            activeItem === "MorPP" ||
            activeItem === "MorZadruga"
              ? "gold-striped text-slate-700 rounded-2xl"
              : ""
          }`}
        >
          <option value="" hidden>
            Mor
          </option>
          <option value="Mor">Mor</option>
          <option value="MorPP">MorPP</option>
          <option value="MorZadruga">MorZadruga</option>
        </select>
      </li>
      <li
        onClick={() => handleItemClick("Pripravnost")}
        className={`p-2 w-full text-center ${
          activeItem === "Pripravnost"
            ? "gold-striped text-slate-700 rounded-2xl"
            : ""
        }`}
      >
        Pripravnost
      </li>
      <li className="w-full">
        <select
          onChange={handleChange}
          value={activeItem || ""}
          className={`w-full h-full text-center outline-none ${
            activeItem === "Prevoz 1" ||
            activeItem === "Prevoz 2" ||
            activeItem === "Prevoz 3"
              ? "gold-striped text-slate-700 rounded-2xl"
              : ""
          }`}
        >
          <option value="" hidden>
            Prevoz 1
          </option>
          <option value="Prevoz 1">Prevoz 1</option>
          <option value="Prevoz 2">Prevoz 2</option>
        </select>
      </li>
      <li
        onClick={() => handleItemClick("Dodatno opt.")}
        className={`p-2 w-full text-center ${
          activeItem === "Dodatno opt."
            ? "gold-striped text-slate-700 rounded-2xl"
            : ""
        }`}
      >
        Dodatno opt.
      </li>
      <li
        onClick={() => handleItemClick("Prekovremeni")}
        className={`p-2 w-full text-center ${
          activeItem === "Prekovremeni"
            ? "gold-striped text-slate-700 rounded-2xl"
            : ""
        }`}
      >
        Prekovremeni
      </li>
    </ul>
  );
}
