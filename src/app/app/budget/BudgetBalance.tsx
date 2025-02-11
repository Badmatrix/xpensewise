import { formatCurrency } from "@/lib/helper";
import React from "react";

type Props = {
  theme: string;
  total: number;
  maximum: number;
};
function BudgetBalance({ theme, total, maximum }: Props) {
  return (
    <div className=" my-5 grid grid-cols-2 gap-5 capitalize">
      <div
        className="rounded-l-sm border-l-4 border-[var(--progress-color)] px-3"
        style={{ "--progress-color": theme } as React.CSSProperties}
      >
        <p className="text-xs">spent</p>
        <h5 className="text-sm font-semibold">{formatCurrency(total)}</h5>
      </div>
      <div className="border-grey-300 rounded-l-sm border-l-4 px-3">
        <p className="text-xs">remaining</p>
        <h5 className="text-sm font-semibold">
          {formatCurrency(maximum - total)}
        </h5>
      </div>
    </div>
  );
}

export default BudgetBalance;
