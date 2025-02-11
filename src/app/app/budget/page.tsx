import BudgetsCategories from "./BudgetsCategories";
import BudgetLoading from "./BudgetLoading";
import { Button } from "@/components/ui/button";
import { getBudgets } from "@/service/apiUser";
import { Suspense } from "react";
import { Plus } from "lucide-react";
import BudgetChart from "./BudgetChart";

async function page() {
  const budgets = await getBudgets();

  return (
    <div className="w-full space-y-4">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold capitalize">budget</h1>
        <Button className="bg-grey-900 flex items-center text-xs font-semibold capitalize tracking-wide text-white">
          <Plus className="text-white" /> <span>add new budget</span>
        </Button>
      </header>

      <Suspense fallback={<BudgetLoading />}>
        <main className="grid gap-10 md:grid-cols-2">
          <BudgetChart budgets={budgets} />
          <BudgetsCategories budgets={budgets} />
        </main>
      </Suspense>
    </div>
  );
}

export default page;
