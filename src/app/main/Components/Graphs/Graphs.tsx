"use client";

import { useState } from "react";
import NavigationGraph from "../Navigation/NavigationGraph";
import Graph from "./Graph";
import { rawNumsArray, rawNumsArrayYearly } from "./algorithms";

export default function Graphs() {
  const [selected, setSelected] = useState<string>("monthly");

  return (
    <div className="flex flex-col h-[80vh] gap-2">
      <NavigationGraph selected={selected} setSelected={setSelected} />
      {selected === "monthly" ? (
        <Graph graphArr={rawNumsArray} pxl={20} />
      ) : (
        <Graph graphArr={rawNumsArrayYearly} pxl={1} />
      )}
    </div>
  );
}
