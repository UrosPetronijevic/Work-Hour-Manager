// lib/hooks/useEmployeesData.ts
import { useQuery } from "@tanstack/react-query";
import { getEmployees } from "../apiEmployees";

// Define the unique query key for employees data
const EMPLOYEES_QUERY_KEY = ["employees"];

// Custom hook to fetch and access employee data
export const useEmployeesData = () => {
  // Use the useQuery hook with the defined key and fetch function
  return useQuery({
    queryKey: EMPLOYEES_QUERY_KEY,
    queryFn: getEmployees,
  });
};
