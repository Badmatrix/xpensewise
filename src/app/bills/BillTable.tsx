import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";

import React from "react";
import BillData from "./BillData";
const tableHeader = ["bill title", "due date", "amount"];
type Props = { sort: string; search: string; page: number };

function BillTable({ sort, search, page }: Props) {
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
      <BillData sort={sort} search={search} page={page} />
    </Table>
  );
}

export default BillTable;
