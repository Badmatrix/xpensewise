import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";

import React from "react";
import BillData from "./BillData";
const tableHeader = ["bill title", "due date", "amount"];
function BillTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="text-xs md:text-sm">
          {tableHeader.map((header) => (
            <TableHead key={header} className="capitalize">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <BillData />
    </Table>
  );
}

export default BillTable;
