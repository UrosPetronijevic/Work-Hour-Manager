import ActiveProfileFooter from "./ActiveProfileFooter";
import ActiveProfileHeader from "./ActiveProfileHeader";
import ActiveProfileMain from "./ActiveProfileMain";
import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";

type ActiveProfileProps = {
  data: Person[] | null;
};

export default function ActiveProfile({ data }: ActiveProfileProps) {
  return (
    <div className="min-h-screen w-full absolute bg-white flex flex-col p-8 justify-between">
      <ActiveProfileHeader data={data} />

      <ActiveProfileMain />

      <ActiveProfileFooter data={data} />
    </div>
  );
}
