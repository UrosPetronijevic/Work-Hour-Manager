import { create } from "zustand";

export interface Employee {
  name: string;
  surname: string;
  kdBroj: string;
}

interface ProfileState {
  activeProfile: Employee | null;
  setActiveProfile: (employee: Employee) => void;
  clearActiveProfile: () => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  activeProfile: null,
  setActiveProfile: (employee) => set({ activeProfile: employee }),
  clearActiveProfile: () => set({ activeProfile: null }),
}));

export default useProfileStore;
