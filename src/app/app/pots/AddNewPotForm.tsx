import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colors } from "../nav";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { AddNewPotAction } from "@/lib/Actions";
import { Pots } from "@/types/types";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";

type Props = {
  setOpen: (open: boolean) => void;
};
function AddNewPotForm({ setOpen }: Props) {
  const {
    register,
    control,
    handleSubmit,

    formState: { isSubmitting, errors },
  } = useForm<Pots>();
  const {} = useTransition();
  const onSubmit: SubmitHandler<Pots> = async (data) => {
    await AddNewPotAction({
      ...data,
      target: Number(data.target),
      created_at: String(new Date()),
      total: 0,
    });

    await setOpen(false);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-2">
        <div className="flex items-center capitalize">
          <Label htmlFor="confirmPassword">pot name</Label>
        </div>
        <Input
          id="name"
          type="text"
          required
          {...register("name", {
            required: "field is required",
            minLength: { value: 3, message: "enter a valid name" },
            pattern: {
              value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
              message: "enter a valid name",
            },
          })}
        />
        {errors && (
          <span className="text-xs italic text-secondary-red first-letter:capitalize">
            {errors?.name?.message}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <div className="flex items-center capitalize">
          <Label htmlFor="confirmPassword">target</Label>
        </div>
        <Input
          id="target"
          type="number"
          required
          {...register("target", {
            required: "field is required",
            min: { value: 100, message: "target should be above 100" },
            pattern: { value: /^\d*\.?\d+$/, message: "enter a valid target" },
          })}
        />
        {errors && (
          <span className="text-xs italic text-secondary-red first-letter:capitalize">
            {errors?.target?.message}
          </span>
        )}
      </div>
      <div className="grid gap-2">
        <div className="flex items-center capitalize">
          <Label htmlFor="confirmPassword">theme</Label>
        </div>
        <Controller
          name="theme"
          control={control}
          rules={{ required: "theme is required" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className="">
                <SelectValue placeholder="Themes" />
              </SelectTrigger>
              <SelectContent className="capitalize">
                {colors.map((item) => (
                  <SelectItem
                    value={item.theme}
                    key={item.id}
                    className="flex gap-2 capitalize"
                  >
                    <div className="flex gap-3">
                      <div
                        className="h-3 w-3 rounded-full bg-[var(--progress-color)]"
                        style={
                          {
                            "--progress-color": item.theme,
                          } as React.CSSProperties
                        }
                      ></div>
                      {item.name}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </div>
      <Button className="w-full capitalize" disabled={isSubmitting}>
        {isSubmitting ? "adding..." : "add pot"}
      </Button>
    </form>
  );
}

export default AddNewPotForm;
