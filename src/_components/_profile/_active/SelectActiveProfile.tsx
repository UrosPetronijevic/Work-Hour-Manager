"use client";

import useProfileStore from "@/_stores/activeProfile";
import { useState } from "react";

import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";

type ActiveProfileProps = {
  data: Person[] | null;
};

type ActiveProfile = {
  name: string;
  surname: string;
  kdBroj: string;
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

    // 4. If an employee is found, create the new object and update Zustand
    if (selectedEmployee) {
      const newActiveProfile: ActiveProfile = {
        name: selectedEmployee.ime,
        surname: selectedEmployee.prezime,
        kdBroj: selectedEmployee.kadrovskiBroj,
      };

      // 5. Call the Zustand action with the newly created profile object
      setActiveProfile(newActiveProfile);
    }
  };

  return (
    <label>
      <select value={selectedKdBroj} onChange={handleSelectionChange}>
        <option value="" disabled>
          -- Please select --
        </option>
        <option value="" hidden>
          Izaberi zaposlenog
        </option>
        {data?.map((employee: any) => (
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
