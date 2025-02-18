"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AddBudgetModal from "./AddBudgetModal";
import { useState, useTransition } from "react";
import { addMultipleBudget } from "@/lib/Actions";
import { allBudgets } from "../nav";
// import { Button } from "@/components/ui/button";

function BudgetHeader() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  function handleAdd() {
    startTransition(async () => {
      await addMultipleBudget(allBudgets);
    });
  }
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold capitalize">budget</h1>
      {/* <Button onClick={handleAdd}>
        {isPending ? "adding..." : "add all budget"}
      </Button> */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex items-center rounded-md bg-grey-900 px-3 py-2 text-xs font-semibold capitalize tracking-wide text-white transition-all duration-200 ease-linear hover:bg-grey-500">
          <Plus className="text-white" /> <span>add new budget</span>
        </DialogTrigger>
        <AddBudgetModal setOpen={setOpen} />
      </Dialog>
    </header>
  );
}

export default BudgetHeader;
