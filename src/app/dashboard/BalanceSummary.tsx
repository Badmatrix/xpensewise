import { Card } from "@/components/ui/card";
import { formatCurrency, getTotal } from "@/lib/helper";
import { getAllTransactions } from "@/service/apiUser";

async function BalanceSummary() {
  const transactions = await getAllTransactions();

  const currBalance = getTotal(transactions);
  const income = transactions.reduce((total, item) => {
    return item.amount > 0 ? total + item.amount : total;
  }, 0);
  const expense = Math.abs(
    transactions.reduce((total, item) => {
      return item.amount < 0 ? total + item.amount : total;
    }, 0),
  );

  const balance = [
    {
      title: "current balance",
      amount: currBalance,
      style: "bg-grey-900 text-white",
    },
    { title: "income", amount: income, style: " text-grey-900" },
    { title: "expenses", amount: expense },
  ];

  return (
    <div className="">
      <ul className="grid grid-flow-row gap-3 md:grid-flow-col md:gap-5">
        {balance.map((item) => (
          <Card
            key={item.title}
            className={`${item.style} space-y-3 border-0 px-5 py-7`}
          >
            <div className="text-sm font-light capitalize">{item.title}</div>
            <div className="text-xl font-bold tracking-wider">
              {formatCurrency(item.amount)}
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default BalanceSummary;
