import Ekspozitura from "./Ekspozitura";

export default function Ekspoziture() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Ekspozitura type={"Ekspozitura Barajevo"} />
      <Ekspozitura type={"Ekspozitura Lazarevac"} />
      <Ekspozitura type={"Ekspozitura Obrenovac"} />
    </div>
  );
}
