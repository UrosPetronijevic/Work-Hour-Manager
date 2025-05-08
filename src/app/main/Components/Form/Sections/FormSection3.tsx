import useActiveSectionStore from "@/stores/activeSectionStore";

export default function FormSection3() {
  const { activeComponent, setActiveComponent } = useActiveSectionStore();

  return (
    <div
      className={`flex flex-col gap-10 px-4 py-2 ${
        activeComponent === "section-3"
          ? "shadow-xl border-t border-slate-300 transition-all ease-in duration-300"
          : ""
      }`}
      onClick={() => {
        setActiveComponent("section-3");
      }}
    >
      <div className="grid grid-cols-2 place-items-center">
        <label className="flex gap-2 cursor-pointer items-center">
          <span className="select-none">Pripravnost</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>

        <label className="flex gap-2 cursor-pointer items-center">
          <span className="select-none">Prekovremeni</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>

        <label className="flex gap-2 cursor-pointer items-center">
          <span className="select-none">Dodatno opt</span>
          <input className="cursor-pointer w-5 h-5" type="checkbox" />
        </label>
      </div>

      <h3 className="self-center text-2xl font-bold">Sakljucari</h3>

      <div></div>
    </div>
  );
}
