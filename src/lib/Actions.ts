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
    console.error("cannot update into budget");
    throw new Error("cannot update into budget");
  }
  revalidatePath("/budget");
}

export async function AddBudgetAction(formData: Budgets) {
  const { error } = await supabase.from("budgets").insert([formData]);

  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/budget");
  //   console.log(formData);
}
export async function deleteBudgetAction(budgetID: number) {
  const { error } = await supabase.from("budgets").delete().eq("id", budgetID);
  if (error) {
    console.error(error);
    throw new Error(error.message);
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
    // console.error("cannot update into budget");
    throw new Error(error.message);
  }
  revalidatePath("/pots");

  // console.log(formData);
}
export async function AddNewPotAction(formData: Pots) {
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

export async function addMultipleTransactions(array: Transaction[]) {
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
export async function addMultiplePots(array: Pots[]) {
  const { data, error } = await supabase.from("pots").insert(array).select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  revalidatePath("/app/pots");
  return data;
}
export async function addMultipleBudget(array: Budgets[]) {
  const { data, error } = await supabase.from("budgets").insert(array).select();
  if (error) {
    console.error(error);
    throw new Error(error.message);
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
    throw new Error(error.message);
  }

  redirect("/dashboard");
}

export async function logoutUser() {
  const supabase = await getSupabaseServer();

  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  // Redirect user to the login page after logout
  redirect("/login");
}

export async function signupUser(email: string, password: string) {
  const supabase = await getSupabaseServer();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    throw new Error(error.message);
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
