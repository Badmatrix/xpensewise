import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getBudgets, getTransactions } from "@/service/apiUser";
import ChartSummary from "./ChartSummary";
import { getTotal } from "@/lib/helper";

import { IoMdArrowDropright } from "react-icons/io";
import Link from "next/link";
import ChartSummaryList from "./ChartSummaryList";

async function BudgetSummary() {
  const budgets = await getBudgets();
  const transactions = await getTransactions();
  const allTransactions = getTotal(transactions);
  const display = budgets.slice(0, 4);

  const groupedSum: Record<string, number> = budgets.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + (item.maximum ?? 0);
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <Card
      className={`border-0 lg:row-span-2 ${!budgets.length ? "hidden" : "block"}`}
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
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <Card className="w-full border-0 shadow-none">
          <CardContent className="">
            <ChartSummary budgets={budgets} total={allTransactions} />
          </CardContent>
        </Card>

        <ul className="mx-2 mb-3 flex flex-wrap items-center space-y-2 md:flex-col md:items-start">
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
