import { Card } from "@/components/ui/card";

import React from "react";
import BillTable from "./BillTable";
import Sort from "./Sort";
import { Input } from "@/components/ui/input";

function BillsDisplay() {
  return (
    <div className="md:col-span-2">
      <Card className="space-y-7 border-0 px-3 py-5">
        <header className="flex items-center justify-between">
          <div className="w-1/3">
            <Input
              placeholder="search bills"
              className="h-8 w-full outline-none ring-0 placeholder:text-sm md:w-full"
            />
          </div>
          <Sort />
        </header>
        <BillTable />
      </Card>
    </div>
  );
}

export default BillsDisplay;
