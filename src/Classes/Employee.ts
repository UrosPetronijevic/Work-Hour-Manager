import { daysArray, thisMonth, thisYear } from "./Dates";
import { verskiPraznikArr } from "./OrtodoxEaster";
import { drzavniPraznikArr } from "./PublicHolidays";
import { weekendsArr } from "./Weekends";
import { calculateWorkingHours } from "./WorkHours";

export class Employee {
  imeZaposlenog: string = "";
  prezimeZaposlenog: string = "";
  jmbg: number | null = null;
  kadrovskiBroj: string = "";

  radniStaz: string = "";
  datumRodjenja: string = "";
  nbs: boolean = false;
  deca: boolean = false;
  radnoMesto: string = "";
  slava: boolean = false;

  zaposleniNaOdredjeno: boolean = false;
  zaposleniNaNeodredjeno: boolean = false;
  zaposleniPrekoZadruge: boolean = false;
  pp: boolean = false;

  pripravnost: boolean = false;

  fondSati: number = 0;
  redovanRad: number = 0;

  godisnjiOdmor: number = 0;
  placenoOdsustvo: number = 0;
  bolovanje30: number = 0;
  bolovanje100: number = 0;
  bolovanjeNaTeretFonda: number = 0;
  porodiljskoOdsustvo: number = 0;

  godisnjiOdmorArr: number[] = [];
  placenoOdsustvoArr: number[] = [];
  bolovanje30Arr: number[] = [];
  bolovanje100Arr: number[] = [];
  bolovanjeNaTeretFondaArr: number[] = [];
  porodiljskoOdsustvoArr: number[] = [];
  slavaArr: number[] = [];

  pripravnostSatiArr: (number | string | null)[] = [];
  pripravnostTotal: number = 0;

  selectedDaysArr: number[] = [];

  //SPECIAL CLASSES
  year_name: number = 0;
  month_name: string = "";
  filijala_name: string = "";

  constructor(
    ime: string,
    prezime: string,
    jmbg: number,
    kadrovskiBroj: string,

    radniStaz: string,
    datumRodjenja: string,
    nbs: boolean,
    deca: boolean,
    radnoMesto: string,
    slava: boolean,

    odredjeno: boolean,
    neodredjeno: boolean,
    zadruga: boolean,
    pp: boolean,

    pripravnost: boolean
  ) {
    this.imeZaposlenog = ime;
    this.prezimeZaposlenog = prezime;
    this.jmbg = jmbg;
    this.kadrovskiBroj = kadrovskiBroj;

    this.radniStaz = radniStaz;
    this.datumRodjenja = datumRodjenja;
    this.nbs = nbs;
    this.deca = deca;
    this.radnoMesto = radnoMesto;
    this.slava = slava;

    this.zaposleniNaOdredjeno = odredjeno;
    this.zaposleniNaNeodredjeno = neodredjeno;
    this.zaposleniPrekoZadruge = zadruga;
    this.pp = pp;

    this.pripravnost = pripravnost;

    this.fondSati = calculateWorkingHours();

    this.pripravnostSatiArr = daysArray.map((day) =>
      weekendsArr.includes(day) ||
      verskiPraznikArr.includes(day) ||
      drzavniPraznikArr.includes(day)
        ? null
        : 16
    );

    this.setStats();
  }

  // Method to get kadrovskiBroj (ID)
  getId(): string {
    return this.kadrovskiBroj;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /// UPOZORENJE NAPRAVITI STATE PA ZAMENITI VALUE TA BI SE TRIGEROVAO REFRESH / a ne ovako kao sto je sad

  setPripravnost() {
    this.pripravnost = !this.pripravnost;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  setPripravnostTotal() {
    let sum = 0;

    for (let i = 0; i < this.pripravnostSatiArr.length; i++) {
      sum += Number(this.pripravnostSatiArr[i]);
    }

    this.pripravnostTotal = sum;
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Godisnji odmor, placeno odsustvo,drzavni verski praznici
  setStats() {
    this.godisnjiOdmor = this.godisnjiOdmorArr.length * 8;
    this.placenoOdsustvo = this.placenoOdsustvoArr.length * 8;
    this.bolovanje30 = this.bolovanje30Arr.length * 8;
    this.bolovanje100 = this.bolovanje100Arr.length * 8;
    this.bolovanjeNaTeretFonda = this.bolovanjeNaTeretFondaArr.length * 8;
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  calculateRedovanRad() {
    this.redovanRad = 0; // Reset actual worked hours

    for (const day of daysArray) {
      const currentDate = new Date(thisYear, thisMonth, day);
      const dayOfWeek = currentDate.getDay(); // 0 = Sunday, 6 = Saturday

      // Calculate actual worked hours (redovanRad)
      if (
        dayOfWeek !== 0 && // Not Sunday
        dayOfWeek !== 6 && // Not Saturday
        !weekendsArr.includes(day) &&
        !drzavniPraznikArr.includes(day) &&
        !verskiPraznikArr.includes(day) &&
        !this.godisnjiOdmorArr.includes(day) &&
        !this.placenoOdsustvoArr.includes(day) &&
        !this.slavaArr.includes(day)
      ) {
        this.redovanRad += 8;
      }
    }
  }
}
