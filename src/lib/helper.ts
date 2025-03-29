import { ExtendedTransaction, TotalProps, Transaction } from "@/types/types";
import { addMonths, differenceInDays, format, parseISO } from "date-fns";

export function formatDateFromTimestamp(
  timestamp: Date,
  desiredFormat: string = "dd MMM yyyy",
): string {
  try {
    const parsedDate = parseISO(String(timestamp)); // Parse the ISO 8601 timestamp string
    const formattedDate = format(parsedDate, desiredFormat); // Format the date
    return formattedDate;
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Invalid date"; // Or handle the error as needed
  }
}
export function formatDayFromTimestamp(
  timestamp: Date,
  desiredFormat: string = "do",
): string {
  const day = format(timestamp, desiredFormat);
  return day;
}
export function formatDiffernceInDays(curr: Date, prev: Date) {
  const daysDifference = differenceInDays(curr, prev);
  return daysDifference;
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

export function addDueDate(transaction: Transaction[]) {
  const today = new Date();
  return transaction.map((tx) => {
    const nextDueDate = addMonths(tx.created_at, 1); // Add 1 month for the next due date
    const daysRemaining = differenceInDays(nextDueDate, today);
    return {
      ...tx,
      due_date: format(nextDueDate, "yyyy-MM-dd"), // Format for better readability
      days_remaining: daysRemaining,
    };
  });
}

export function setBillStatus(transactions: ExtendedTransaction[]) {
  return transactions.reduce(
    (acc, tx) => {
      if (tx.days_remaining < 5) {
        acc.due.length += 1;
        acc.due.value += tx.amount;
      } else if (tx.days_remaining > 5 && tx.days_remaining < 15) {
        acc.upcoming.length += 1;
        acc.upcoming.value += tx.amount;
      } else if (tx.days_remaining >= 15 && tx.days_remaining <= 30) {
        acc.paid.length += 1;
        acc.paid.value += tx.amount;
      }
      return acc;
    },
    {
      due: { length: 0, value: 0 },
      upcoming: { length: 0, value: 0 },
      paid: { length: 0, value: 0 },
    },
  );
}
export function getTotal(data: TotalProps[]) {
  return data.reduce(
    (total, item) => total + (item.amount ?? item.maximum ?? item.total ?? 0),
    0,
  );
}

export function getSortedData<
  T extends { created_at: string; amount: number; name: string },
>(array: Array<T>, sort: string): Array<T> {
  return [...array].sort((a, b) => {
    const getTime = (date: string) => new Date(date).getTime(); // Ensure number output

    const sortOptions: Record<string, number> = {
      latest: getTime(b.created_at) - getTime(a.created_at),
      oldest: getTime(a.created_at) - getTime(b.created_at),
      highest: b.amount - a.amount,
      lowest: a.amount - b.amount,
      "a-z": a.name.localeCompare(b.name),
      "z-a": b.name.localeCompare(a.name),
    };

    return sortOptions[sort] ?? 0;
  });
}

export function getSearchedData<T extends Record<string, number>>(
  dataArr: Array<T>,
  keyArr: Array<keyof T>,
  searchBy: string,
): Array<T> {
  return dataArr.filter((tx) =>
    keyArr.some((key) =>
      String(tx[key] ?? "")
        .toLowerCase()
        .includes(searchBy.toLowerCase()),
    ),
  );
}

export const generatePageNumbers = (curr: number, pageNum: number) => {
  const pages = new Set<number>();

  pages.add(1); // First page
  pages.add(pageNum); // Last page
  pages.add(curr); // Current page

  if (curr > 2) pages.add(curr - 1); // Page before current
  if (curr > 3) pages.add(curr - 2); // Two pages before

  if (curr < pageNum - 1) pages.add(curr + 1); // Page after current
  if (curr < pageNum - 2) pages.add(curr + 2); // Two pages after

  return Array.from(pages).sort((a, b) => a - b);
};
