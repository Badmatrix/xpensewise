import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helper";
import { Pots } from "@/types/types";
import { Ellipsis } from "lucide-react";
import { PotDropdown } from "./PotDropdown";
import PotListButtons from "./PotListButtons";

type Props = {
  pot: Pots;
};
function PotList({ pot }: Props) {
  const { name, theme, total, target } = pot;
  const val = Math.ceil((total / target) * 100);
  
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between capitalize">
          <h1 className="flex items-center gap-3">
            <span
              className="h-3 w-3 rounded-full bg-[var(--progress-color)]"
              style={{ "--progress-color": theme } as React.CSSProperties}
            ></span>
            {name}
          </h1>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Ellipsis className="cursor-pointer text-sm text-grey-300" />
              {/* <Button variant="outline">Open</Button> */}
            </DropdownMenuTrigger>
            <PotDropdown pot={pot} />
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="capitalize">
        <div className="space-y-1">
          <div className="flex justify-between">
            <p className="text-sm text-grey-500">total saved</p>
            <h5 className="text-xl font-bold">{formatCurrency(total)}</h5>
          </div>
          <Progress
            value={val}
            className="h-2 bg-beige-100 [&>*]:bg-[var(--progress-color)]"
            style={{ "--progress-color": theme } as React.CSSProperties}
          />
          <div className="flex justify-between text-xs text-grey-500">
            <p>{val}%</p>
            <p>target of {formatCurrency(target)}</p>
          </div>
        </div>
      </CardContent>
      <PotListButtons pot={pot}/>
    </Card>
  );
}

export default PotList;
