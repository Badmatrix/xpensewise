"use client";

import { Plus } from "lucide-react";

import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import EditAddPotModal from "./EditAddPotModal";
import { useState } from "react";
import { User } from "@supabase/supabase-js";
type Props = { user: User };
function PotsHeader({ user }:Props) {
  const [open, setOpen] = useState(false);
  //  const [isPending, startTransition] = useTransition();
  //  function handleAdd() {
  //    startTransition(async () => {
  //      await addMultiplePots(allPots);
  //    });
  //  }

  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold capitalize">pots</h1>
      {/* <Button onClick={handleAdd}>{isPending?"adding...": "add all pots"}</Button> */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex items-center rounded-md bg-grey-900 px-3 py-2 text-xs font-semibold capitalize tracking-wide text-white transition-all duration-200 ease-linear hover:bg-grey-500">
          <Plus className="text-white" /> <span>add new pot</span>
        </DialogTrigger>
        <EditAddPotModal setOpen={setOpen} user={user} />
      </Dialog>
    </header>
  );
}

export default PotsHeader;
