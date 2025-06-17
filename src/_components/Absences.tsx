"use client";

import { useAbsenceStore, Absence } from "@/_stores/absencesStore";
import useProfileStore from "@/_stores/activeProfile";
import { monthName, year } from "@/_lib/_dates/currentDateData";

const rows = [
  "Bolovanje 100",
  "Bolovanje 30",
  "Bolovanje na teret fonda",
  "Godisnji odmor",
  "Placeno odsustvo",
  "Porodiljsko odsustvo",
];

export default function Absences() {
  // We now need 'selected' to know which days to update
  const { absences, setAbsences, selected, setSelected } = useAbsenceStore();
  const { activeProfile } = useProfileStore();

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleAbsences = (absenceType: string) => {
    // 1. Guard clauses: Check for necessary data before proceeding.
    if (!activeProfile) {
      console.error("No active profile is selected.");
      alert("Molimo Vas, izaberite aktivni profil.");
      return;
    }
    if (selected.length === 0) {
      console.error("No days selected.");
      alert("Molimo Vas, izaberite bar jedan dan u kalendaru.");
      return;
    }

    // 2. Create an array of new absence objects, one for each selected day.
    const newEmployeeAbsences: Absence[] = selected.map((day) => ({
      kadrovskiBroj: activeProfile.kadrovskiBroj,
      odsustva: absenceType,
      godina: year,
      mesec: monthName,
      dan: day, // Use the day from the 'selected' array
    }));

    // 3. Efficiently merge existing absences with the new ones using a Map
    // to handle both additions and updates automatically.
    const absenceMap = new Map<string, Absence>();

    // First, add all existing absences to the map.
    // The key uniquely identifies an absence for a person on a specific day.
    absences.forEach((absence) => {
      const key = `${absence.kadrovskiBroj}-${absence.dan}-${absence.mesec}-${absence.godina}`;
      absenceMap.set(key, absence);
    });

    // Next, add all the new/updated absences. If a key already exists,
    // the map will automatically overwrite the old value with the new one.
    newEmployeeAbsences.forEach((newAbsence) => {
      const key = `${newAbsence.kadrovskiBroj}-${newAbsence.dan}-${newAbsence.mesec}-${newAbsence.godina}`;
      absenceMap.set(key, newAbsence);
    });

    // 4. Convert the map's values back into an array.
    const updatedAbsences = Array.from(absenceMap.values());

    // 5. Update the global state with the final, merged array.
    setAbsences(updatedAbsences);
    setSelected([]);

    console.log("Applied new absences for selected days:", newEmployeeAbsences);
    console.log("Final state of absences:", updatedAbsences);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  const handleDeleteAbsences = () => {
    // 1. Guard clauses: Check for necessary data before proceeding.
    if (!activeProfile) {
      alert("Molimo Vas, izaberite aktivni profil.");
      return;
    }
    if (selected.length === 0) {
      alert("Molimo Vas, izaberite dane koje želite da obrišete.");
      return;
    }

    // 2. Filter the absences array to create a new array with items to KEEP.
    const updatedAbsences = absences.filter((absence) => {
      // The condition to KEEP an absence is:
      // EITHER it belongs to a different profile
      // OR its day is NOT in the selected array.
      const isDifferentProfile =
        absence.kadrovskiBroj !== activeProfile.kadrovskiBroj;

      const isDayNotSelected = !selected.includes(absence.dan);

      return isDifferentProfile || isDayNotSelected;
    });

    setAbsences(updatedAbsences);
    setSelected([]);

    console.log("Deleted absences for selected days.");
    console.log("Final state of absences:", updatedAbsences);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <div className="bg-white shadow-md rounded-lg w-full overflow-hidden">
        <table className="w-full leading-normal cursor-pointer">
          <thead>
            <tr>
              <th className="text-center px-5 py-3 border-b-2 border-gray-200 bg-gray-800 text-lg font-semibold text-gray-100 uppercase tracking-wider">
                Odsustva
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                <td
                  className="px-5 py-4 border-b border-gray-200 text-sm hover:bg-slate-300"
                  onClick={() => handleAbsences(row)}
                >
                  <p className="text-gray-900 whitespace-no-wrap">{row}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleDeleteAbsences}
        className="bg-[#FF2400] text-white py-2 px-8 rounded-md w-2/3 mt-2 hover:bg-red-700 transition-colors duration-200"
      >
        Brisi
      </button>
    </div>
  );
}
