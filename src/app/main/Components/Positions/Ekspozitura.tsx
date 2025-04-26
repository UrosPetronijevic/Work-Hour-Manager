type Ekspozitura = {
  type: string;
};

export default function Ekspozitura({ type }: Ekspozitura) {
  return (
    <div className="rounded-md backdrop-blur-[14px] border-[1px] border-white/40 shadow-xl flex flex-col p-4 h-full">
      <h3 className="text-center mb-3 text-2xl font-bold ">{type}</h3>
      <p className="text-center text-xl">Gornje</p>
      <ul className="flex flex-col gap-2 py-4 ml-10 border-b border-slate-700 mb-4">
        <li className="flex">
          Sakljucar : <span className="text-sky-300">Uki Puki</span>
        </li>
        <li>
          Prvi zamenik :<span className="text-sky-300">Uki Puki</span>{" "}
        </li>
        <li>
          Prvi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
        </li>
        <li>
          Drugi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
        </li>
      </ul>

      <p className="text-center text-xl">Donje</p>
      <ul className="flex flex-col gap-2 py-4 ml-10">
        <li className="flex">
          Sakljucar : <span className="text-sky-300">Uki Puki</span>
        </li>
        <li>
          Prvi zamenik :<span className="text-sky-300">Uki Puki</span>{" "}
        </li>
        <li>
          Prvi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
        </li>
        <li>
          Drugi nepredvidjeni : <span className="text-sky-300">Uki Puki</span>
        </li>
      </ul>
    </div>
  );
}
