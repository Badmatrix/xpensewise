import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { formatCurrency } from "@/lib/helper";
import { Pots } from "@/types/types";
import { useForm } from "react-hook-form";
import AddtoPotForm from "./AddtoPotForm";

type Props = { pot: Pots; setOpen: (open: boolean) => void };

export default function AddtoPot({ pot, setOpen }: Props) {
  const { name, theme, target, total } = pot;
  const form = useForm<Pots>({
    defaultValues: {
      id: pot.id,
    },
  });
  const amttoAdd = form.watch("total", 0);
  const val = Math.round((amttoAdd / target) * 100);
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold capitalize">
          Add to {`${name}`}
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
            {formatCurrency(total + Number(amttoAdd))}
          </h5>
        </div>
        <Progress
          value={val}
          className="h-2 bg-beige-100 [&>*]:bg-[var(--progress-color)]"
          style={{ "--progress-color": theme } as React.CSSProperties}
        />
        <div className="flex justify-between text-xs text-grey-500">
          <p className="text-secondary-green">{val}%</p>
          <p>target of {formatCurrency(target)}</p>
        </div>
      </div>
      <AddtoPotForm pot={pot} form={form} setOpen={setOpen} />
    </DialogContent>
  );
}
