"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Table, TableBody } from "@/components/ui/table";
import CategoryTable from "./CategoryTable";
import { Transaction } from "@/types/types";
import { useState } from "react";

type Props = {
  data: Transaction[];
};
function CategoryCard({ data }: Props) {
  const [showAll, setShowAll] = useState(false);
  const transactions = showAll ? data : data.slice(0, 3);
  return (
    <Card className="border-0 bg-beige-100">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-sm capitalize">
          <span>latest spending</span>
          <span
            onClick={() => setShowAll((show) => !show)}
            className="flex cursor-pointer items-center gap-1 text-xs text-grey-500 hover:text-grey-900"
          >
            see all {">"}
          </span>
        </CardTitle>
      </CardHeader>

      <Table>
        <TableBody>
          {transactions.map((item) => (
            <CategoryTable key={item.id} item={item} />
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

export default CategoryCard;
