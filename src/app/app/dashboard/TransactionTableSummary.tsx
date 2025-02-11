import { CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";
import { getTransactions } from "@/service/apiUser";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

import React from "react";

async function TransactionTableSummary() {
  const data = await getTransactions();
  const display = data.splice(0, 5);
  return (
    <CardContent>
      <Table>
        <TableBody>
          {display.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="flex items-center gap-5">
                <Avatar>
                  {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {item.name}
              </TableCell>
              <TableCell className="text-xs">
                {formatCurrency(item.amount)}
                <div className="text-grey-300">
                  {formatDateFromTimestamp(item.created_at)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  );
}

export default TransactionTableSummary;
