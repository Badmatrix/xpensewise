import { Budgets } from "@/types/types";
import { supabase } from "./supabase";

export async function getTransactions(start: number, end: number, id: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", id)
    .range(start, end)
    .order("created_at", { ascending: false });
  // await new Promise((resolve) => setTimeout(resolve, 30000));
  if (error) {
    throw new Error("cannot load transactions");
  }
  return data;
}
export async function getAllTransactions(id: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", id);
  // await new Promise((resolve) => setTimeout(resolve, 30000));
  if (error) {
    
    throw new Error("cannot load transactions");
  }
  return data;
}

export async function getTransactionByCategory(category: string, id: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("category", category)
    .eq("user_id", id);

  if (error) {
    
    throw new Error("cannot load budgets");
  }
  return data;
}

export async function getPots(id: string) {
  const { data, error } = await supabase
    .from("pots")
    .select("*")
    .order("id", { ascending: true })
    .eq("user_id", id);
  if (error) {
      throw new Error("cannot load pots");
  }
  return data;
}

export async function getRecuringBillsAll(id: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", id)
    .eq("recurring", true);
  if (error) {
        throw new Error("cannot load bills");
  }
  return data;
}
export async function getRecuringBills(start: number, end: number, id: string) {
  const { data, error } = await supabase
    .from("transactions")
    .select("*")
    .eq("user_id", id)
    .eq("recurring", true)
    .range(start, end)
    .order("created_at", { ascending: false });
  if (error) {
        throw new Error("cannot load bills");
  }
  return data;
}
export async function getBudgets(id: string) {
  const { data, error } = await supabase
    .from("budgets")
    .select("*")
    .eq("user_id", id);
  if (error) {
    
    throw new Error("cannot load budgets");
  }
  return data;
}
export async function AddBudget() {
  const { data, error } = await supabase
    .from("budgets")
    .insert([{ some_column: "someValue", other_column: "otherValue" }]);

  if (error) {
    
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
    throw new Error("cannot update into budget");
  }
  return data;
}
