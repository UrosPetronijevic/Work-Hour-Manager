import supabase from "./supabase";

export async function getFilijale() {
  let { data: Filijale, error } = await supabase.from("Filijale").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error");
  }

  return Filijale;
}
