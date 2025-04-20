// Components/Navigation/NavigationMain.tsx
"use client";

import { useNavigationStore } from "@/stores/navigationStore";

const NavigationMain = () => {
  const setActiveComponent = useNavigationStore(
    (state) => state.setActiveComponent
  );

  return (
    <nav>
      <ul className="grid grid-cols-8 py-4 cursor-pointer rouded-md place-items-center bg-gradient-to-b from-slate-700 from- to-slate-600 to- text-[#E8B248ff]">
        <li onClick={() => {}} className="bg-blue-200">
          Dodaj
        </li>
        <li onClick={() => setActiveComponent("home")}>Pocetna</li>
        <li onClick={() => setActiveComponent("home")}>Profili padajuci</li>
        <li onClick={() => setActiveComponent("tables")}>Tabele</li>
        <li onClick={() => setActiveComponent("home")}>Sakljucarstvo</li>
        <li onClick={() => setActiveComponent("home")}>Grafici</li>
        <li onClick={() => setActiveComponent("home")}>Godisnji</li>
        <li onClick={() => setActiveComponent("home")}>Pomoc</li>
        {/* Add more navigation items */}
      </ul>
    </nav>
  );
};

export default NavigationMain;
