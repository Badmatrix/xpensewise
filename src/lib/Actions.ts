"use server";

import { supabase } from "@/service/supabase";
import { getSupabaseServer } from "@/service/supabase/supabaseServer";
import { Budgets, Pots, Transaction } from "@/types/types";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateBudgetAction(formData: Budgets) {
  const { error } = await supabase
    .from("budgets")
    .update({ ...formData })
    .eq("id", formData.id);

  if (error) {
    return "cannot update into budget";
  }
  revalidatePath("/budget");
}

export async function AddBudgetAction(formData: Budgets) {
  const { error } = await supabase.from("budgets").insert([formData]);

  if (error) {
    return error.message;
  }
  revalidatePath("/budget");
}
export async function deleteBudgetAction(budgetID: number) {
  const { error } = await supabase.from("budgets").delete().eq("id", budgetID);
  if (error) {
    return error.message;
  }
  revalidatePath("/budget");
  // console.log(budgetID);
}
export async function updatePotsAction(formData: Pots) {
  const { error } = await supabase
    .from("pots")
    .update({ ...formData })
    .eq("id", formData.id);

  if (error) {
    return error.message;
  }
  revalidatePath("/pots");
}
export async function AddNewPotAction(formData: Pots) {
  const { error } = await supabase.from("pots").insert([formData]);

  if (error) {
    return error.message;
  }
  revalidatePath("/pots");
  // console.log(formData);
}
export async function deletePotAction(potID: number) {
  const { error } = await supabase.from("pots").delete().eq("id", potID);
  if (error) {
    return error.message;
  }
  revalidatePath("/budget");
  // console.log(budgetID);
}

export async function addMultipleTransactions(array: Transaction[]) {
  const { data, error } = await supabase
    .from("transactions")
    .insert(array)
    .select();
  if (error) {
    return error.message;
  }
  revalidatePath("/app/budget");
  return data;
}
export async function addMultiplePots(array: Pots[]) {
  const { data, error } = await supabase.from("pots").insert(array).select();
  if (error) {
    return error.message;
  }
  revalidatePath("/app/pots");
  return data;
}
export async function addMultipleBudget(array: Budgets[]) {
  const { data, error } = await supabase.from("budgets").insert(array).select();
  if (error) {
    return error.message;
  }
  revalidatePath("/app/budgets");
  return data;
}

export async function loginUser(email: string, password: string) {
  const supabase = await getSupabaseServer();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return error.message;
  }

  redirect("/dashboard");
}

export async function logoutUser() {
  const supabase = await getSupabaseServer();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return error.message;
  }
  redirect("/login");
}

export async function signupUser(email: string, password: string) {
  const supabase = await getSupabaseServer();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    return error.message;
  } else {
    redirect("/dashboard");
  }
}

export async function getCurrUser() {
  const supabase = await getSupabaseServer();
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    throw new Error(error.message);
  }

  return data;
}
