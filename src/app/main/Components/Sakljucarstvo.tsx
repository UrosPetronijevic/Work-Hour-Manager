"use client";

import { useState } from "react";
import Filijala from "./Positions/Filijala";
import Ekspoziture from "./Positions/Ekspoziture";

export default function Sakljucarstvo() {
  const [selected, setSelected] = useState("Filijala");

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelected(selectedValue);
  };

  const renderComponent = () => {
    switch (selected) {
      case "Filijala":
        return <Filijala />;
      case "Ekspoziture":
        return <Ekspoziture />;
      default:
        return <Filijala />;
    }
  };

  return (
    <div className="bg-slate-500 rounded-lg p-4 flex flex-col gap-2 text-white">
      <select
        onChange={handleSelect}
        value={selected}
        className={`w-min text-amber-300 bg-transparent outline-none`}
      >
        <option value="" hidden></option>
        <option value="Filijala">Filijala</option>
        <option value="Ekspoziture">Ekspoziture</option>
      </select>

      <div className="flex flex-col justify-center h-[70vh]">
        {renderComponent()}
      </div>
    </div>
  );
}
