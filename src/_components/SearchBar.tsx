"use client";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: (e: string) => void;
};

export default function SearchBar({
  searchValue,
  setSearchValue,
}: SearchBarProps) {
  return (
    <label className="w-[50%] flex flex-col items-center self-center">
      <input
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:selection:bg-transparent selection:bg-transparent"
        placeholder="Pretraži zaposlenog"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </label>
  );
}
