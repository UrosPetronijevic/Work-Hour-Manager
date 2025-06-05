"use client"; // Ensures this component runs on the client-side

import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function NavigationMain() {
  const pathname = usePathname(); // Get the current URL path

  // No more useState for 'active' needed
  // const [active, setActive] = useState<string>("pocetna");

  return (
    <ul className="grid grid-cols-8 cursor-pointer rouded-md place-items-center bg-gradient-to-b from-slate-700 from- to-slate-600 to- text-[#E8B248ff]">
      {/* This item doesn't seem to be a navigation link, so it's unchanged */}
      <li className="py-1 w-3/5 text-center border border-sky-300 text-sky-300">
        Dodaj
      </li>

      {/* Pocetna Link */}
      <li
        className={`${
          pathname === "/main" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link href="/main" className="flex justify-center items-center py-4">
          Pocetna
        </Link>
      </li>

      {/* Profili Link */}
      <li
        className={`${
          pathname === "/main/profiles" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/profiles"
          className="flex justify-center items-center py-4"
        >
          Profili
        </Link>
      </li>

      {/* Tabele Link */}
      <li
        className={`${
          pathname === "/main/tables" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/tables"
          className="flex justify-center items-center py-4"
        >
          Tabele
        </Link>
      </li>

      {/* Sakljucarstvo Link */}
      <li
        className={`${
          pathname === "/main/sakljucarstvo" &&
          "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/sakljucarstvo"
          className="flex justify-center items-center py-4"
        >
          Sakljucarstvo
        </Link>
      </li>

      {/* Grafici Link */}
      <li
        className={`${
          pathname === "/main/charts" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/charts"
          className="flex justify-center items-center py-4"
        >
          Grafici
        </Link>
      </li>

      {/* Godisnji odmori Link */}
      <li
        className={`${
          pathname === "/main/yearly" && "gold-striped-lighter text-slate-700"
        } w-full`}
      >
        <Link
          href="/main/yearly"
          className="flex justify-center items-center py-4"
        >
          Godisnji odmori
        </Link>
      </li>

      {/* Pomoc Link */}
      <li
        className={`${
          pathname === "/main/help" && "gold-striped-lighter text-slate-700"
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
