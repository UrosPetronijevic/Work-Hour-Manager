import NavigationTable from "../Navigation/NavigationTable";
import Table1 from "./Table1";

export default function TablesPage() {
  return (
    <div className="w-full h-full flex flex-col gap-2">
      <NavigationTable />
      <Table1 />
    </div>
  );
}
