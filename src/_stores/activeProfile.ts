import { create } from "zustand";

export interface Employee {
  name: string;
  surname: string;
  kdBroj: string;
}

interface ProfileState {
  activeEmployee: Employee | null;
  setActiveProfile: (employee: Employee) => void;
  clearActiveProfile: () => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  activeEmployee: null,
  setActiveProfile: (employee) => set({ activeEmployee: employee }),
  clearActiveProfile: () => set({ activeEmployee: null }),
}));

export default useProfileStore;
