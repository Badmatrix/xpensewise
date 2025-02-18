import { formatCurrency } from "@/lib/helper";
import { Budgets } from "@/types/types";
import React from "react";

type Props = {
  item: Budgets;
  groupedSum: Record<string, number>;
};
function ChartSummaryList({ item, groupedSum }: Props) {
  const { theme, category } = item;

  return (
    <li className="border-b border-b-gray-300/20 py-2 text-sm capitalize text-grey-500">
      <div
        className="flex justify-between border-l-4 border-[var(--progress-color)] px-2 py-1"
        style={{ "--progress-color": theme } as React.CSSProperties}
      >
        <span>{item.category}</span>
        <div className="inline-flex gap-1">
          <span className="text-sm font-semibold lowercase text-grey-900">
            {formatCurrency(Math.abs(groupedSum[category] ?? 0))}
          </span>
          <span className="text-[10px]">of {formatCurrency(item.maximum)}</span>
        </div>
      </div>
    </li>
  );
}

export default ChartSummaryList;
