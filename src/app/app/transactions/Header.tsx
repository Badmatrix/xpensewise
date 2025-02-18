"use client";
import { Button } from "@/components/ui/button";
import { addMultipleTransactions } from "@/lib/Actions";
import { useTransition } from "react";
import { allTransactions } from "../nav";

function Header() {
  const [isPending, startTransition] = useTransition();
  function handleAdd() {
    startTransition(async () => {
      await addMultipleTransactions(allTransactions);
    });
  }

  return (
    <div className="flex justify-between">
      <h1 className="text-2xl font-bold capitalize">transactions</h1>
      <Button onClick={handleAdd}>
        {isPending ? "adding...." : "add all transactions"}
      </Button>
    </div>
  );
}
export default Header;
