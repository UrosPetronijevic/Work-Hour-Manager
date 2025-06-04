"use client";

import Link from "next/link";

export default function Proceed() {
  return (
    <Link
      href="/main"
      className="p-4 text-white text-[1.2rem] bg-[#F99417] w-[10%] rounded-[.5rem] text-center"
    >
      Proceed
    </Link>
  );
}
