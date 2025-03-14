import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updatePotsAction } from "@/lib/Actions";
import { Pots } from "@/types/types";
import { DollarSign } from "lucide-react";
import { SubmitHandler, UseFormReturn } from "react-hook-form";
import LoadingSpinner from "../LoadingSpinner";

type Props = {
  pot: Pots;
  form: UseFormReturn<Pots>;
  setOpen: (open: boolean) => void;
};

export default function AddtoPotForm({ pot, form, setOpen }: Props) {
  const { total, target } = pot;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = form;
  const onSubmit: SubmitHandler<Pots> = async (data) => {
    if (data.total > target - total) return;
    await updatePotsAction({
      ...data,
      total: total + Number(data.total),
    });

    reset();
    setOpen(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="grid gap-2" disabled={isSubmitting}>
        <input type="hidden" {...register("id")} disabled />
        <div className="flex items-center justify-between capitalize">
          <Label htmlFor="confirmPassword">amount to add</Label>
          {errors && (
            <span className="text-xs italic text-secondary-red first-letter:capitalize">
              {errors?.total?.message}
            </span>
          )}
        </div>
        <div className="relative">
          <Input
            id="amount"
            className="w-full pl-10 outline-none ring-0 placeholder:text-xs"
            type="number"
            required
            {...register("total", {
              required: "field is required",
              max: {
                value: target - total,
                message: "increase your target to add more",
              },
              min: { value: 1, message: "increase your savings" },
            })}
          />
          <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        </div>
        <Button className="capitalize">
          {isSubmitting ? <LoadingSpinner /> : "confirm addition"}
        </Button>
      </fieldset>
    </form>
  );
}
