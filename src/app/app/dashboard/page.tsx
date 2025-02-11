import BalanceSummary from "./BalanceSummary";
import BillSummary from "./BillSummary";
import BudgetSummary from "./BudgetSummary";
import PotSummary from "./PotSummary";
import TransactionSummary from "./TransactionSummary";

function page() {
  return (
    <div className="my-3 space-y-4">
      <h1 className="text-2xl font-bold capitalize">overview</h1>
      <main className="space-y-7">
        <BalanceSummary />
        <section className="grid items-start  gap-7 lg:grid-flow-col lg:grid-rows-5">
          <PotSummary />
          <TransactionSummary />
          <BudgetSummary />
          <BillSummary />
        </section>
      </main>
    </div>
  );
}

export default page;
