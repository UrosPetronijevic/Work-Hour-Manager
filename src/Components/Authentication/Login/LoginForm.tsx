"use client";

import React, { useState, ChangeEvent, Dispatch, SetStateAction } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [kadrovskiBroj, setKadrovskiBroj] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    setter: Dispatch<SetStateAction<string>>
  ) => {
    setter(event.target.value);
  };

  return (
    <div className="w-full max-w-md py-6 px-10 bg-white rounded-md shadow-md flex flex-col gap-4">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Prijava</h2>
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
              value={email}
              onChange={(event) => handleChange(event, setEmail)}
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
            />
          </div>
        </li>

        <li className="w-full">
          <div className="flex flex-col items-start gap-2 w-full">
            <label htmlFor="kadrovskiBroj" className="w-40 text-sm font-medium">
              Kadrovski Broj:
            </label>
            <input
              type="kadrovskiBroj"
              id="kadrovskiBroj"
              name="kadrovskiBroj"
              placeholder="123"
              className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
              value={kadrovskiBroj}
              onChange={(event) => handleChange(event, setKadrovskiBroj)}
            />
          </div>
        </li>
      </ul>
      <button
        type="submit"
        className="mt-4 bg-[#F99417] hover:bg-orange-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end"
      >
        Prijavi se
      </button>
    </div>
  );
}
