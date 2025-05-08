import { create } from "zustand";

interface FormSectionState {
  activeComponent: string;
  setActiveComponent: (component: string) => void;
}

const useActiveSectionStore = create<FormSectionState>((set) => ({
  activeComponent: "section-1", // Default value
  setActiveComponent: (component) => set({ activeComponent: component }),
}));

export default useActiveSectionStore;
