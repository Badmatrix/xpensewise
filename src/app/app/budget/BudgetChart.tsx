import { Card } from "@/components/ui/card";
import { getTransactions } from "@/service/apiUser";
import { Budgets } from "@/types/types";
import ChartSummaryList from "./ChartSummaryList";
import Chart from "./Chart";
import { getTotal } from "@/lib/helper";

type ComponentProps = {
  budgets: Budgets[];
};

async function BudgetChart({ budgets }: ComponentProps) {
  const transactions = await getTransactions();
  const allTransactions = getTotal(transactions);
  const groupedSum = transactions.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + item.amount;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <section>
      <Card className="w-full p-4">
        <Chart budgets={budgets} total={allTransactions} />
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
      </Card>
    </section>
  );
}

export default BudgetChart;
