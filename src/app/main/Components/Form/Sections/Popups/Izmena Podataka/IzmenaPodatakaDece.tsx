"use client";

import useSection1Store from "@/stores/FormStores/section1Store";
import DecaPopup from "../Dodavanje Podadaka/DodavanjePodatakaDece";
import PodaciDece from "./PodaciDece";

type IzmenaPodatakaDeceProps = {
  setIzmeniPodatkePopup: (value: boolean) => void;
};

export default function IzmenaPodatakaDece({
  setIzmeniPodatkePopup,
}: IzmenaPodatakaDeceProps) {
  const { decaArr, setFormData } = useSection1Store();

  const handleIzmeniPodatke = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIzmeniPodatkePopup(false);
  };

  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black/30 backdrop-blur-[14px] flex flex-col items-center justify-center">
      <div className=" bg-white rounded-md flex flex-col py-4 px-8 gap-8 items-center border-2 border-sky-300/50 shadow-2xl text-slate-500">
        <div className="flex w-full">
          <h3 className="w-[75%] text-end text-2xl">Izmena Podataka</h3>
          <button
            onClick={(e) => {
              // e.preventDefault();
              setIzmeniPodatkePopup(false);
            }}
            className="w-[45%] text-end"
          >
            X
          </button>
        </div>
        {decaArr.map((_, i) => (
          <PodaciDece key={`child ${i}`} index={i} />
        ))}

        <button
          className="gold-striped-lighter px-4 py-2 rounded-md"
          onClick={handleIzmeniPodatke}
        >
          Potvrdi
        </button>
      </div>
    </div>
  );
}
