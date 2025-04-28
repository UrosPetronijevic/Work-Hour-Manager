// src/app/main/page.tsx
"use client";

import { useNavigationStore } from "@/stores/navigationStore";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from "./Components/HomePage";
import TablesPage from "./Components/Tables/TablesPage";
import NavigationMain from "./Components/Navigation/NavigationMain";
import { formatDateToDots, today } from "@/Classes/Dates";
import Profiles from "./Components/Profiles";
import Sakljucarstvo from "./Components/Sakljucarstvo";
import Graphs from "./Components/Graphs/Graphs";
import Yearly from "./Components/Yearly";
import Help from "./Components/Help";
import { useState } from "react";
import Profile from "./Components/Profile";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export default function MainPage() {
  const activeComponent = useNavigationStore((state) => state.activeComponent);

  const [profile, setProfile] = useState(true);

  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <HomePage />;
      case "profiles":
        return <Profiles />;
      case "tables":
        return <TablesPage />;
      case "sakljucarstvo":
        return <Sakljucarstvo />;
      case "graphs":
        return <Graphs />;
      case "yearly":
        return <Yearly />;
      case "help":
        return <Help />;
      default:
        return <HomePage />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen flex flex-col relative">
        <div className="flex justify-between p-4 text-2xl gold-striped-lighter font-bold">
          <span className="text-slate-600">{formatDateToDots(today)}</span>
          <span className="text-slate-600">username</span>
        </div>
        <NavigationMain />
        <ReactQueryDevtools initialIsOpen={false} />
        <div className="max-w-screen p-4">{renderComponent()}</div>

        {profile && <Profile />}
      </div>
    </QueryClientProvider>
  );
}
