"use client";

import HomePage from "@/Components/HomePage";
import TablesPage from "@/Components/Tables/TablesPage";
import { useNavigationStore } from "@/stores/navigationStore";

export default function MainPage() {
  const activeComponent = useNavigationStore((state) => state.activeComponent); // Get active component

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <HomePage />;
      case "tables":
        return <TablesPage />;
      default:
        return <HomePage />;
    }
  };

  return <div className="min-h-screen max-w-screen">{renderComponent()}</div>;
}
