"use client";

import Link from "next/link";
import { useState } from "react";
import MorDropDown from "../_table/MorDropDown";
import PrevozDropDown from "../_table/PrevozDropDown";

export default function TableNavigation() {
  const [morDropDown, setMorDropDown] = useState<boolean>(false);
  const [prevozDropDown, setPrevozDropDown] = useState<boolean>(false);

  return (
    <ul
      className="grid grid-cols-5 cursor-pointer bg-slate-600 text-[#E8B248ff] rounded-3xl"
      onMouseLeave={() => {
        setMorDropDown(false);
      }}
    >
      <MorDropDown setMorDropDown={setMorDropDown} morDropDown={morDropDown} />

      <Link
        href="/main/tables/pripravnost"
        className="flex justify-center items-center p-4 w-full h-full"
        onMouseEnter={() => {
          setMorDropDown(false);
        }}
      >
        Pripravnost
      </Link>

      <Link
        href="/main/tables/prekovremeni"
        className="flex justify-center items-center p-4 w-full h-full"
        onMouseEnter={() => {
          setMorDropDown(false);
        }}
      >
        Prekovremeni
      </Link>

      <PrevozDropDown
        prevozDropDown={prevozDropDown}
        setPrevozDropDown={setPrevozDropDown}
      />

      <Link
        href="/main/tables/dodatnoOpterecenje"
        className="flex justify-center items-center p-4 w-full h-full"
        onMouseEnter={() => {
          setMorDropDown(false);
        }}
      >
        Dodatno Opterecenje
      </Link>
    </ul>
  );
}
