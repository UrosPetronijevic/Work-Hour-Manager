// stores/navigationStore.ts
import { create } from "zustand";

interface NavigationState {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeComponent: "home",
  setActiveComponent: (component: string) =>
    set({ activeComponent: component }),
}));
