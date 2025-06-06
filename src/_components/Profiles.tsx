"use client";

import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import SearchCard from "./SearchCard";

export default function Profiles() {
  const employeeNames = [
    "Alice",
    "Ana",
    "Ben",
    "Cora",
    "Dylan",
    "Eva",
    "Felix",
    "Grace",
    "Henry",
    "Isla",
    "Jack",
    "Kira",
    "Liam",
    "Maya",
    "Noah",
    "Olivia",
    "Paul",
    "Quinn",
    "Ruby",
    "Sam",
    "Tara",
    "Uma",
    "Victor",
    "Willow",
    "Xander",
    "Yara",
    "Zane",
  ];

  const [searchValue, setSearchValue] = useState<string>("");

  const groupedEmployees = useMemo(() => {
    const filteredEmployees = employeeNames.filter((name) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );

    return filteredEmployees.reduce((groups, name) => {
      const letter = name[0].toLowerCase();

      if (!groups[letter]) {
        groups[letter] = [];
      }

      groups[letter].push(name);
      return groups;
    }, {} as Record<string, string[]>);
  }, [searchValue]);

  return (
    <div className="max-w-screen min-h-screen flex flex-col p-10 gap-10">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="grid grid-cols-5 gap-10">
        {Object.keys(groupedEmployees)
          .sort()
          .map((letter) => (
            <SearchCard
              key={letter}
              letter={letter}
              employeeNames={groupedEmployees[letter]}
            />
          ))}
      </div>
    </div>
  );
}
