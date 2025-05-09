"use client";

import useSection1Store, { Dete } from "@/stores/FormStores/section1Store";
import React, { useState } from "react";

export default function DodavanjePodatakaDece() {
  const { decaArr, setFormData } = useSection1Store();

  const [imeDeteta, setImeDeteta] = useState<string>("");
  const [prezimeDeteta, setPrezimeDeteta] = useState<string>("");
  const [datumRodjenjaDeteta, setDatumRodjenjaDeteta] = useState<string>("");
  const [dodajClicked, setDodajClicked] = useState<boolean>(false);

  const handleDodaj = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Create a new Dete object
    const newDete: Dete = {
      ime: imeDeteta,
      prezime: prezimeDeteta,
      datumRodjenja: datumRodjenjaDeteta,
    };

    // Update the deca state by adding the new Dete object
    if (imeDeteta !== "" && prezimeDeteta !== "" && datumRodjenjaDeteta !== "")
      setFormData({ decaArr: [...decaArr, newDete] });

    // Clear the input fields
    setImeDeteta("");
    setPrezimeDeteta("");
    setDatumRodjenjaDeteta("");
    setDodajClicked(true);
  };

  return (
    <div className="flex gap-6">
      <label className="flex gap-4">
        <input
          type="text"
          placeholder="Ime"
          className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
          onChange={(e) => {
            setImeDeteta(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Prezime"
          className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
          onChange={(e) => {
            setPrezimeDeteta(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Datum rodjenja"
          className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
          onChange={(e) => {
            setDatumRodjenjaDeteta(e.target.value);
          }}
        />
      </label>

      {!dodajClicked ? (
        <button
          className="bg-slate-500 text-white py-1 px-2 text-sm rounded-md transform translate-y-3"
          onClick={handleDodaj}
        >
          Dodaj
        </button>
      ) : (
        <div className="w-min transform translate-y-4 select-none">✅</div>
      )}
    </div>
  );
}
