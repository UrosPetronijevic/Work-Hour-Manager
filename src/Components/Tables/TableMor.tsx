// Components/Tables/TableMor.tsx
export default function TableMor({ mor }: { mor: string | null }) {
  switch (mor) {
    case "Mor":
      return <div>Data for Mor</div>;
    case "MorPP":
      return <div>Data for MorPP</div>;
    case "MorZadruga":
      return <div>Data for MorZadruga</div>;
    default:
      return <div>No data found for {mor}</div>; // Or some default content
  }
}
