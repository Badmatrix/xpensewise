"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { updatePotsAction } from "@/lib/Actions";
import { Pots } from "@/types/types";
import { DollarSign } from "lucide-react";
import { SubmitHandler } from "react-hook-form";
type Props = {
  pot: Pots;
  setOpen: (open: boolean) => void;
  form: any;
};

function WithdrawalForm({ pot, setOpen, form }: Props) {
  const { total } = pot;
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = form;

  const onSubmit: SubmitHandler<Pots> = async (data) => {
    if (data.total > total) return;
    await updatePotsAction({
      ...data,
      total: Number(total - data.total),
    });

    reset();
    setOpen(false);
    // }
  };

  return (
    <form className="grid gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex items-center justify-between capitalize">
        <Label htmlFor="confirmPassword">amount to withdraw</Label>
        {errors && (
          <span className="text-xs italic text-secondary-red first-letter:capitalize">
            {errors?.total?.message}
          </span>
        )}
      </div>
      <input type="hidden" {...register("id")} disabled />
      <div className="relative">
        <Input
          id="amount"
          className="w-full pl-10 outline-none ring-0 placeholder:text-xs"
          type="number"
          required
          {...register("total", {
            required: "field is required",
            max: {
              value: total,
              message: "you can't withdraw above your savings",
            },
            min: { value: 1, message: "" },
          })}
        />
        <DollarSign className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
      </div>
      <Button className="capitalize">confirm withdrawal</Button>
    </form>
  );
}

export default WithdrawalForm;
