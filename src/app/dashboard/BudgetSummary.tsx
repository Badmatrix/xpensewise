import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBudgets, getTransactionByCategory } from "@/service/apiUser";
import ChartSummary from "./ChartSummary";

import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import ChartSummaryList from "./ChartSummaryList";
import { Transaction } from "@/types/types";

async function BudgetSummary() {
  const budgets = await getBudgets();

  const res = await Promise.all(
    budgets.map((item) => getTransactionByCategory(item.category)),
  );
  const transactions: Transaction[] = res.flat();

  const allTransactions = Math.abs(
    transactions.reduce((total, item) => {
      return item.amount < 0 ? total + item.amount : total;
    }, 0),
  );
  const display = budgets.slice(0, 4);
  const groupedSum: Record<string, number> = transactions.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <Card
      className={`border-0 lg:row-span-1 ${!budgets.length ? "hidden" : "block"}`}
    >
      <CardHeader>
        <CardTitle className="flex justify-between capitalize text-grey-900">
          <h3 className="text-lg font-semibold"> budgets</h3>
          <button className="flex items-center gap-1 align-middle text-xs font-normal text-grey-500 transition-colors duration-300 ease-linear hover:text-grey-900">
            <Link href="budget" className="">
              see details
            </Link>
            <IoMdArrowDropright className="text-lg" />
          </button>
        </CardTitle>
      </CardHeader>
      <div className="flex w-full flex-col items-center gap-3 md:flex-row lg:justify-between">
        <Card className="w-2/3 justify-start border-0 shadow-none">
          <CardContent className="">
            <ChartSummary budgets={budgets} total={allTransactions} />
          </CardContent>
        </Card>

        <ul className="mx-2 mb-3 flex flex-wrap items-center space-y-2 md:flex-col md:items-start lg:w-1/3">
          {display.map((item) => (
            <ChartSummaryList
              item={item}
              key={item.id}
              groupedSum={groupedSum}
            />
          ))}
        </ul>
      </div>
    </Card>
  );
}

export default BudgetSummary;
