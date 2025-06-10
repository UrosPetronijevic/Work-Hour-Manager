"use client";

import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";
import useProfileStore from "@/_stores/activeProfile";

type ActiveProfileFooterProps = {
  data: Person[] | null;
};

export default function ActiveProfileFooter({
  data,
}: ActiveProfileFooterProps) {
  const { activeProfile, setActiveProfile } = useProfileStore();

  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col gap-8">
        <span>Datum rodjenja: </span>
        <span>Radni staz: </span>
        <span>Deca paketici jmbg: </span>
      </div>

      <div className="flex flex-col items-center">
        <span>Pozicija u pripravnosti: </span>
        <span>Radno mesto: </span>
        <span>Narodna banka: </span>
      </div>

      <div className="flex flex-col items-end">
        <span>Ukupan godisnji odmor: </span>
        <span>Ostatak godisnjeg odmora: </span>
      </div>
    </div>
  );
}
