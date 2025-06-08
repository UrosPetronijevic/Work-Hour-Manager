"use client";

import { getOdredjeniNeodredjeni } from "@/_lib/_fetch/OdredjeniNeodredjeni";
import useProfileStore from "@/_stores/activeProfile";
import { useEffect, useState } from "react";

export default function ActiveProfile() {
  const { activeEmployee, clearActiveProfile, setActiveProfile } =
    useProfileStore();

  const [employeesOiNeO, setEmployeesOiNeO] = useState<any>([]);

  const [employeeDetails, setEmployeeDetails] = useState<any>(null);

  // --- EFFECT 1: Fetch the data ONCE ---
  // This effect runs only when activeEmployee goes from null to a value.
  useEffect(() => {
    // Only fetch if a profile is opened and we don't have the data yet.
    if (activeEmployee && employeesOiNeO.length === 0) {
      const fetchAllData = async () => {
        console.log("Fetching the full employee list...");
        try {
          const { data: OiNeO, error } = await getOdredjeniNeodredjeni();
          if (error || !OiNeO) {
            throw new Error("Failed to fetch employee data.");
          }
          setEmployeesOiNeO(OiNeO); // Store the full list
        } catch (err) {
          console.error(err);
        }
      };
      fetchAllData();
    }
  }, [activeEmployee, employeesOiNeO.length]); // Runs when profile opens

  // --- EFFECT 2: Find the employee details ---
  // This effect runs whenever the active employee OR the fetched list changes.
  useEffect(() => {
    if (activeEmployee && employeesOiNeO.length > 0) {
      console.log("Searching for employee in the list we already have...");
      const foundEmployee = employeesOiNeO.find(
        (person: any) => person.kadrovskiBroj === activeEmployee.kdBroj
      );

      if (foundEmployee) {
        setEmployeeDetails(foundEmployee);
      }
    } else {
      // If the profile is closed, clear the details
      setEmployeeDetails(null);
    }
  }, [activeEmployee, employeesOiNeO]); // Re-runs on click, but doesn't re-fetch

  // If no employee is active, render nothing. This is important!
  if (!activeEmployee) {
    return null;
  }

  return (
    <div className="min-h-screen w-full absolute bg-amber-300 flex flex-col p-4">
      <div className="flex w-full justify-between">
        <span>
          Zaposleni: {activeEmployee?.name} {activeEmployee?.surname}
        </span>
        <span>{activeEmployee?.kdBroj}</span>
        <span>
          <button
            onClick={clearActiveProfile}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </span>
      </div>

      <div className="flex">Something will be added later...</div>

      <div className="grid grid-cols-3">Something will also be added later</div>
      <div>
        {employeesOiNeO.map((e: any) => (
          <p key={e.kadrovskiBroj}>{e.kadrovskiBroj}</p>
        ))}
      </div>
    </div>
  );
}
