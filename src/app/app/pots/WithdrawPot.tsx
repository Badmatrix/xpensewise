import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helper";
import { Pots } from "@/types/types";
import WithdrawalForm from "./WithdrawalForm";
import { useForm } from "react-hook-form";

type Props = { pot: Pots; setOpen: any };

export default function WithdrawPot({ pot, setOpen }: Props) {
  const { name, theme, target, total } = pot;
  const form = useForm<Pots>({ defaultValues: { id: pot.id } });
  const amtWithdraw = form.watch("total", 0);
  const val = Math.round((amtWithdraw / total) * 100);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold capitalize">
          withdraw from {`${name}`}
        </DialogTitle>
        <DialogDescription>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-1">
        <div className="flex justify-between">
          <p className="text-sm capitalize text-grey-500">new amount</p>
          <h5 className="text-xl font-bold">
            {formatCurrency(total - amtWithdraw)}
          </h5>
        </div>
        <Progress
          value={val}
          className="h-2 bg-beige-100 [&>*]:bg-[var(--progress-color)]"
          style={{ "--progress-color": theme } as React.CSSProperties}
        />
        <div className="flex justify-between text-xs text-grey-500">
          <p className="text-secondary-red">{val}%</p>
          <p>target of {formatCurrency(target)}</p>
        </div>
      </div>
      <WithdrawalForm pot={pot} setOpen={setOpen} form={form} />
    </DialogContent>
  );
}
