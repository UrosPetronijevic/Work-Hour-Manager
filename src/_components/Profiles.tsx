"use client";

import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import SearchCard from "./SearchCard";

type Person = {
  kadrovskiBroj: string;
  ime: string;
  prezime: string;
  datumRodjenja: Date;
  jmbg: number;
  slava: string;
  ocena: string;
  poslovniPodaci: string;
};

// The data prop can now be null or undefined
type ProfilesProps = {
  data: Person[] | null;
};

export default function Profiles({ data }: ProfilesProps) {
  const [searchValue, setSearchValue] = useState<string>("");

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
    <div className="max-w-screen min-h-screen flex flex-col p-10 gap-10">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid grid-cols-5 gap-10">
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
    </div>
  );
}
