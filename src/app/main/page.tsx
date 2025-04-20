// src/app/main/page.tsx
"use client";

import { useNavigationStore } from "@/stores/navigationStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./Components/HomePage";
import TablesPage from "./Components/Tables/TablesPage";
import NavigationMain from "./Components/Navigation/NavigationMain";
import { formatDateToDots, today } from "@/Classes/Dates";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function MainPage() {
  const activeComponent = useNavigationStore((state) => state.activeComponent);

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

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex justify-between p-4 text-2xl">
        <span className="text-amber-300">{formatDateToDots(today)}</span>
        <span className="text-amber-700">username</span>
      </div>
      <NavigationMain />
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="max-w-screen">{renderComponent()}</div>
    </QueryClientProvider>
  );
}
