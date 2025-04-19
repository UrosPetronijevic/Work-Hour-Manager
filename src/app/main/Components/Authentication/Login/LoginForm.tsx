"use client";

import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="w-full max-w-md py-6 px-10 bg-white rounded-md shadow-md flex flex-col gap-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Prijava</h2>

      <div>
        <ul className="flex flex-col gap-8">
          <li className="w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="email" className="w-40 text-sm font-medium">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
                required
              />
            </div>
          </li>

          <li className="w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <label htmlFor="password" className="w-40 text-sm font-medium">
                Lozinka:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Unesite vasu lozinku"
                className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
                required
              />
            </div>
          </li>

          <li className="w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="kadrovskiBroj"
                className="w-40 text-sm font-medium"
              >
                Kadrovski Broj:
              </label>
              <input
                type="text"
                id="kadrovskiBroj"
                name="kadrovskiBroj"
                placeholder="123"
                className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
              />
            </div>
          </li>
        </ul>

        <div className="mt-6 flex flex-col gap-4">
          <button className="bg-[#F3D162ff] text-white rounded-md px-4 py-2 self-center">
            Prijavi se
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Nemate nalog? </span>
            <Link href="/signup" className="text-blue-500 hover:underline">
              Registrujte se
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
