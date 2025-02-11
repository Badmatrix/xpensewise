import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { formatCurrency, getTotal } from "@/lib/helper";
import { getTransactionByCategory } from "@/service/apiUser";
import { Ellipsis } from "lucide-react";
import BudgetBalance from "./BudgetBalance";
import ProgressCard from "./ProgressCard";
import CategoryCard from "./CategoryCard";

interface BudgetProps {
  id: number;
  category: string;
  theme: string;
  maximum: number;
  created_at?: string;
}
type Props = {
  budget: BudgetProps;
};
async function BudgetCategory({ budget }: Props) {
  const data = await getTransactionByCategory(budget.category);
  const totalAmounts = getTotal(data);
  const { category, theme, maximum } = budget;
  return (
    <Card className="pb-7 pt-2">
      <CardHeader className="">
        <div className="flex justify-between">
          <h1 className="flex items-center gap-3 text-lg font-semibold capitalize">
            <span
              className="h-3 w-3 rounded-full bg-[var(--progress-color)]"
              style={{ "--progress-color": theme } as React.CSSProperties}
            ></span>
            {category}
          </h1>
          <Ellipsis className="cursor-pointer text-sm text-grey-300" />
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
