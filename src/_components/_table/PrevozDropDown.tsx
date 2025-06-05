"use client";

import Link from "next/link";

type PrevozDropDownProps = {
  prevozDropDown: boolean; // Correct: use primitive boolean
  setPrevozDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function PrevozDropDown({
  setPrevozDropDown,
  prevozDropDown,
}: PrevozDropDownProps) {
  return (
    <div
      onMouseEnter={() => {
        setPrevozDropDown(true);
      }}
      className="relative flex flex-col"
    >
      {!prevozDropDown && (
        <Link
          href="/main/tables/prevoz"
          className="flex justify-center items-center p-4 w-full h-full"
        >
          Prevoz
        </Link>
      )}

      {prevozDropDown && (
        <div
          className="absolute w-2/2 self-center text-center bg-slate-600 text-[#E8B248ff] rounded-b-lg rounded-tl-3xl"
          onMouseLeave={() => {
            setPrevozDropDown(false);
          }}
        >
          <Link
            href="/main/tables/prevoz"
            className="flex justify-center items-center p-4"
            onClick={() => {
              setPrevozDropDown(false);
            }}
          >
            Prevoz
          </Link>

          <Link
            href="/main/tables/prevozPP"
            className="flex justify-center items-center p-4"
            onClick={() => {
              setPrevozDropDown(false);
            }}
          >
            PrevozPP
          </Link>
        </div>
      )}
    </div>
  );
}
