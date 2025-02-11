import { supabase } from "./supabase";

export async function getTransactions() {
  const { data, error } = await supabase.from("transactions").select("*");
  // await new Promise((resolve) => setTimeout(resolve, 30000));
  if (error) {
    console.error("cannot load transactions");
    throw new Error("cannot load transactions");
  }
  return data;
}

export async function getTransactionByCategory(category: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    // Filters
    .eq("category", category);

  if (error) {
    console.error("cannot load budgets");
    throw new Error("cannot load budgets");
  }
  return data;
}
export async function getPots() {
  const { data, error } = await supabase.from("pots").select("*");
  if (error) {
    console.error("cannot load pots");
    throw new Error("cannot load pots");
  }
  return data;
}
export async function getBudgets() {
  const { data, error } = await supabase.from("budgets").select("*");
  if (error) {
    console.error("cannot load budgets");
    throw new Error("cannot load budgets");
  }
  return data;
}
export async function getRecuringBills() {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("recurring", true);
  if (error) {
    console.error("cannot load bills");
    throw new Error("cannot load bills");
  }
  return data;
}
