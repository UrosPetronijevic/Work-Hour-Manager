"use client";

import { useState } from "react";
import FormPopup from "../FormPopup";
import { Deca } from "@/Classes/Deca";

export default function FormSection1() {
  const [ime, setIme] = useState<string>("");
  const [prezime, setPrezime] = useState<string>("");
  const [datumRodjenja, setDatumRodjenja] = useState<string>("");
  const [jmbg, setJmbg] = useState<string>("");
  const [deca, setDeca] = useState<boolean>(false);

  const [jednoDete, setJednoDete] = useState<boolean>(false);
  const [dvaDeteta, setDvaDeteta] = useState<boolean>(false);
  const [triDeteta, setTriDeteta] = useState<boolean>(false);
  const [odrediBroj, setOdrediBroj] = useState<boolean>(false);
  const [brojDece, setBrojDece] = useState<number>(0);
  const [popUp, setPopUp] = useState<boolean>(false);

  const [err, setErr] = useState<boolean>(false);

  const [decaArr, setDecaArr] = useState<Deca[]>([]);

  const handleCheckValue = (input: number) => {
    if (input < 0 || input > 10) {
      setErr(true);
    } else {
      setErr(false);
      setBrojDece(input);
    }
  };

  const handleDeca = (deca: string) => {
    setJednoDete(false);
    setDvaDeteta(false);
    setTriDeteta(false);
    setOdrediBroj(false);

    switch (deca) {
      case "Jedno dete":
        setJednoDete(true);
        setBrojDece(1);
        break;
      case "Dva deteta":
        setDvaDeteta(true);
        setBrojDece(2);
        break;
      case "Tri deteta":
        setTriDeteta(true);
        setBrojDece(3);
        break;
      case "Odredi Broj":
        setOdrediBroj(true);
        break;
      default:
        setJednoDete(true);
        setBrojDece(1);
    }
  };

  // if (brojDece) console.log(true);

  return (
    <div className="flex flex-col gap-10 px-4">
      <label className="flex gap-2 flex-col">
        <span className="select-none">Ime:</span>
        <input
          placeholder="Petar"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={ime}
          onChange={(e) => {
            setIme(e.target.value);
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span className="select-none">Prezime:</span>
        <input
          placeholder="Petrovic"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={prezime}
          onChange={(e) => {
            setPrezime(e.target.value);
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span className="select-none">Datum rodjenja:</span>
        <input
          placeholder="02.02.2025"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={datumRodjenja}
          onChange={(e) => {
            setDatumRodjenja(e.target.value);
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span className="select-none">JMBG:</span>
        <input
          placeholder="0220130295321"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={jmbg}
          onChange={(e) => {
            setJmbg(e.target.value);
          }}
        />
      </label>

      <div className="flex flex-col gap-4 ">
        <label className="flex gap-2 items-center cursor-pointer w-min">
          <span className="select-none">Deca</span>
          <input
            className="cursor-pointer w-5 h-5"
            type="checkbox"
            onChange={() => {
              setDeca((e) => !e);
            }}
          />
        </label>

        <label
          className={`flex gap-2 flex-col ${
            deca ? "" : "opacity-0 pointer-events-none"
          }`}
        >
          <select
            onChange={(e) => handleDeca(e.target.value)}
            className="w-1/2 outline-none cursor-pointer"
          >
            <option value="" hidden>
              Jedno Dete
            </option>
            <option value="Jedno dete">Jedno Dete</option>
            <option value="Dva deteta">Dva Deteta</option>
            <option value="Tri deteta">Tri Deteta</option>
            <option value="Odredi Broj">Odredi Broj</option>
          </select>
        </label>

        <label>
          <input
            type="number"
            placeholder="max 10"
            className={`${
              odrediBroj && deca ? "" : "opacity-0 pointer-events-none"
            } p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300`}
            onChange={(e) => {
              handleCheckValue(Number(e.target.value));
            }}
            max={10}
          />
        </label>
      </div>

      <button
        className={`${
          !err && odrediBroj && brojDece && deca
            ? ""
            : "opacity-0 pointer-events-none"
        } gold-striped-lighter text-slate-700 py-2 px-4 w-max self-center rounded-md shadow-md`}
        onClick={(e) => {
          e.preventDefault();
          setPopUp(true);
        }}
      >
        Potvrdi broj dece
      </button>

      {popUp && (
        <FormPopup
          brojDece={brojDece}
          setPopUp={setPopUp}
          setDecaArr={setDecaArr}
        />
      )}
    </div>
  );
}
