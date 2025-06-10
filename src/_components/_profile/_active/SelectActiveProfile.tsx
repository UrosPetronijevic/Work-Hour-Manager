"use client";

import useProfileStore from "@/_stores/activeProfile";
import { useState } from "react";

import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";

type ActiveProfileProps = {
  data: Person[] | null;
};

export default function SelectActiveProfile({ data }: ActiveProfileProps) {
  const { setActiveProfile } = useProfileStore();

  const [selectedKdBroj, setSelectedKdBroj] = useState<string>("");

  const handleSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const kdBroj = event.target.value;
    setSelectedKdBroj(kdBroj); // Update the local state for the dropdown

    // Find the full employee object that matches the selected ID
    const selectedEmployee = data?.find(
      (employee: any) => employee.kadrovskiBroj === kdBroj
    );

    // 4. If an employee is found, update Zustand
    if (selectedEmployee) {
      setActiveProfile(selectedEmployee);
    }
  };

  return (
    <label>
      <select value={selectedKdBroj} onChange={handleSelectionChange}>
        <option value="" disabled>
          -- Izaberite zaposlenog --
        </option>
        <option value="" hidden>
          Izaberi zaposlenog
        </option>
        {data?.map((employee: Person) => (
          <option
            key={`${employee.ime}${employee.kadrovskiBroj}`}
            value={employee.kadrovskiBroj}
          >
            {employee.ime} {employee.prezime} {employee.kadrovskiBroj}
          </option>
        ))}
      </select>
    </label>
  );
}
