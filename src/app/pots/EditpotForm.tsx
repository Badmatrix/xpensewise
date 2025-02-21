import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { colors } from "../../lib/nav";
import { Pots } from "@/types/types";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { updatePotsAction } from "@/lib/Actions";
import { Button } from "@/components/ui/button";

type Props = {
  pot: Pots;
  setOpen: (open: boolean) => void;
};

function EditpotForm({ pot, setOpen }: Props) {
  const { id, target, theme, total, name } = pot;
  const {
    register,
    control,
    handleSubmit,
    reset,

    formState: { errors },
  } = useForm<Pots>({
    defaultValues: {
      id,
      name,
      target,
      theme,
      total,
    },
  });
  const onSubmit: SubmitHandler<Pots> = async (data) => {
    await updatePotsAction({
      ...data,
      target: Number(data.target),
    });

    await setOpen(false);
    reset();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("id")} />
      <div className="grid gap-2">
        <div className="flex items-center capitalize">
          <Label htmlFor="confirmPassword">pot name</Label>
        </div>
        <Input id="name" type="text" {...register("name")} disabled />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center capitalize">
          <Label htmlFor="confirmPassword">target</Label>
        </div>
        <Input
          id="target"
          type="number"
          {...register("target", {
            required: "target field is requires",
            min: { value: 1, message: "target should be above minimum" },
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
      <Button className="w-full capitalize">save changes</Button>
    </form>
  );
}

export default EditpotForm;
