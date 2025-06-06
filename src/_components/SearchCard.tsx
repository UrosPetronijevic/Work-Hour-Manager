type SearchCardProps = {
  letter: string;
  employeeNames: string[];
};

export default function SearchCard({ letter, employeeNames }: SearchCardProps) {
  return (
    <div className="w-full flex flex-col gap-2 shadow-md p-4 border border-slate-100">
      <span className="self-center underline text-sky-300">
        {letter.toUpperCase()}
      </span>
      <ul>
        {employeeNames.map((name, index) => (
          <li key={`search bar employee name ${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
