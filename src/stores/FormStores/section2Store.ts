import { create } from "zustand";

interface Section2State {
  kadrovskiBroj: string;
  radnoMesto: string;
  skolskaSprema: string;
  zvanje: string;
  platniRazred: string;
  nbs: string;
  ukupanGodisnjiOdmor: string;

  neodredjeno: boolean;
  odredjeno: boolean;
  pp: boolean;
  zadruga: boolean;
  setFormData: (data: Partial<Section2State>) => void;
}

const useSection2Store = create<Section2State>((set) => ({
  kadrovskiBroj: "",
  radnoMesto: "",
  skolskaSprema: "",
  zvanje: "",
  platniRazred: "",
  nbs: "",
  ukupanGodisnjiOdmor: "",

  neodredjeno: false,
  odredjeno: false,
  pp: false,
  zadruga: false,
  setFormData: (data) => set(data),
}));

export default useSection2Store;
