import supabase from "./supabase";

export async function getSakljucariGornje() {
  let { data: SakljucariGornje, error } = await supabase
    .from("Sakljucari Gornje")
    .select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error");
  }

  return SakljucariGornje;
}
