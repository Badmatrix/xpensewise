import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helper";
import { Pots } from "@/types/types";
import { Ellipsis } from "lucide-react";

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
          <Ellipsis className="text-grey-500" />
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
      <CardFooter className="flex justify-center gap-7">
        <Button className="w-1/2 scale-105 transform bg-beige-100 capitalize text-grey-900 transition-all duration-300 ease-linear hover:bg-beige-500/30">
          add money
        </Button>

        <Button className="w-1/2 scale-105 transform bg-beige-100 capitalize text-grey-900 transition-all duration-300 ease-linear hover:bg-beige-500/30">
          withdraw
        </Button>
      </CardFooter>
    </Card>
  );
}

export default PotList;
