import { Employee } from "@/Classes/Employee";
import { getEmployees } from "@/lib/apiEmployees";
import { useQuery } from "@tanstack/react-query";

export default function NameList() {
  function createUppercaseAlphabetArray(): string[] {
    const alphabetArray: string[] = [];

    for (let i = 0; i < 26; i++) {
      const letter = String.fromCharCode(65 + i); // 'A' is 65
      alphabetArray.push(letter);
    }

    return alphabetArray;
  }

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
    <div className="bg-blue-300 mt-10 p-2 w-full grid grid-cols-7">
      <div className="bg-amber-300 flex flex-col px-4 gap-4">
        <span className="border-b border-slate-700 w-full text-center text-">
          Letter
        </span>
        <ul>
          <li>Ana Anovic</li>
          <li>Ana</li>
          <li>Ana</li>
        </ul>
      </div>
    </div>
  );
}
