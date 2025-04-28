// lib/hooks/useEmployeesData.ts
import { useQuery } from "@tanstack/react-query";
import { getSakljucariGornje } from "../apiSakljucariGornje";

// Define the unique query key for employees data
const SAKLJUCARI_GORNJE_KEY = ["sakljucarigornje"];

// Custom hook to fetch and access employee data
export const useSakljucariGornje = () => {
  // Use the useQuery hook with the defined key and fetch function
  return useQuery({
    queryKey: SAKLJUCARI_GORNJE_KEY,
    queryFn: getSakljucariGornje,
  });
};
