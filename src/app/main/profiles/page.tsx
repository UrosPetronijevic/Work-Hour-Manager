import Profiles from "@/_components/_profile/Profiles";
import { getOdredjeniNeodredjeni } from "@/_lib/_fetch/OdredjeniNeodredjeni";

export default async function ProfilesPage() {
  const { data, error } = await getOdredjeniNeodredjeni();

  console.log(data);

  if (error) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Greška pri učitavanju</h1>
        <p>Nije moguće dohvatiti podatke. Molimo pokušajte ponovo kasnije.</p>
      </div>
    );
  }

  return (
    <div>
      <Profiles data={data} />
    </div>
  );
}
