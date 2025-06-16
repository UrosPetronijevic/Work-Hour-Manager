import { create } from "zustand";

// 1. Define the type for a single absence object
export interface Absence {
  kadrovskiBroj: string;
  odsustva: string;
  godina: number;
  mesec: string;
  dan: number;
}

// 2. Define the type for the store's state and actions
interface AbsenceStoreState {
  selected: number[];
  absences: Absence[];
  setSelected: (newSelected: number[]) => void;
  setAbsences: (newAbsences: Absence[]) => void;
}

// 3. Create the store
export const useAbsenceStore = create<AbsenceStoreState>((set) => ({
  // Initial State
  selected: [],
  absences: [],

  // Actions (Setters)
  setSelected: (newSelected) => set({ selected: newSelected }),
  setAbsences: (newAbsences) => set({ absences: newAbsences }),
}));
