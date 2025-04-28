import { useSakljucariGornje } from "@/lib/hooks/useSakljucariGornje";
import Spinner from "../Reusable/Spinner/Spinner";
import { handlePositionsGornje } from "@/lib/functions/handlePosition";
import { useEmployeesData } from "@/lib/hooks/useEmployeesData";

export default function TablePripravnost() {
  const {
    data: sakljucariGornjeData,
    isLoading,
    error,
  } = useSakljucariGornje();

  const { data: employees } = useEmployeesData();

  // Handle loading and error states gracefully
  if (isLoading) {
    return (
      <div className="flex justify-center">
        <Spinner size="large" />
      </div>
    );
  }

  if (error) {
    // Provide more informative error message
    return <div>Error fetching employees: {(error as Error).message}</div>;
  }

  return (
    <div>
      TablePripravnost
      <button
        onClick={() => {
          handlePositionsGornje(sakljucariGornjeData, employees);
        }}
      >
        log
      </button>
    </div>
  );
}
