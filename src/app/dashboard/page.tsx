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
        <section className="grid  gap-7 self-start  xl:grid-flow-col">
          <div className="grid items-start gap-y-7 self-start xl:grid-rows-4">
            <PotSummary />
            <TransactionSummary />
          </div>
          <div className="grid items-start gap-y-7 self-start xl:grid-rows-3">
            <BudgetSummary />
            <BillSummary />
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
