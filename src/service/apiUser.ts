import { Budgets } from "@/types/types";
import { supabase } from "./supabase";

export async function getTransactions(start: number, end: number) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .range(start, end)
    .order("created_at", { ascending: false });
  // await new Promise((resolve) => setTimeout(resolve, 30000));
  if (error) {
    console.error("cannot load transactions");
    throw new Error("cannot load transactions");
  }
  return data;
}
export async function getAllTransactions() {
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
  const { data, error } = await supabase
    .from("pots")
    .select("*")
    .order("id", { ascending: true });
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
export async function getRecuringBillsAll() {
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
export async function getRecuringBills(start: number, end: number) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("recurring", true)
    .range(start, end)
    .order("created_at", { ascending: false });
  if (error) {
    console.error("cannot load bills");
    throw new Error("cannot load bills");
  }
  return data;
}
export async function AddBudget() {
  const { data, error } = await supabase
    .from("budgets")
    .insert([{ some_column: "someValue", other_column: "otherValue" }]);

  if (error) {
    console.error("cannot insert into budget");
    throw new Error("cannot insert into budget");
  }
  return data;
}

export async function updateBudget(budgetID: number, updatedData: Budgets) {
  const { data, error } = await supabase
    .from("budgets")
    .update({ ...updatedData })
    .eq("id", budgetID);

  if (error) {
    console.error("cannot update into budget");
    throw new Error("cannot update into budget");
  }
  return data;
}
