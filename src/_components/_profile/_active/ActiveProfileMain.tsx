import Absences from "@/_components/Absences";
import Calendar from "@/_components/Calendar";

export default function ActiveProfileMain() {
  return (
    <div className="grid grid-cols-[70%_30%]">
      <Calendar />
      <Absences />
    </div>
  );
}
