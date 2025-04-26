import { Employee } from "@/Classes/Employee";
import { columns } from "@/Classes/TableColumns";
import { datumPocetka, datumZavrsetka } from "@/Classes/Dates";
import { drzavniVerskiPraznik } from "@/Classes/PublicHolidays";
import { useEmployeesData } from "@/lib/hooks/useEmployeesData";
import Spinner from "../Reusable/Spinner/Spinner";

// Components/Tables/TableMor.tsx
interface TableMorProps {
  mor: string | null;
}

export default function TableMor({ mor }: TableMorProps) {
  const { data: employees, isLoading, error } = useEmployeesData();

  // Handle loading and error states gracefully
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    // Provide more informative error message
    return <div>Error fetching employees: {(error as Error).message}</div>;
  }

  return (
    <div className="text-slate-500">
      <table className="table-auto border-collapse w-full">
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <th
                key={`header-${colIndex}`}
                className="border border-[#E8B248ff] px-4 py-2 bg-slate-300/30"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee, rowIndex) => (
            <tr key={`rowMor-${rowIndex}`}>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.kadrovskiBroj}
              </td>
              <td
                className="border border-[#E8B248ff] px-4 py-2"
                onClick={() => {}}
              >
                {employee.imeZaposlenog} {employee.prezimeZaposlenog}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.fondSati}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {datumPocetka.toLocaleDateString()}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {datumZavrsetka.toLocaleDateString()}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.redovanRad}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.godisnjiOdmor}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {drzavniVerskiPraznik}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.placenoOdsustvo}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.bolovanje30}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.bolovanje100}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.bolovanjeNaTertFonda}
              </td>
              <td className="border border-[#E8B248ff] px-4 py-2">
                {employee.porodiljskoOdsustvo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
