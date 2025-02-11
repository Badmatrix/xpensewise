import { formatCurrency } from "@/lib/helper";
import { Pots } from "@/types/types";
import React from "react";

type Props = {
  potsDisplay: Pots[];
};
function PotListSummary({ potsDisplay }: Props) {
  return (
    <ul className="flex flex-wrap items-center gap-5 px-3 py-2 capitalize md:col-span-2">
      {potsDisplay.map((pot) => (
        <li
          key={pot.id}
          className="flex h-10 items-center rounded-sm border-l-4 border-l-[var(--progress-color)] px-2 py-2 text-sm"
          style={{ "--progress-color": pot.theme } as React.CSSProperties}
        >
          <div className="space-y-1">
            <p className="text-xs text-grey-300">{pot.name}</p>
            <h6 className="text-sm font-semibold text-grey-900">
              {formatCurrency(pot.target)}
            </h6>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PotListSummary;
