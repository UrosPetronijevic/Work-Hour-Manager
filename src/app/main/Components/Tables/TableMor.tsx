import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "@/lib/apiEmployees";
import { Employee } from "@/Classes/Employee";
import { columns } from "@/Classes/TableColumns";
import { datumPocetka, datumZavrsetka } from "@/Classes/Dates";
import { drzavniVerskiPraznik } from "@/Classes/PublicHolidays";

// Components/Tables/TableMor.tsx
interface TableMorProps {
  mor: string | null;
}

export default function TableMor({ mor }: TableMorProps) {
  const {
    data: employees,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  console.log(employees);

  let employee: Employee | undefined;

  if (employees) {
    employee = employees[0];
  }
  return (
    <div>
      <table className="table-auto border-collapse border border-gray-300 w-full">
        <thead>
          <tr>
            {columns.map((column, colIndex) => (
              <th
                key={`header-${colIndex}`}
                className="border border-gray-300 px-4 py-2 bg-gray-100"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees?.map((employee, rowIndex) => (
            <tr key={`rowMor-${rowIndex}`}>
              <td className="border border-gray-300 px-4 py-2">
                {employee.kadrovskiBroj}
              </td>
              <td
                className="border border-gray-300 px-4 py-2"
                onClick={() => {}}
              >
                {employee.imeZaposlenog} {employee.prezimeZaposlenog}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.fondSati}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {datumPocetka.toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {datumZavrsetka.toLocaleDateString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.redovanRad}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.godisnjiOdmor}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {drzavniVerskiPraznik}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.placenoOdsustvo}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.bolovanje30}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.bolovanje100}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.bolovanjeNaTertFonda}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {employee.porodiljskoOdsustvo}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
