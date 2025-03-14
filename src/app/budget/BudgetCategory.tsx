import { Card, CardHeader, CardDescription } from "@/components/ui/card";
import { formatCurrency, getTotal } from "@/lib/helper";
import { getTransactionByCategory } from "@/service/apiUser";
import { Ellipsis } from "lucide-react";
import BudgetBalance from "./BudgetBalance";
import ProgressCard from "./ProgressCard";
import CategoryCard from "./CategoryCard";

import { BudgetDropdown } from "./BudgetDropdown";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Budgets } from "@/types/types";
import { getCurrUser } from "@/lib/Actions";

type Props = {
  budget: Budgets;
};
async function BudgetCategory({ budget }: Props) {
  const { user } = await getCurrUser();
  const data = await getTransactionByCategory(budget.category, user.id);
  const totalAmounts = getTotal(data);
  const { category, theme, maximum } = budget;

  return (
    <Card className="border-0 pb-7 pt-2">
      <CardHeader className="">
        <div className="flex justify-between">
          <h1 className="flex items-center gap-3 text-lg font-semibold capitalize">
            <span
              className="h-3 w-3 rounded-full bg-[var(--progress-color)]"
              style={{ "--progress-color": theme } as React.CSSProperties}
            ></span>
            {category}
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Ellipsis className="cursor-pointer text-sm text-grey-300" />
            </DropdownMenuTrigger>
            <BudgetDropdown budget={budget} />
          </DropdownMenu>
        </div>

        <CardDescription className="first-letter:capitalize">
          maximum of {formatCurrency(maximum)}
        </CardDescription>
      </CardHeader>

      <div className="px-5">
        <ProgressCard maximum={maximum} theme={theme} total={totalAmounts} />

        <BudgetBalance theme={theme} total={totalAmounts} maximum={maximum} />
        <CategoryCard data={data} />
      </div>
    </Card>
  );
}

export default BudgetCategory;
