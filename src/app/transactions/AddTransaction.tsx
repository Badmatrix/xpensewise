import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { category } from "@/lib/nav";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import LoadingSpinner from "../LoadingSpinner";
import { User } from "@supabase/supabase-js";
import { addTransactionAction, updateTransactionAvatar } from "@/lib/Actions";

type Props = { setOpen: (open: boolean) => void; user: User };
interface IFormInput {
  user_id: string;
  avatar: string;
  category: string;
  name: string;
  amount: number;
  recurring: string;
  type?: "incoming" | "outgoing";
  
}
function AddTransaction({ setOpen, user }: Props) {
  const { id } = user;
  const {
    handleSubmit,
    register,
    control,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<IFormInput>({
    defaultValues: {
      user_id: id,
      type: "outgoing",
      recurring: "false"
    },
  });
  const type = watch("type");
  const isIncome = type === "incoming" ? true : false;
  const onsubmit: SubmitHandler<IFormInput> = async (data) => {
    const newData = isIncome
      ? { ...data, category: "general", amount: +data.amount }
      : { ...data, amount: -data.amount };
    delete newData.type;
    // console.log({
    //   ...newData,
    //   created_at: new Date(),
    //   recurring: JSON.parse(newData.recurring),
    // });
    const res = await addTransactionAction({
      ...newData,
      created_at: new Date(),
      recurring: JSON.parse(newData.recurring),
    });
    if (res)
      await updateTransactionAvatar({
        ...res[0],
        avatar: `https://i.pravatar.cc/36?u=${res[0].id}`,
      });

    setOpen(false);
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <fieldset disabled={isSubmitting} className="space-y-5">
        <input type="hidden" {...register("user_id")} />
        <div className="grid gap-2">
          <Label>Transaction Category </Label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isIncome}
                required={!isIncome}
              >
                <SelectTrigger>
                  <SelectValue
                    placeholder="Categories"
                    className="capitalize"
                  />
                </SelectTrigger>
                <SelectContent className="capitalize">
                  {category.map((item) => (
                    <SelectItem value={item.value} key={item.name}>
                      {type === "incoming" ? "General" : item.name}
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
        <div className="grid gap-2">
          <Label>Name</Label>
          <Input
            type="text"
            placeholder="John Doe"
            {...register("name", {
              required: "input sender or receiver name",
              pattern: {
                value: /^[A-Za-z]+( [A-Za-z]+)*$/,
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
          <Label>Transaction type</Label>
          <Controller
            name="type"
            control={control}
            rules={{ required: "Transaction type is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="incoming" />
                </SelectTrigger>
                <SelectContent className="capitalize">
                  <SelectItem value="incoming">incoming</SelectItem>
                  <SelectItem value="outgoing">outgoing</SelectItem>
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
        <div className="grid gap-5 md:grid-cols-2">
          <div className="">
            <Label>Amount</Label>
            <Input
              {...register("amount", {
                required: "field is required",
                min: { value: 1, message: "enter a valid amount" },
              })}
              placeholder="e.g 2000"
              type="number"
            />
            {errors && (
              <span className="text-xs italic text-secondary-red first-letter:capitalize">
                {errors?.amount?.message}
              </span>
            )}
          </div>
          <div className="">
            <Label>Recurring</Label>
            <Controller
              name="recurring"
              control={control}
              rules={{ required: "select an item" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  required
                >
                  <SelectTrigger className="capitalize">
                    <SelectValue placeholder="True" />
                  </SelectTrigger>
                  <SelectContent className="capitalize">
                    <SelectItem value="true">true</SelectItem>
                    <SelectItem value="false">false</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
        </div>
        <Button className="w-full capitalize" disabled={isSubmitting}>
          {isSubmitting ? <LoadingSpinner /> : "add transaction"}
        </Button>
      </fieldset>
    </form>
  );
}

export default AddTransaction;
