"use client";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Pots } from "@/types/types";
import DeletePot from "./DeletePot";
import { useState } from "react";
import EditAddPotModal from "./EditAddPotModal";

type Props = {
  pot: Pots;
};
export function PotDropdown({ pot }: Props) {
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
          <EditAddPotModal pot={pot} setOpen={setOpen}  />
        </Dialog>
      </DropdownMenuItem>

      <DropdownMenuItem asChild>
        <Dialog open={openDel} onOpenChange={setOpenDel}>
          <DialogTrigger asChild>
            <button className="w-full px-4 py-1 text-sm capitalize text-secondary-red hover:bg-grey-300/10">
              delete budget
            </button>
          </DialogTrigger>
          <DeletePot pot={pot} setOpen={setOpenDel} />
        </Dialog>
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
}

