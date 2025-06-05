"use client";

import Link from "next/link";

type MorDropDownProps = {
  morDropDown: boolean; // Correct: use primitive boolean
  setMorDropDown: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MorDropDown({
  setMorDropDown,
  morDropDown,
}: MorDropDownProps) {
  return (
    <div
      onMouseEnter={() => {
        setMorDropDown(true);
      }}
      className="relative flex flex-col"
    >
      {!morDropDown && (
        <Link
          href="/main/tables/mor"
          className="flex justify-center items-center p-4 w-full h-full"
        >
          Mor
        </Link>
      )}

      {morDropDown && (
        <div
          className="absolute w-2/2 self-center text-center bg-slate-600 text-[#E8B248ff] rounded-b-lg rounded-tl-3xl"
          onMouseLeave={() => {
            setMorDropDown(false);
          }}
        >
          <Link
            href="/main/tables/mor"
            className="flex justify-center items-center p-4"
            onClick={() => {
              setMorDropDown(false);
            }}
          >
            Mor
          </Link>

          <Link
            href="/main/tables/morPP"
            className="flex justify-center items-center p-4"
            onClick={() => {
              setMorDropDown(false);
            }}
          >
            MorPP
          </Link>

          <Link
            href="/main/tables/morZadruga"
            className="flex justify-center items-center p-4"
            onClick={() => {
              setMorDropDown(false);
            }}
          >
            Mor Zadruga
          </Link>
        </div>
      )}
    </div>
  );
}
