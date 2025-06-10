"use client";

import useProfileStore from "@/_stores/activeProfile";
import SelectActiveProfile from "./SelectActiveProfile";
import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";

type ActiveProfileHeaderProps = {
  data: Person[] | null;
};

export default function ActiveProfileHeader({
  data,
}: ActiveProfileHeaderProps) {
  const { activeProfile, clearActiveProfile } = useProfileStore();

  return (
    <div className="flex w-full justify-between">
      <p>
        <span className="font-bold"> Zaposleni: </span>
        {activeProfile?.ime} {activeProfile?.prezime}
      </p>
      <p>
        <span className="font-bold">Kadrovski broj:</span>{" "}
        {activeProfile?.kadrovskiBroj}
      </p>

      <div>
        <SelectActiveProfile data={data} />
      </div>
      <span>
        <button
          onClick={clearActiveProfile}
          className="text-gray-500 hover:text-gray-800 text-2xl"
        >
          &times;
        </button>
      </span>
    </div>
  );
}
