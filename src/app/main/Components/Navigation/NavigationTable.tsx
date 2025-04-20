// Components/Navigation/NavigationTable.tsx
"use client";

import { useState } from "react";

interface Props {
  setItemSelected: (value: string) => void;
}

export default function NavigationTable({ setItemSelected }: Props) {
  const [activeItem, setActiveItem] = useState<string | null>("Mor");

  const handleMorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveItem(e.target.value);
    setItemSelected(e.target.value);
  };

  const handlePrevozChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveItem(e.target.value);
    setItemSelected(e.target.value);
  };

  const handleItemClick = (value: string) => {
    setActiveItem(value);
    setItemSelected(value);
  };

  return (
    <nav>
      <ul className="grid grid-cols-5 cursor-pointer p-2 bg-gradient-to-b from-slate-600 from- to-slate-500 to- text-[#E8B248ff]">
        <li className="w-full">
          <select
            onChange={handleMorChange}
            value={activeItem || ""}
            className={`w-full h-full text-center ${
              activeItem === "Mor" ||
              activeItem === "MorPP" ||
              activeItem === "MorZadruga"
                ? "bg-[#E8B248ff] text-slate-700"
                : ""
            }`} // Apply styling if active
          >
            <option>Mor</option>
            <option>MorPP</option>
            <option>MorZadruga</option>
          </select>
        </li>
        <li
          onClick={() => handleItemClick("Pripravnost")}
          className={`p-2 w-full text-center ${
            activeItem === "Pripravnost" ? "bg-[#E8B248ff] text-slate-700" : ""
          }`} // Apply styling if active
        >
          Pripravnost
        </li>
        <li className="w-full">
          <select
            onChange={handlePrevozChange}
            value={activeItem || ""}
            className={`w-full h-full text-center ${
              activeItem === "Prevoz 1" ||
              activeItem === "Prevoz 2" ||
              activeItem === "Prevoz 3"
                ? "bg-[#E8B248ff] text-slate-700"
                : ""
            }`} // Apply styling if active
          >
            <option>Prevoz 1</option>
            <option>Prevoz 2</option>
            <option>Prevoz 3</option>
          </select>
        </li>
        <li
          onClick={() => handleItemClick("Dodatno opt.")}
          className={`p-2 w-full text-center ${
            activeItem === "Dodatno opt." ? "gold-striped text-slate-700" : ""
          }`} // Apply styling if active
        >
          Dodatno opt.
        </li>
        <li
          onClick={() => handleItemClick("Prekovremeni")}
          className={`p-2 w-full text-center ${
            activeItem === "Prekovremeni" ? "bg-[#E8B248ff] text-slate-700" : ""
          }`} // Apply styling if active
        >
          Prekovremeni
        </li>
      </ul>
    </nav>
  );
}
