"use client";

type FormPopupProps = {
  brojDece: number;
};

export default function FormPopup({ brojDece }: FormPopupProps) {
  return (
    <div className="absolute w-full h-full top-0 left-0 bg-black/30 backdrop-blur-[14px] flex flex-col items-center justify-center">
      <div className=" bg-white rounded-md flex flex-col py-4 px-8 gap-10 items-center border-2 border-sky-300/50 shadow-2xl text-slate-500">
        <h3 className="self-center text-2xl">Deca</h3>
        {Array.from({ length: brojDece }, (_, i) => i + 1).map(
          (childNumber) => (
            <label key={childNumber} className="flex gap-4">
              <input
                type="text"
                placeholder="Ime"
                className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
              />

              <input
                type="text"
                placeholder="Prezime"
                className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
              />

              <input
                type="text"
                placeholder="Datum rodjenja"
                className="p-1 border-b-2 border-slate-400 px-2 w-full focus:outline-none focus:border-sky-300 text-slate-400"
              />
            </label>
          )
        )}
      </div>
    </div>
  );
}
