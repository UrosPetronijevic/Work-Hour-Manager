"use client";

import useSection1Store, { Dete } from "@/stores/FormStores/section1Store";
import { useState } from "react";
import DodavanjePodatakaDece from "./Dodavanje Podadaka/DodavanjePodatakaDece";

type Section1PopupProps = {
  brojDece: number;
  setPopUp: (value: boolean) => void;
  setDecaCheckBox: (value: boolean) => void;
  setIzmeniBrojDece: (value: boolean) => void;
};

export default function Section1Popup({
  brojDece,
  setDecaCheckBox,
  setPopUp,
  setIzmeniBrojDece,
}: Section1PopupProps) {
  const { decaArr, setFormData } = useSection1Store();

  const [imeDeteta, setImeDeteta] = useState<string>("");
  const [prezimeDeteta, setPrezimeDeteta] = useState<string>("");
  const [datumRodjenjaDeteta, setDatumRodjenjaDeteta] = useState<string>("");

  const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setDecaCheckBox(false);
    setIzmeniBrojDece(true);
    setPopUp(false); // close popup after submit

    console.log(decaArr);
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black/30 backdrop-blur-[14px] flex flex-col items-center justify-center">
      <div className=" bg-white rounded-md flex flex-col py-4 px-8 gap-8 items-center border-2 border-sky-300/50 shadow-2xl text-slate-500">
        <div className="flex w-full">
          <h3 className="w-[55%] text-end text-2xl">Deca</h3>
          <button
            onClick={(e) => {
              // e.preventDefault();
              setPopUp(false);
            }}
            className="w-[45%] text-end"
          >
            X
          </button>
        </div>
        {Array.from({ length: brojDece }, (_, i) => i + 1).map(
          (childNumber) => (
            <DodavanjePodatakaDece key={childNumber} />
          )
        )}

        <button
          className="gold-striped-lighter px-4 py-2 rounded-md"
          onClick={handleConfirm}
        >
          Potvrdi
        </button>
      </div>
    </div>
  );
}
