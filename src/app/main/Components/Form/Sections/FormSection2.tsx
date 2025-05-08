import useActiveSectionStore from "@/stores/activeSectionStore";
import useSection2Store from "@/stores/FormStores/section2Store";

export default function FormSection2() {
  ////////////zustand

  const { activeComponent, setActiveComponent } = useActiveSectionStore();
  const {
    kadrovskiBroj,
    radnoMesto,
    skolskaSprema,
    zvanje,
    platniRazred,
    nbs,
    ukupanGodisnjiOdmor,
    neodredjeno,
    odredjeno,
    pp,
    zadruga,
    setFormData,
  } = useSection2Store();

  console.log(kadrovskiBroj);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData({ [name]: value });

    console.log(name, value);
  };

  /////////////

  return (
    <div
      className={`flex flex-col gap-6 py-2 px-4 ${
        activeComponent === "section-2"
          ? "shadow-xl border-t border-slate-300 transition-all ease-in duration-200"
          : ""
      } ${activeComponent === "section-1" ? "border-r border-slate-300" : ""}`}
      onClick={() => {
        setActiveComponent("section-2");
      }}
    >
      <label className="flex gap-2 flex-col">
        <span className="select-none">Kadrovski Broj:</span>
        <input
          placeholder="1234PET67"
          type="text"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={kadrovskiBroj}
          onChange={(e) => {
            setFormData({ kadrovskiBroj: e.target.value });
          }}
        />
      </label>

      <div className="flex justify-between p-2">
        <label className="flex flex-col gap-4">
          <span className="select-none w-max">Radno Mesto:</span>
          <select
            className="w-min outline-none cursor-pointer p-2 bg-slate-300 rounded-md"
            name="radnoMesto"
            value={radnoMesto}
            onChange={handleSelectChange}
          >
            <option value="" hidden></option>
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </label>

        <label className="flex flex-col gap-4">
          <span className="select-none w-max">Skolska Sprema:</span>
          <select
            className="w-min outline-none cursor-pointer bg-slate-300 p-2 rounded-md"
            name="skolskaSprema"
            value={skolskaSprema}
            onChange={handleSelectChange}
          >
            <option value="" hidden></option>
            <option value="Option A">Namestenik</option>
            <option value="Option A">Srednja</option>
            <option value="Option B">Visa</option>
            <option value="Option C">Fakultet</option>
          </select>
        </label>
      </div>

      <div className="grid grid-cols-2 p-2 gap-4">
        <label className="flex flex-col gap-2 col-span-2">
          <span className="select-none w-min self-center">Zvanje:</span>
          <select
            className="w-full outline-none cursor-pointer bg-amber-200 p-2 rounded-md self-center"
            name="zvanje"
            value={zvanje}
            onChange={handleSelectChange}
          >
            <option value="" hidden></option>
            <option value="Mladji Referent">Mladji Referent</option>
            <option value="Referent">Referent</option>
            <option value="Mladji Saradnik">Mladji Saradnik</option>
            <option value="Saradnik">Saradnik</option>
            <option value="Mladji Savetnik">Mladji Savetnik</option>
            <option value="Savetnik">Savetnik</option>
            <option value="Samostalni Savetnik">Samostalni Savetnik</option>
            <option value="Visi Savetnik">Visi Savetnik</option>
            <option value="Peta Grupa Polozaja">Peta Grupa Polozaja</option>
            <option value="Cetvrta Grupa Polozaja">
              Cetvrta Grupa Polozaja
            </option>
            <option value="Treca Grupa Polozaja">Treca Grupa Polozaja</option>
            <option value="Druga Grupa Polozaja">Druga Grupa Polozaja</option>
            <option value="Prva Grupa Polozaja">Prva Grupa Polozaja</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="select-none w-max self-center">Platni Razred:</span>
          <select
            className="w-min outline-none cursor-pointer bg-amber-200 p-2 rounded-md self-center"
            name="platniRazred"
            value={platniRazred}
            onChange={handleSelectChange}
          >
            <option value="" hidden></option>
            <option value="Option A">1</option>
            <option value="Option B">2</option>
            <option value="Option B">3</option>
            <option value="Option B">4</option>
            <option value="Option B">5</option>
            <option value="Option B">6</option>
            <option value="Option B">7</option>
            <option value="Option B">8</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="select-none w-max self-center">Nbs:</span>
          <select
            className="w-min outline-none cursor-pointer bg-amber-200 p-2 rounded-md self-center"
            name="nbs"
            value={nbs}
            onChange={handleSelectChange}
          >
            <option value="" hidden></option>
            <option value="Option A">DA</option>
            <option value="Option B">NE</option>
          </select>
        </label>
      </div>

      <label className="flex gap-2 flex-col">
        <span className="select-none">Ukupan Godisnji Odmor:</span>
        <input
          placeholder="30"
          type="number"
          className="p-1 border-b-2 border-slate-300 px-2 w-full focus:outline-none focus:border-blue-300"
          value={ukupanGodisnjiOdmor}
          onChange={(e) => {
            setFormData({ ukupanGodisnjiOdmor: e.target.value });
          }}
        />
      </label>

      <div className="grid grid-cols-2 place-items-end bg-sky-100 p-2 rounded-md gap-4">
        <label className="flex gap-2 cursor-pointer">
          <span className="select-none">Neodredjeno</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>

        <label className="flex gap-2 cursor-pointer">
          <span className="select-none">Odredjeno</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>

        <label className="flex gap-2 cursor-pointer">
          <span className="select-none">PP</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>

        <label className="flex gap-2 cursor-pointer">
          <span className="select-none">Zadruga</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>
      </div>
    </div>
  );
}
