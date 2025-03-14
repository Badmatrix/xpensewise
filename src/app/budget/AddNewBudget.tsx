import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { category, colors } from "../../lib/nav";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AddBudgetAction } from "@/lib/Actions";
import { User } from "@supabase/supabase-js";
import LoadingSpinner from "../LoadingSpinner";
import toast from "react-hot-toast";

interface IFormInput {
  user_id: string;
  category: string;
  theme: string;
  maximum: number;
}
type Props = {
  setOpen: (open: boolean) => void;
  user: User;
};
export default function AddNewBudget({ setOpen, user }: Props) {
  const { id } = user;

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<IFormInput>({
    defaultValues: {
      user_id: id,
      theme: "",
      maximum: 1,
      category: "",
    },
  });

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const res = await AddBudgetAction({
      ...data,
      maximum: Number(data.maximum),
      created_at: new Date(),
    });
    if (res) {
      toast.error(res);
    }

    reset();
    setOpen(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Category Select */}
      <fieldset className="space-y-4" disabled={isSubmitting}>
        <input type="hidden" {...register("user_id")} />
        <div className="grid gap-2">
          <Label>Budget Category</Label>
          <Controller
            name="category"
            control={control}
            rules={{ required: "Category is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Categories" />
                </SelectTrigger>
                <SelectContent className="capitalize">
                  {category.map((item) => (
                    <SelectItem value={item.value} key={item.name}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors && (
            <span className="text-xs italic text-secondary-red first-letter:capitalize">
              {errors?.category?.message}
            </span>
          )}
        </div>

        {/* Maximum Spend Input */}
        <div className="grid gap-2">
          <Label>Maximum Spend</Label>
          <Input
            {...register("maximum", {
              required: "field is required",
            })}
            placeholder="e.g 2000"
            type="number"
          />
          {errors && (
            <span className="text-xs italic text-secondary-red first-letter:capitalize">
              {errors?.maximum?.message}
            </span>
          )}
        </div>

        {/* Theme Select */}
        <div className="grid gap-2">
          <Label>Theme</Label>
          <Controller
            name="theme"
            control={control}
            rules={{ required: "theme is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Themes" />
                </SelectTrigger>
                <SelectContent className="capitalize">
                  {colors.map((item) => (
                    <SelectItem value={item.theme} key={item.id}>
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
          {errors && (
            <span className="text-xs italic text-secondary-red first-letter:capitalize">
              {errors?.theme?.message}
            </span>
          )}
        </div>
        <Button className="w-full capitalize" disabled={isSubmitting}>
          {isSubmitting ? <LoadingSpinner /> : "add budget"}
        </Button>
      </fieldset>
    </form>
  );
}
