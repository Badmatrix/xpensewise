"use server";

import { supabase } from "@/service/supabase";
import { revalidatePath } from "next/cache";

export async function updateBudgetAction(formData: any) {
  const { error } = await supabase
    .from("budgets")
    .update({ ...formData })
    .eq("id", formData.id);

  if (error) {
    console.error("cannot update into budget");
    throw new Error("cannot update into budget");
  }
  revalidatePath("/app/budget");

  // console.log(formData);
}

export async function AddBudgetAction(formData: any) {
  const { error } = await supabase.from("budgets").insert([formData]);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/budget");
  //   console.log(formData);
}
export async function deleteBudgetAction(budgetID: number) {
  const { error } = await supabase.from("budgets").delete().eq("id", budgetID);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/budget");
  // console.log(budgetID);
}
export async function updatePotsAction(formData: any) {
  const { error } = await supabase
    .from("pots")
    .update({ ...formData })
    .eq("id", formData.id);

  if (error) {
    // console.error("cannot update into budget");
    throw new Error(error.message);
  }
  revalidatePath("/app/pots");

  // console.log(formData);
}
export async function AddNewPotAction(formData: any) {
  const { error } = await supabase.from("pots").insert([formData]);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/pots");
  // console.log(formData);
}
export async function deletePotAction(potID: number) {
  const { error } = await supabase.from("pots").delete().eq("id", potID);
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/budget");
  // console.log(budgetID);
}

export async function addMultipleTransactions(array: any[]) {
  const { data, error } = await supabase
    .from("transactions")
    .insert(array)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/budget");
  return data;

}
export async function addMultiplePots(array: any[]) {
  const { data, error } = await supabase
    .from("pots")
    .insert(array)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/pots");
  return data;
}
export async function addMultipleBudget(array: any[]) {
  const { data, error } = await supabase
    .from("budgets")
    .insert(array)
    .select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/budgets");
  return data;
}
