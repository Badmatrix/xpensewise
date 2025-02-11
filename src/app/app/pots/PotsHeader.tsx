"use client"

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function PotsHeader() {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-2xl font-bold capitalize">pots</h1>
      <Button className="flex items-center bg-grey-900 text-xs font-semibold capitalize tracking-wide text-white">
        <Plus className="text-white" /> <span>add new pot</span>
      </Button>
    </header>
  );
}

export default PotsHeader