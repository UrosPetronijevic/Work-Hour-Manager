// formStore.ts
import { create } from "zustand";

interface FormState {
  // FormSection1 State
  ime: string;
  setIme: (value: string) => void;
  prezime: string;
  setPrezime: (value: string) => void;
  datumRodjenja: string;
  setDatumRodjenja: (value: string) => void;
  jmbg: string;
  setJmbg: (value: string) => void;

  // FormSection2 State (example - add all properties)
  someOtherValue: string;
  setSomeOtherValue: (value: string) => void;

  // FormSection3 State
  sakljucar: string;
  setSakljucar: (value: string) => void;
  popUp: boolean;
  setPopUp: (value: boolean) => void;
}

const useFormStore = create<FormState>((set) => ({
  // FormSection1 Initial State and Setters
  ime: "",
  setIme: (value: string) => set({ ime: value }),
  prezime: "",
  setPrezime: (value: string) => set({ prezime: value }),
  datumRodjenja: "",
  setDatumRodjenja: (value: string) => set({ datumRodjenja: value }),
  jmbg: "",
  setJmbg: (value: string) => set({ jmbg: value }),

  // FormSection2 Initial State and Setters (example - add all properties)
  someOtherValue: "",
  setSomeOtherValue: (value: string) => set({ someOtherValue: value }),

  // FormSection3 Initial State and Setters
  sakljucar: "",
  setSakljucar: (value: string) => set({ sakljucar: value }),
  popUp: false,
  setPopUp: (value: boolean) => set({ popUp: value }),
}));

export default useFormStore;
