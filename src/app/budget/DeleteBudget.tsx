"use client";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { deleteBudgetAction } from "@/lib/Actions";
import { Budgets } from "@/types/types";
import { useTransition } from "react";
type Props = {
  budget: Budgets;
  setOpen: (open: boolean) => void;
};
function DeleteBudget({ budget, setOpen }: Props) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    startTransition(async () => {
      await deleteBudgetAction(budget.id ?? 0);
      setOpen(false);
    });
  }
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-xl font-bold capitalize">
          Delete {budget.category}
        </DialogTitle>

        <DialogDescription>
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <Button
          onClick={handleDelete}
          className={`w-full capitalize text-white transition-all duration-200 ease-linear ${isPending ? "cursor-not-allowed bg-secondary-red/80" : "bg-secondary-red hover:bg-secondary-red/90"} `}
        >
          {isPending ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              <span className="ml-2">Deleting...</span>
            </>
          ) : (
            "Yes, Confirm Deletion"
          )}
        </Button>
        <Button
          onClick={() => setOpen(false)}
          className="w-full bg-grey-100 capitalize text-grey-900 transition-all duration-200 ease-linear hover:bg-grey-900 hover:text-grey-100"
        >
          no, go back
        </Button>
      </div>
    </DialogContent>
  );
}

export default DeleteBudget;
