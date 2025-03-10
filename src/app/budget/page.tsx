import BudgetsCategories from "./BudgetsCategories";
import { getBudgets } from "@/service/apiUser";


import BudgetChart from "./BudgetChart";
import BudgetHeader from "./BudgetHeader";
import EmptyBudget from "./EmptyBudget";

async function page() {
  const budgets = await getBudgets();

  return (
    <div className="w-full space-y-4">
      <BudgetHeader />

      {!budgets.length ? (
        <EmptyBudget />
      ) : (
        <main className="grid gap-10 md:grid-cols-2">
          <BudgetChart budgets={budgets} />
          <BudgetsCategories budgets={budgets} />
        </main>
      )}
    </div>
  );
}

export default page;
