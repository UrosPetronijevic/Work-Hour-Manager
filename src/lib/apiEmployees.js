import supabase from "./supabase";

export async function getEmployees() {
  let { data, error } = await supabase.from("Employees").select("*");

  if (error) {
    console.error(error);
    throw new Error("There was an error");
  }

  return data;
}
