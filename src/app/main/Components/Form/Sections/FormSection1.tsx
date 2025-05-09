"use client";

import { useState } from "react";
import useActiveSectionStore from "@/stores/activeSectionStore";
import useSection1Store from "@/stores/FormStores/section1Store";
import Section1Popup from "./Popups/Section1Popup";
import IzmenaPodatakaDece from "./Popups/Izmena Podataka/IzmenaPodatakaDece";

export default function FormSection1() {
  const { ime, prezime, datumRodjenja, jmbg, slava, decaArr, setFormData } =
    useSection1Store();

  const [decaCheckBox, setDecaCheckBox] = useState<boolean>(false);

  const [izmeniBrojDece, setIzmeniBrojDece] = useState<boolean>(false);

  const [izmeniPodatkePopup, setIzmeniPodatkePopup] = useState<boolean>(false);

  const [jednoDete, setJednoDete] = useState<boolean>(false);
  const [dvaDeteta, setDvaDeteta] = useState<boolean>(false);
  const [triDeteta, setTriDeteta] = useState<boolean>(false);
  const [odrediBroj, setOdrediBroj] = useState<boolean>(false);
  const [brojDece, setBrojDece] = useState<number>(0);
  const [popUp, setPopUp] = useState<boolean>(false);

  const [err, setErr] = useState<boolean>(false);

  ////////////zustand

  const { activeComponent, setActiveComponent } = useActiveSectionStore();

  /////////////

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

  //////////////////////////

  const handleCheckValue = (input: number) => {
    if (input < 0 || input > 10) {
      setErr(true);
    } else {
      setErr(false);
      setBrojDece(input);
    }
  };

  // if (brojDece) console.log(true);

  console.log(decaArr);

  return (
    <div
      className={`flex flex-col gap-6 px-4 py-2 ${
        activeComponent === "section-1"
          ? "shadow-xl border-t border-slate-300 transition-all ease-in duration-300"
          : ""
      } ${activeComponent === "section-3" ? "border-r border-slate-300" : ""}`}
      onClick={() => {
        setActiveComponent("section-1");
      }}
    >
      <label className="flex gap-2 flex-col">
        <span className="select-none">Ime:</span>
        <input
          placeholder="Petar"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={ime}
          onChange={(e) => {
            setFormData({ ime: e.target.value });
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
            setFormData({ prezime: e.target.value });
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
            setFormData({ datumRodjenja: e.target.value });
          }}
        />
      </label>

      <label className="flex gap-2 flex-col">
        <span className="select-none">JMBG:</span>
        <input
          placeholder="0220130295321"
          type="number"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={jmbg}
          onChange={(e) => {
            setFormData({ jmbg: e.target.value });
          }}
        />
      </label>

      {/* ovo zavrsiti sutra */}
      <label className="flex gap-2 flex-col">
        <span className="select-none">Slava:</span>
        <input
          placeholder="Nikola Sv"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={slava}
          onChange={(e) => {
            setFormData({ slava: e.target.value });
          }}
        />
      </label>

      <div className="flex flex-col gap-4 ">
        <label
          className={`flex gap-2 items-center cursor-pointer ${
            izmeniBrojDece === true ? "w-full" : "w-min"
          }`}
        >
          <span className="select-none">Deca</span>
          {izmeniBrojDece === false ? (
            <input
              className="cursor-pointer w-5 h-5"
              type="checkbox"
              checked={decaCheckBox} // Bind the checked state to the deca variable
              onChange={() => {
                setDecaCheckBox((prevDeca) => !prevDeca); // Toggle the deca state
              }}
            />
          ) : (
            <div className="flex w-full justify-between items-center">
              <span>✅</span>
              <button
                className="py-1 px-2 bg-slate-300 rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  setIzmeniPodatkePopup(true);
                }}
              >
                Izmeni
              </button>
            </div>
          )}
        </label>

        <label
          className={`flex gap-2 flex-col ${
            decaCheckBox ? "" : "opacity-0 pointer-events-none"
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
              odrediBroj && decaCheckBox ? "" : "opacity-0 pointer-events-none"
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
          !err && brojDece && decaCheckBox
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
        <Section1Popup
          brojDece={brojDece}
          setPopUp={setPopUp}
          setDecaCheckBox={setDecaCheckBox}
          setIzmeniBrojDece={setIzmeniBrojDece}
        />
      )}

      {izmeniPodatkePopup && (
        <IzmenaPodatakaDece setIzmeniPodatkePopup={setIzmeniPodatkePopup} />
      )}
    </div>
  );
}
