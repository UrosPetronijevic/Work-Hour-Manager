import ActiveProfileHeader from "./ActiveProfileHeader";
import ActiveProfileMain from "./ActiveProfileMain";
import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";

type ActiveProfileProps = {
  data: Person[] | null;
};

export default function ActiveProfile({ data }: ActiveProfileProps) {
  return (
    <div className="min-h-screen w-full absolute bg-white flex flex-col p-8">
      <ActiveProfileHeader data={data} />

      <ActiveProfileMain />

      <div className="grid grid-cols-3">Something will also be added later</div>
      <div>
        {data?.map((e: Person) => (
          <p key={e.kadrovskiBroj}>{e.kadrovskiBroj}</p>
        ))}
      </div>
    </div>
  );
}
