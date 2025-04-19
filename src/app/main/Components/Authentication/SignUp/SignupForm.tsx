"use client";

import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";
import Link from "next/link";

export default function SignupForm() {
  const [ime, setIme] = useState<string>("");
  const [prezime, setPrezime] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [kadrovskiBroj, setKadrovskiBroj] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    setter(event.target.value);
  };

  return (
    <form className="w-[35%] min-h-[85%] py-8 px-10 bg-white rounded-md shadow-md flex flex-col justify-between">
      <h2 className="text-4xl font-semibold text-slate-600 text-center">
        Registracija
      </h2>

      <div>
        <ul className="text-slate-500 flex flex-col items-center justify-center gap-8">
          <li className="w-full">
            <div className="flex justify-between">
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="ime" className="w-40 text-sm font-medium">
                  Ime:
                </label>
                <input
                  type="text"
                  id="ime"
                  name="ime"
                  placeholder="Petar"
                  className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
                  value={ime}
                  onChange={(event) => handleChange(event, setIme)}
                  required
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <label htmlFor="prezime" className="w-40 text-sm font-medium">
                  Prezime:
                </label>
                <input
                  type="text"
                  id="prezime"
                  name="prezime"
                  placeholder="Petrovic"
                  className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
                  value={prezime}
                  onChange={(event) => handleChange(event, setPrezime)}
                  required
                />
              </div>
            </div>
          </li>

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
                value={email}
                onChange={(event) => handleChange(event, setEmail)}
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
                value={kadrovskiBroj}
                onChange={(event) => handleChange(event, setKadrovskiBroj)}
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
                value={password}
                onChange={(event) => handleChange(event, setPassword)}
                required
              />
            </div>
          </li>

          <li className="w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <label
                htmlFor="confirmPassword"
                className="w-40 text-sm font-medium"
              >
                Potvrdi Lozinku:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Potvrdite vasu lozinku"
                className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
                value={confirmPassword}
                onChange={(event) => handleChange(event, setConfirmPassword)}
                required
              />
            </div>
          </li>
        </ul>

        <div className="text-center text-sm mt-4">
          <span className="text-gray-600">Već imate nalog? </span>
          <Link href="/login" className="text-blue-500 hover:underline">
            Prijavite se
          </Link>
        </div>

        <div className="mt-6 flex justify-center"></div>
      </div>
    </form>
  );
}
