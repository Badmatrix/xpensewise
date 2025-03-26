"use client";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AddTransactionModal from "./AddTransactionModal";
import { User } from "@supabase/supabase-js";
import { useState } from "react";

type Props = { user: User };
function Header({ user }: Props) {
  // const [isPending, startTransition] = useTransition();
  // function handleAdd() {
  //   startTransition(async () => {
  //     await addMultipleTransactions(allTransactions);
  //   });
  // }
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold capitalize">transactions</h1>
      {/* <Button onClick={handleAdd}>
        {isPending ? "adding...." : "add all transactions"}
      </Button> */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger className="flex items-center rounded-md bg-grey-900 px-3 py-2 text-xs font-semibold capitalize tracking-wide text-white transition-all duration-200 ease-linear hover:bg-grey-500">
          <Plus className="text-white" />
          <span>add transaction</span>
        </DialogTrigger>
        <AddTransactionModal user={user} setOpen={setOpen} />
      </Dialog>
    </div>
  );
}
export default Header;
