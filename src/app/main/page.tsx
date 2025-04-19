// src/app/main/page.tsx
"use client";

import { useNavigationStore } from "@/stores/navigationStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./Components/HomePage";
import TablesPage from "./Components/Tables/TablesPage";

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
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="max-w-screen">{renderComponent()}</div>
    </QueryClientProvider>
  );
}
