// Components/Tables/TableMor.tsx
interface TableMorProps {
  mor: string | null;
}

export default function TableMor({ mor }: TableMorProps) {
  // Use the data prop instead of fetching inside the component

  return (
    <div>
      <h2>{mor} Table</h2>
    </div>
  );
}
