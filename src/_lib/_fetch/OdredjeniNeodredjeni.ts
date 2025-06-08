import supabase from "../supabase";
import { PostgrestError } from "@supabase/supabase-js";

export type Person = {
  kadrovskiBroj: string;
  ime: string;
  prezime: string;
  datumRodjenja: Date;
  jmbg: number;
  slava: string;
  ocena: string;
  poslovniPodaci: string;
};

export async function getOdredjeniNeodredjeni(): Promise<{
  data: Person[] | null;
  error: PostgrestError | null;
}> {
  const { data, error } = await supabase
    .from("Odredjeni i neodredjeni")
    .select("*");

  if (error) {
    console.error("Supabase fetch error:", error.message);
    throw new Error("There was a fetching error");
  }

  return { data, error };
}
