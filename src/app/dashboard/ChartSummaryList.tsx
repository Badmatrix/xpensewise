import { formatCurrency } from "@/lib/helper";
import { Budgets } from "@/types/types";
import React from "react";

type Props = {
  item: Budgets;
  groupedSum: Record<string, number>
};
function ChartSummaryList({ item, groupedSum }: Props) {
  const { theme, category } = item;

  return (
    <li className="text-sm capitalize text-grey-500">
      <div
        className="space-y-1 border-l-4 border-[var(--progress-color)] px-4 py-1"
        style={{ "--progress-color": theme } as React.CSSProperties}
      >
        <span>{item.category}</span>

        <div className="text-sm font-bold text-grey-900">
          {formatCurrency(Math.abs(groupedSum[category] ?? 0))}
        </div>
      </div>
    </li>
  );
}

export default ChartSummaryList;
