import BudgetsCategories from "./BudgetsCategories";
import { getBudgets } from "@/service/apiUser";

import BudgetChart from "./BudgetChart";
import BudgetHeader from "./BudgetHeader";
import EmptyBudget from "./EmptyBudget";
import { getCurrUser } from "@/lib/Actions";
import { redirect } from "next/navigation";

async function page() {
  const { user } = await getCurrUser();
  if (!user) redirect("/login");
  const budgets = await getBudgets(user.id);

  return (
    <div className="w-full space-y-4">
      <BudgetHeader user={user} />

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
