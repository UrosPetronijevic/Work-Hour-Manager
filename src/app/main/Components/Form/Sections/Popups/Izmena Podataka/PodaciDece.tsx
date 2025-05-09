"use client";

import useSection1Store, { Dete } from "@/stores/FormStores/section1Store";
import { useState } from "react";

type PodaciDeceProps = {
  index: number;
};

export default function PodaciDece({ index }: PodaciDeceProps) {
  const { decaArr, setFormData } = useSection1Store();

  const [imeDeteta, setImeDeteta] = useState<string>("");
  const [prezimeDeteta, setPrezimeDeteta] = useState<string>("");
  const [datumRodjenjaDeteta, setDatumRodjenjaDeteta] = useState<string>("");

  const [izmeniClicked, setIzmeniClicked] = useState<boolean>(false);

  const handleSelectDete = () => {
    setIzmeniClicked(true);
    // Populate the input fields with the existing data
    setImeDeteta(decaArr[index].ime);
    setPrezimeDeteta(decaArr[index].prezime);
    setDatumRodjenjaDeteta(decaArr[index].datumRodjenja);
  };

  const handleIzmeni = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const updatedDeca = [...decaArr]; // Create a copy of the decaArr array

    // Create a new Dete object with the updated values
    const newDete: Dete = {
      ime: imeDeteta,
      prezime: prezimeDeteta,
      datumRodjenja: datumRodjenjaDeteta,
    };

    // Update the Dete object at the specified index with the newDete object
    updatedDeca[index] = newDete;

    // Update the decaArr state with the updatedDeca array
    setFormData({ decaArr: updatedDeca });

    // Clear the input fields
    setImeDeteta("");
    setPrezimeDeteta("");
    setDatumRodjenjaDeteta("");

    setIzmeniClicked(false);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedDeca = [...decaArr]; // Create a copy of the decaArr array
    updatedDeca.splice(index, 1); // Remove 1 element at the specified index
    setFormData({ decaArr: updatedDeca }); // Update the decaArr state
  };

  return (
    <div className="flex flex-col gap-6 min-w-[45vw]">
      <div className="flex gap-6">
        {!izmeniClicked ? (
          <table className="table-auto w-full text-left">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="border border-[#E8B248ff] px-4 py-2 bg-slate-300/30">
                  Ime
                </th>
                <th className="border border-[#E8B248ff] px-4 py-2 bg-slate-300/30">
                  Prezime
                </th>
                <th className="border border-[#E8B248ff] px-4 py-2 bg-slate-300/30">
                  Datum Rodjenja
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-200">
              <tr onClick={handleSelectDete} className="cursor-pointer">
                <td className="border border-[#E8B248ff] px-4 py-2">
                  {decaArr[index].ime}
                </td>
                <td className="border border-[#E8B248ff] px-4 py-2">
                  {decaArr[index].prezime}
                </td>
                <td className="border border-[#E8B248ff] px-4 py-2">
                  {decaArr[index].datumRodjenja}
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <label className="flex gap-4">
            <input
              type="text"
              placeholder="Ime"
              className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
              value={imeDeteta}
              onChange={(e) => {
                setImeDeteta(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Prezime"
              className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
              value={prezimeDeteta}
              onChange={(e) => {
                setPrezimeDeteta(e.target.value);
              }}
            />

            <input
              type="text"
              placeholder="Datum rodjenja"
              className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
              value={datumRodjenjaDeteta}
              onChange={(e) => {
                setDatumRodjenjaDeteta(e.target.value);
              }}
            />
          </label>
        )}

        {izmeniClicked && (
          <button
            onClick={(e) => handleIzmeni(e)}
            className="p-1 bg-slate-300 rounded-md"
          >
            Izmeni
          </button>
        )}
      </div>
      {/* New Delete Button */}
      <button
        onClick={handleDelete}
        className="p-1 bg-red-300 rounded-md self-start"
      >
        Delete
      </button>
    </div>
  );
}
