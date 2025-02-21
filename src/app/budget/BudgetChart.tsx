import { Card } from "@/components/ui/card";
import { getTransactionByCategory } from "@/service/apiUser";
import { Budgets, Transaction } from "@/types/types";
import ChartSummaryList from "./ChartSummaryList";
import Chart from "./Chart";

type Props = {
  budgets: Budgets[];
};

async function BudgetChart({ budgets }: Props) {
  const res = await Promise.all(
    budgets.map((item) => getTransactionByCategory(item.category)),
  );

  const transactions: Transaction[] = res.flat();
  const allTransactions = Math.abs(
    transactions.reduce((total, item) => {
      return item.amount < 0 ? total + item.amount : total;
    }, 0),
  );

  const groupedSum: Record<string, number> = transactions.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    },
    {} as Record<string, number>,
  );
  return (
    <section>
      <Card className="w-full p-0 md:p-4 border-0">
        <Chart budgets={budgets} total={allTransactions} />
        <div className="px-2">
          <header>
            <h1 className="text-xl font-semibold capitalize text-grey-900">
              spending summary
            </h1>
          </header>
          <ul className="mt-3">
            {budgets.map((item) => (
              <ChartSummaryList
                item={item}
                key={item.id}
                groupedSum={groupedSum}
              />
            ))}
          </ul>
        </div>
      </Card>
    </section>
  );
}

export default BudgetChart;
