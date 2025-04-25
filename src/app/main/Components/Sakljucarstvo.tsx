"use client";

import { useState } from "react";
import Filijala from "./Positions/Filijala";
import Ekspoziture from "./Positions/Ekspoziture";
import Prijem from "./Positions/Prijem";
import Nbs from "./Positions/Nbs";
import Vozaci from "./Positions/Vozaci";

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
    <div className="bg-slate-300/30 rounded-lg">
      <div className="text-slate-700 p-4 flex flex-col gap-2">
        <select
          onChange={handleSelect}
          value={selected}
          className={`w-min text-white`}
        >
          <option value="" hidden></option>
          <option value="Filijala">Filijala</option>
          <option value="Ekspoziture">Ekspoziture</option>
        </select>

        <div>{renderComponent()}</div>
      </div>
    </div>
  );
}
