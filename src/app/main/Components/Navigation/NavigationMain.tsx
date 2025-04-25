// Components/Navigation/NavigationMain.tsx
"use client";

import { useState } from "react";
import { useNavigationStore } from "@/stores/navigationStore";

const NavigationMain = () => {
  const setActiveComponent = useNavigationStore(
    (state) => state.setActiveComponent
  );
  const [activeLi, setActiveLiState] = useState<number | null>(null);

  const handleLiClick = (componentName: string, index: number) => {
    setActiveComponent(componentName);
    setActiveLiState(index);
  };

  return (
    <nav>
      <ul className="grid grid-cols-8 cursor-pointer rouded-md place-items-center bg-gradient-to-b from-slate-700 from- to-slate-600 to- text-[#E8B248ff]">
        <li
          onClick={() => {}}
          className="w-full flex justify-center items-center"
        >
          <span className="py-1 w-3/5 text-center border border-sky-300 text-sky-300">
            Dodaj
          </span>
        </li>
        <li
          onClick={() => handleLiClick("home", 1)}
          className={`py-4 ${
            activeLi === 1
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Pocetna
        </li>
        <li
          onClick={() => handleLiClick("profiles", 2)}
          className={`py-4 ${
            activeLi === 2
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Profili padajuci
        </li>
        <li
          onClick={() => handleLiClick("tables", 3)}
          className={`py-4 ${
            activeLi === 3
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Tabele
        </li>
        <li
          onClick={() => handleLiClick("sakljucarstvo", 4)}
          className={`py-4 ${
            activeLi === 4
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Sakljucarstvo
        </li>
        <li
          onClick={() => handleLiClick("graphs", 5)}
          className={`py-4 ${
            activeLi === 5
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Grafici
        </li>
        <li
          onClick={() => handleLiClick("yearly", 6)}
          className={`py-4 ${
            activeLi === 6
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Godisnji
        </li>
        <li
          onClick={() => handleLiClick("help", 7)}
          className={`py-4 ${
            activeLi === 7
              ? "underline underline-[#E8B248ff] underline-offset-10"
              : ""
          }`}
        >
          Pomoc
        </li>
        {/* Add more navigation items */}
      </ul>
    </nav>
  );
};

export default NavigationMain;
