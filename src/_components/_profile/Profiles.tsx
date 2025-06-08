"use client";

import { useState, useMemo } from "react";
import SearchBar from "../_search/SearchBar";
import SearchCard from "../_search/SearchCard";
import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";
import ActiveProfile from "./ActiveProfile";
import useProfileStore from "@/_stores/activeProfile";

type ProfilesProps = {
  data: Person[] | null;
};

export default function Profiles({ data }: ProfilesProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const { activeEmployee, setActiveProfile } = useProfileStore();

  const groupedPeople = useMemo(() => {
    const searchTerm = searchValue.toLowerCase();

    // 1. Use `(data ?? [])` to safely handle null or undefined data.
    //    If `data` is null, it will filter an empty array, preventing a crash.
    const filteredPeople = (data ?? []).filter(
      (person) =>
        person.ime.toLowerCase().includes(searchTerm) ||
        person.prezime.toLowerCase().includes(searchTerm) ||
        person.kadrovskiBroj.toLowerCase().includes(searchTerm)
    );

    return filteredPeople.reduce((groups, person) => {
      const letter = person.ime[0].toLowerCase();

      if (!groups[letter]) {
        groups[letter] = [];
      }

      groups[letter].push(person);
      return groups;
    }, {} as Record<string, Person[]>);
  }, [data, searchValue]);

  return (
    <div className="max-w-screen min-h-screen flex flex-col gap-10">
      <div className="w-full flex justify-center p-10">
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="grid grid-cols-5 gap-10 p-10">
        {Object.keys(groupedPeople)
          .sort()
          .map((letter) => {
            const peopleInGroup = groupedPeople[letter];

            const employeeNames = peopleInGroup.map((p) => p.ime);
            const employeeSurnames = peopleInGroup.map((p) => p.prezime);
            const employeeKdBroj = peopleInGroup.map((p) => p.kadrovskiBroj);

            return (
              <SearchCard
                key={letter}
                letter={letter}
                employeeNames={employeeNames}
                employeeSurnames={employeeSurnames}
                employeeKdBroj={employeeKdBroj}
              />
            );
          })}
      </div>

      {activeEmployee && <ActiveProfile />}
    </div>
  );
}
