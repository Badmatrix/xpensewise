import React from "react";
import BudgetCategory from "./BudgetCategory";
import { Budgets } from "@/types/types";


type Props = {
  budgets: Budgets[];
};

function BudgetsCategories({ budgets }: Props) {
  return (
    <section className="space-y-4">
      {budgets.map((budget) => (
        <BudgetCategory key={budget.id} budget={budget}/>
      ))}
    </section>
  );
}

export default BudgetsCategories;
