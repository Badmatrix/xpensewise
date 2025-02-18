"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import DeleteBudget from "./DeleteBudget";
import { Budgets } from "@/types/types";
import EditBudgetModal from "./EditBudgetModal";
import { useState } from "react";

type Props = {
  budget: Budgets;
};
export function BudgetDropdown({ budget }: Props) {
  const [open, setOpen] = useState(false);
  const [openDel, setOpenDel] = useState(false);

  return (
    <DropdownMenuContent className="mx-4 w-40">
      <DropdownMenuItem asChild>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="w-full px-4 py-1 text-sm capitalize hover:bg-grey-300/10">
              edit budget
            </button>
          </DialogTrigger>
          <EditBudgetModal budget={budget} setOpen={setOpen} />
        </Dialog>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Dialog open={openDel} onOpenChange={setOpenDel}>
          <DialogTrigger asChild>
            <button className="w-full px-4 py-1 text-sm capitalize text-secondary-red hover:bg-grey-300/10">
              delete budget
            </button>
          </DialogTrigger>
          <DeleteBudget budget={budget} setOpen={setOpenDel} />
        </Dialog>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}
