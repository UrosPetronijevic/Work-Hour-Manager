import NameList from "./Reusable/NameList";
import SearchBar from "./Reusable/SearchBar";

export default function Profiles({ items }: any) {
  return (
    <div className="flex flex-col items-center">
      <SearchBar items={["Uki", "Marko", "Darko"]} />
      <NameList />
    </div>
  );
}
