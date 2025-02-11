import {  TotalProps } from "@/types/types";
import { format, parseISO } from "date-fns";

export function formatDateFromTimestamp(
  timestamp: string,
  desiredFormat: string = "dd MMM yyyy",
): string {
  try {
    const parsedDate = parseISO(timestamp); // Parse the ISO 8601 timestamp string
    const formattedDate = format(parsedDate, desiredFormat); // Format the date
    return formattedDate;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date"; // Or handle the error as needed
  }
}
export function formatCurrency(
  amount: number,
  currencyCode: string = "NGN",
  locale: string = "en-NG",
): string {
  try {
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency: currencyCode,
    });
    return formatter.format(amount);
  } catch (error) {
    console.error("Error formatting currency:", error);
    return amount.toString(); // Fallback to string representation if formatting fails
  }
}

// export const sumAmounts = (data: Transaction[]): number => {
//   return data.reduce((total, item) => total + (item.amount ?? 0), 0);
// };
// export const totalMaxBudget = (data: Budgets[]): number => {
//   return data.reduce((total, item) => total + (item.maximum ?? 0), 0);
// };

export function getTotal(data: TotalProps[]) {
  return data.reduce(
    (total, item) => total + (item.amount ?? item.maximum ?? item.total ?? 0),
    0,
  );
}
export async function getBudgetCategories(array: any[]) {
  const data = array.map((item) => item.category);
  return data;
}
