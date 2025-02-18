import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { category, colors } from "../nav";

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { AddBudgetAction } from "@/lib/Actions";

interface IFormInput {
  category: string;
  theme: string;
  maximum: number;
}
type Props = {
  setOpen: (open: boolean) => void;
};
export default function AddNewBudget({ setOpen }: Props) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await AddBudgetAction({
      ...data,
      maximum: Number(data.maximum),
      created_at: new Date(),
    });
    if (isSubmitSuccessful) {
      reset();
      setOpen(false);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      {/* Category Select */}
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
      </div>

      {/* Maximum Spend Input */}
      <div className="grid gap-2">
        <Label>Maximum Spend</Label>
        <Input
          {...register("maximum", { required: true, maxLength: 20 })}
          placeholder="e.g 2000"
          type="number"
        />
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
      </div>
      <Button className="w-full capitalize" disabled={isSubmitting}>
        add budget
      </Button>
    </form>
  );
}
