import Nbs from "./Nbs";
import Prijem from "./Prijem";
import Vozaci from "./Vozaci";

export default function Filijala() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-md backdrop-blur-[14px] border-[1px] border-white/40 shadow-xl flex flex-col p-4 h-full">
        <h3 className="text-center mb-3 text-2xl font-bold ">Gornje</h3>
        <ul className="flex flex-col gap-2 py-4 ml-10">
          <li className="flex">
            Sakljucar : <span className="text-sky-300">Uki Puki</span>
          </li>
          <li>
            Prvi zamenik :<span className="text-sky-300">Uki Puki</span>{" "}
          </li>
          <li>
            Drugi zamenik: <span className="text-sky-300">Uki Puki</span>
          </li>
          <li>
            Prvi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
          </li>
          <li>
            Drugi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
          </li>
        </ul>
      </div>

      <Prijem />

      <Vozaci />

      <div className="rounded-md backdrop-blur-[14px] border-[1px] border-white/40 shadow-xl flex flex-col p-4 h-full">
        <h3 className="text-center mb-3 text-2xl font-bold">Donje</h3>
        <ul className="flex flex-col gap-2 py-4 ml-10">
          <li className="flex">
            Sakljucar : <span className="text-sky-300">Uki Puki</span>
          </li>
          <li>
            Prvi zamenik :<span className="text-sky-300">Uki Puki</span>{" "}
          </li>
          <li>
            Drugi zamenik: <span className="text-sky-300">Uki Puki</span>
          </li>
          <li>
            Prvi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
          </li>
          <li>
            Drugi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
          </li>
        </ul>
      </div>

      <Nbs />
    </div>
  );
}
