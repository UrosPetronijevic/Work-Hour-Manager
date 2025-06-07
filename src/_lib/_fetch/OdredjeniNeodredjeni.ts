import supabase from "../supabase";

export async function getOdredjeniNeodredjeni() {
  let { data, error } = await supabase
    .from("Odredjeni i neodredjeni")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error");
  }

  return { data, error };
}
