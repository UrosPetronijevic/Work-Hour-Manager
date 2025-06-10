"use client";

import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";
import useProfileStore from "@/_stores/activeProfile"; // Import Employee type

type SearchCardProps = {
  letter: string;
  employeeNames: string[];
  employeeSurnames: string[];
  employeeKdBroj: string[];
  data: Person[] | null;
};

export default function SearchCard({
  letter,
  employeeNames,
  employeeSurnames,
  employeeKdBroj,
  data,
}: SearchCardProps) {
  const { setActiveProfile } = useProfileStore();

  const handleEmployeeClick = (employee: Person) => {
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
          const currentEmployee = data?.find(
            (employee) => employee.kadrovskiBroj === employeeKdBroj[index]
          );

          if (!currentEmployee) {
            return null;
          }

          return (
            <li
              key={currentEmployee.kadrovskiBroj}
              className="flex w-full justify-between cursor-pointer hover:bg-slate-50 p-1 rounded"
              onClick={() => handleEmployeeClick(currentEmployee)}
            >
              <span className="font-semibold">
                {currentEmployee.ime} {currentEmployee.prezime}
              </span>
              <span className="text-sm text-gray-500">
                {currentEmployee.kadrovskiBroj}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
