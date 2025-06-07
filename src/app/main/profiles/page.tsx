import Profiles from "@/_components/Profiles";
import { getOdredjeniNeodredjeni } from "@/_lib/_fetch/OdredjeniNeodredjeni";

export default async function ProfilesPage() {
  const { data, error } = await getOdredjeniNeodredjeni();

  console.log(data);
  return (
    <div>
      <Profiles data={data} />
    </div>
  );
}
