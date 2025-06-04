"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavigationMain() {
  const [active, setActive] = useState<string>("pocetna");

  return (
    <ul className="grid grid-cols-8 cursor-pointer rouded-md place-items-center bg-gradient-to-b from-slate-700 from- to-slate-600 to- text-[#E8B248ff]">
      <li>Dodaj</li>

      <li
        onClick={() => {
          setActive("pocetna");
        }}
        className={`${
          active === "pocetna" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link href="/main" className="flex justify-center items-center py-4">
          Pocetna
        </Link>
      </li>

      <li
        onClick={() => {
          setActive("profili");
        }}
        className={`${
          active === "profili" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/profiles"
          className="flex justify-center items-center py-4"
        >
          Profili
        </Link>
      </li>

      <li
        onClick={() => {
          setActive("tabele");
        }}
        className={`${
          active === "tabele" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/tables"
          className="flex justify-center items-center py-4"
        >
          Tabele
        </Link>
      </li>

      <li
        onClick={() => {
          setActive("sakljucarstvo");
        }}
        className={`${
          active === "sakljucarstvo" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/sakljucarstvo"
          className="flex justify-center items-center py-4"
        >
          Sakljucarstvo
        </Link>
      </li>

      <li
        onClick={() => {
          setActive("grafici");
        }}
        className={`${
          active === "grafici" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/charts"
          className="flex justify-center items-center py-4"
        >
          Grafici
        </Link>
      </li>

      <li
        onClick={() => {
          setActive("godisnji odmori");
        }}
        className={`${
          active === "godisnji odmori" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/yearly"
          className="flex justify-center items-center py-4"
        >
          Godisnji odmori
        </Link>
      </li>

      <li
        onClick={() => {
          setActive("pomoc");
        }}
        className={`${
          active === "pomoc" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/help"
          className="flex justify-center items-center py-4"
        >
          Pomoc
        </Link>
      </li>
    </ul>
  );
}
