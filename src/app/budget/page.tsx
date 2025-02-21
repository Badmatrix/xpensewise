import BudgetsCategories from "./BudgetsCategories";
import BudgetLoading from "./BudgetLoading";
import { getBudgets } from "@/service/apiUser";
import { Suspense } from "react";

import BudgetChart from "./BudgetChart";
import BudgetHeader from "./BudgetHeader";
import EmptyBudget from "./EmptyBudget";

async function page() {
  const budgets = await getBudgets();

  return (
    <div className="w-full space-y-4">
      <BudgetHeader />

      {!budgets.length ? (
        <EmptyBudget/>
      ) : (
        <Suspense fallback={<BudgetLoading />}>
          <main className="grid gap-10 md:grid-cols-2">
            <BudgetChart budgets={budgets} />
            <BudgetsCategories budgets={budgets} />
          </main>
        </Suspense>
      )}
    </div>
  );
}

export default page;
