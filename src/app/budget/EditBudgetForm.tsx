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
import { Budgets } from "@/types/types";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { updateBudgetAction } from "@/lib/Actions";

type Props = {
  budget: Budgets;
  setOpen: (open: boolean) => void;
};

interface IFormInput {
  id: number;
  category: string;
  theme: string;
  maximum: number;
}

export default function EditBudgetForm({ budget, setOpen }: Props) {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, isSubmitSuccessful },
  } = useForm<IFormInput>({
    defaultValues: {
      id: budget?.id,
      maximum: budget?.maximum || 0,
      category: budget?.category,
      theme: budget?.theme,
    },
  });
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    await updateBudgetAction({
      ...data,
      maximum: Number(data.maximum),
      created_at: String(new Date()),
    });
    if (isSubmitSuccessful) {
      reset();
      setOpen(false);
    }
  };
  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
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
              disabled={!!budget?.category}
              required
            >
              <SelectTrigger
                className={!!budget?.category ? "cursor-not-allowed" : ""}
              >
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
          {...register("maximum", { required: true, maxLength: 20, min: 1 })}
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
            <Select onValueChange={field.onChange} defaultValue={field.value}>
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
        edit budget
      </Button>
    </form>
  );
}
