import React from "react";
import BudgetCategory from "./BudgetCategory";
import { Budgets } from "@/types/types";


type ComponentProps = {
  budgets: Budgets[];
};

function BudgetsCategories({ budgets }: ComponentProps) {
  return (
    <section className="space-y-4">
      {budgets.map((budget: Budgets) => (
        <BudgetCategory key={budget.id} budget={budget}/>
      ))}
    </section>
  );
}

export default BudgetsCategories;
