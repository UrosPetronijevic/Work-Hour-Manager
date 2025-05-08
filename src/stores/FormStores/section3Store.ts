import { create } from "zustand";

interface Section3State {
  pripravnost: boolean;
  prekovremeni: boolean;
  dodatnoOpterecenje: boolean;

  filijalaSakljucarGornje: string | null;
  filijalaZamenik1Gornje: string | null;
  filijalaZamenik2Gornje: string | null;
  filijalaNepredvidjeni1Gornje: string | null;
  filijalaNepredvidjeni2Gornje: string | null;

  filijalaSakljucarDonje: string | null;
  filijalaZamenik1Donje: string | null;
  filijalaZamenik2Donje: string | null;
  filijalaNepredvidjeni1Donje: string | null;
  filijalaNepredvidjeni2Donje: string | null;

  prijemPredsednik: string | null;
  prijemZamenikPredsednika: string | null;
  prijemClanKomisije2: string | null;
  prijemZamenikClana2: string | null;
  prijemClanKomisije3: string | null;
  prijemZamenikClana3: string | null;

  nbsPredsednik: string | null;
  nbsZamenikPredsednika: string | null;
  nbsClanKomisije2: string | null;
  nbsZamenikClana2: string | null;
  nbsClanKomisije3: string | null;
  nbsZamenikClana3: string | null;

  vozac: string | null;
  zamenaVozaca: string | null;

  ekspozituraBarajevoSakljucarGornje: string | null;
  ekspozituraBarajevoZamenik1Gornje: string | null;
  ekspozituraBarajevoNepredvidjeni1Gornje: string | null;
  ekspozituraBarajevoNepredvidjeni2Gornje: string | null;

  ekspozituraBarajevoSakljucarDonje: string | null;
  ekspozituraBarajevoZamenik1Donje: string | null;
  ekspozituraBarajevoNepredvidjeni1Donje: string | null;
  ekspozituraBarajevoNepredvidjeni2Donje: string | null;

  ekspozituraLazarevacSakljucarGornje: string | null;
  ekspozituraLazarevacZamenik1Gornje: string | null;
  ekspozituraLazarevacNepredvidjeni1Gornje: string | null;
  ekspozituraLazarevacNepredvidjeni2Gornje: string | null;

  ekspozituraLazarevacSakljucarDonje: string | null;
  ekspozituraLazarevacZamenik1Donje: string | null;
  ekspozituraLazarevacNepredvidjeni1Donje: string | null;
  ekspozituraLazarevacNepredvidjeni2Donje: string | null;

  ekspozituraObrenovacSakljucarGornje: string | null;
  ekspozituraObrenovacZamenik1Gornje: string | null;
  ekspozituraObrenovacNepredvidjeni1Gornje: string | null;
  ekspozituraObrenovacNepredvidjeni2Gornje: string | null;

  ekspozituraObrenovacSakljucarDonje: string | null;
  ekspozituraObrenovacZamenik1Donje: string | null;
  ekspozituraObrenovacNepredvidjeni1Donje: string | null;
  ekspozituraObrenovacNepredvidjeni2Donje: string | null;
  setFormData: (data: Partial<Section3State>) => void;
}

const useSection3Store = create<Section3State>((set) => ({
  pripravnost: false,
  prekovremeni: false,
  dodatnoOpterecenje: false,

  filijalaSakljucarGornje: null,
  filijalaZamenik1Gornje: null,
  filijalaZamenik2Gornje: null,
  filijalaNepredvidjeni1Gornje: null,
  filijalaNepredvidjeni2Gornje: null,

  filijalaSakljucarDonje: null,
  filijalaZamenik1Donje: null,
  filijalaZamenik2Donje: null,
  filijalaNepredvidjeni1Donje: null,
  filijalaNepredvidjeni2Donje: null,

  prijemPredsednik: null,
  prijemZamenikPredsednika: null,
  prijemClanKomisije2: null,
  prijemZamenikClana2: null,
  prijemClanKomisije3: null,
  prijemZamenikClana3: null,

  nbsPredsednik: null,
  nbsZamenikPredsednika: null,
  nbsClanKomisije2: null,
  nbsZamenikClana2: null,
  nbsClanKomisije3: null,
  nbsZamenikClana3: null,

  vozac: null,
  zamenaVozaca: null,

  ekspozituraBarajevoSakljucarGornje: null,
  ekspozituraBarajevoZamenik1Gornje: null,
  ekspozituraBarajevoNepredvidjeni1Gornje: null,
  ekspozituraBarajevoNepredvidjeni2Gornje: null,

  ekspozituraBarajevoSakljucarDonje: null,
  ekspozituraBarajevoZamenik1Donje: null,
  ekspozituraBarajevoNepredvidjeni1Donje: null,
  ekspozituraBarajevoNepredvidjeni2Donje: null,

  ekspozituraLazarevacSakljucarGornje: null,
  ekspozituraLazarevacZamenik1Gornje: null,
  ekspozituraLazarevacNepredvidjeni1Gornje: null,
  ekspozituraLazarevacNepredvidjeni2Gornje: null,

  ekspozituraLazarevacSakljucarDonje: null,
  ekspozituraLazarevacZamenik1Donje: null,
  ekspozituraLazarevacNepredvidjeni1Donje: null,
  ekspozituraLazarevacNepredvidjeni2Donje: null,

  ekspozituraObrenovacSakljucarGornje: null,
  ekspozituraObrenovacZamenik1Gornje: null,
  ekspozituraObrenovacNepredvidjeni1Gornje: null,
  ekspozituraObrenovacNepredvidjeni2Gornje: null,

  ekspozituraObrenovacSakljucarDonje: null,
  ekspozituraObrenovacZamenik1Donje: null,
  ekspozituraObrenovacNepredvidjeni1Donje: null,
  ekspozituraObrenovacNepredvidjeni2Donje: null,
  setFormData: (data) => set(data),
}));

export default useSection3Store;
