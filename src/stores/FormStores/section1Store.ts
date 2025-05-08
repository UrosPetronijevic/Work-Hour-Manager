import { create } from "zustand";

interface Dete {
  ime: string;
  prezime: string;
  datumRodjenja: string;
}

type Deca = Dete[];

interface Section1State {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  jmbg: number;
  slava: string;
  deca: Deca;
  setFormData: (data: Partial<Section1State>) => void;
}

const useSection1Store = create<Section1State>((set) => ({
  ime: "",
  prezime: "",
  datumRodjenja: "",
  jmbg: 0,
  slava: "",
  deca: [],
  setFormData: (data) => set(data),
}));

export default useSection1Store;
