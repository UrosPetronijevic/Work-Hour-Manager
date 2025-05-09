import { create } from "zustand";

export type Dete = {
  ime: string;
  prezime: string;
  datumRodjenja: string;
};

type Deca = Dete[];

interface Section1State {
  ime: string;
  prezime: string;
  datumRodjenja: string;
  jmbg: string;
  slava: string;
  decaArr: Deca;
  setFormData: (data: Partial<Section1State>) => void;
}

const useSection1Store = create<Section1State>((set) => ({
  ime: "",
  prezime: "",
  datumRodjenja: "",
  jmbg: "",
  slava: "",
  decaArr: [],
  setFormData: (data) => set(data),
}));

export default useSection1Store;
