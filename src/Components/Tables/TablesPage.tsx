// Components/Tables/Tables.tsx
"use client";

import NavigationTable from "../Navigation/NavigationTable";
import TableDodatnoOpt from "./TableDodatnoOpt";
import TableMor from "./TableMor";
import { useState } from "react";
import TablePrevoz from "./TablePrevoz";
import TablePrekovremeni from "./TablePrekovremeni";
import TablePripravnost from "./TablePripravnost";

export default function TablesPage() {
  const [selectedValue, setSelectedValue] = useState<string | null>("Mor");

  const renderComponent = () => {
    switch (selectedValue) {
      case "Mor":
      case "MorPP":
      case "MorZadruga":
        return <TableMor mor={selectedValue} />;
      case "Pripravnost":
        return <TablePripravnost />;
      case "Prevoz 1":
      case "Prevoz 2":
      case "Prevoz 3":
        return <TablePrevoz prevoz={selectedValue} />;
      case "Dodatno opt.":
        return <TableDodatnoOpt />;
      case "Prekovremeni":
        return <TablePrekovremeni />;
      default:
        return <TableMor mor={selectedValue} />;
    }
  };

  return (
    <div className="w-full h-full flex flex-col gap-2">
      <NavigationTable setItemSelected={setSelectedValue} />
      {renderComponent()}
    </div>
  );
}
