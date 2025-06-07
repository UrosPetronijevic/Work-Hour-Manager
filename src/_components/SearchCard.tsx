type SearchCardProps = {
  letter: string;
  employeeNames: string[];
  employeeSurnames: string[];
  employeeKdBroj: string[];
};

export default function SearchCard({
  letter,
  employeeNames,
  employeeSurnames,
  employeeKdBroj,
}: SearchCardProps) {
  return (
    <div className="w-full flex flex-col gap-2 shadow-md p-4 border border-slate-100">
      <span className="self-center underline text-sky-300">
        {letter.toUpperCase()}
      </span>
      <ul>
        {employeeNames.map((name, index) => (
          <li
            key={employeeKdBroj[index]}
            className="flex w-full justify-between cursor-pointer"
          >
            <span className="font-semibold">
              {name} {employeeSurnames[index]}
            </span>
            <span className="text-sm text-gray-500">
              {employeeKdBroj[index]}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
