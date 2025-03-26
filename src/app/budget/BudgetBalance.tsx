import { formatCurrency } from "@/lib/helper";
import React from "react";

type Props = {
  theme: string;
  total: number;
  maximum: number;
};
function BudgetBalance({ theme, total, maximum }: Props) {
  const isAboveBudget = total < 0;
  return (
    <div
      className="my-5 grid grid-cols-2 gap-5 capitalize"
      title={isAboveBudget ? "you have spent beyond your budget" : ""}
    >
      <div
        className="rounded-l-sm border-l-4 border-[var(--progress-color)] px-3"
        style={{ "--progress-color": theme } as React.CSSProperties}
      >
        <p className="text-xs">spent</p>
        <h5 className="text-sm font-semibold">
          {formatCurrency(Math.abs(total))}
        </h5>
      </div>
      <div className="rounded-l-sm border-l-4 border-grey-300 px-3">
        <p className="text-xs">remaining</p>
        <h5
          className={`font-semibold" text-sm ${isAboveBudget ? "text-secondary-red" : ""}`}
        >
          {formatCurrency(maximum - Math.abs(total))}
        </h5>
      </div>
    </div>
  );
}

export default BudgetBalance;
