import { Person } from "@/_lib/_fetch/OdredjeniNeodredjeni";
import { create } from "zustand";

interface ProfileState {
  activeProfile: Person | null;
  setActiveProfile: (employee: Person) => void;
  clearActiveProfile: () => void;
}

const useProfileStore = create<ProfileState>((set) => ({
  activeProfile: null,
  setActiveProfile: (employee) => set({ activeProfile: employee }),
  clearActiveProfile: () => set({ activeProfile: null }),
}));

export default useProfileStore;
