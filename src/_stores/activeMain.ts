import { create } from "zustand";

interface ActiveMainState {
  activeMain: string;
  setActiveMain: (component: string) => void;
}

const useActiveMain = create<ActiveMainState>((set) => ({
  activeMain: "pocetna", // Default value
  setActiveMain: (component) => set({ activeMain: component }),
}));

export default useActiveMain;
