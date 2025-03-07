import { getCurrUser } from "@/lib/Actions";
import BalanceSummary from "./BalanceSummary";
import BillSummary from "./BillSummary";
import BudgetSummary from "./BudgetSummary";
import PotSummary from "./PotSummary";
import TransactionSummary from "./TransactionSummary";
import { redirect } from "next/navigation";

async function page() {
  const user = await getCurrUser();
  if (!user) redirect("/login");
  return (
    <div className="my-3 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">overview</h1>
        <h3 className="text-base">
          welcome back,{" "}
          <span className="font-semibold capitalize">{"name"}</span>
        </h3>
      </div>
      <main className="space-y-7">
        <BalanceSummary />
        <section className="grid gap-7 self-start xl:grid-flow-col">
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
