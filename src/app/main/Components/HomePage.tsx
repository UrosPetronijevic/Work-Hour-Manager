import { getFilijale } from "@/lib/apiFilijale";
import { useQuery } from "@tanstack/react-query";

interface Filijala {
  id: number;
  name: string;
  year_name: number;
  month_name: string;
}

export default function HomePage() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["filijala"],
    queryFn: getFilijale,
  });
  let filijala: Filijala | undefined;
  if (data) {
    filijala = data[0];
  }
  console.log(filijala);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="p-4">
      homepage <span>{filijala?.name}</span>
    </div>
  );
}
