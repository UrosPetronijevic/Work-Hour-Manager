"use client";

import useProfileStore, { Employee } from "@/_stores/activeProfile"; // Import Employee type

type SearchCardProps = {
  letter: string;
  employeeNames: string[];
  employeeSurnames: string[];
  employeeKdBroj: string[];
};

export default function SearchCard({
  letter,
  employeeNames,
  employeeSurnames,
  employeeKdBroj,
}: SearchCardProps) {
  const { setActiveProfile } = useProfileStore();

  const handleEmployeeClick = (employee: Employee) => {
    setActiveProfile(employee);
  };

  /////////////////////////////////////////////////////////////////////

  return (
    <div className="w-full flex flex-col gap-2 shadow-md p-4 border border-slate-100">
      <span className="self-center underline text-sky-300">
        {letter.toUpperCase()}
      </span>
      <ul>
        {employeeNames.map((name, index) => {
          // Create the employee object for this item
          const currentEmployee: Employee = {
            name: name,
            surname: employeeSurnames[index],
            kdBroj: employeeKdBroj[index],
          };

          return (
            <li
              key={currentEmployee.kdBroj}
              className="flex w-full justify-between cursor-pointer hover:bg-slate-50 p-1 rounded"
              onClick={() => handleEmployeeClick(currentEmployee)}
            >
              <span className="font-semibold">
                {currentEmployee.name} {currentEmployee.surname}
              </span>
              <span className="text-sm text-gray-500">
                {currentEmployee.kdBroj}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
