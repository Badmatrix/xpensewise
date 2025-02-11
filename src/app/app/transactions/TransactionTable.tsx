import TransactionTableItems from "@/components/TransactionTableItems";
import {Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { getTransactions } from "@/service/apiUser";

const tableHeader = [
  "recipient / sender",
  "category",
  "transaction date",
  "amount",
];
async function TransactionTable() {
  const transactions = await getTransactions();

  return (
    <Table className="w-full">
      <TableHeader>
        <TableRow className="hidden md:table-row">
          {tableHeader.map((header) => (
            <TableHead key={header} className="capitalize">
              {header}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TransactionTableItems transactions={transactions} />
    </Table>
  );
}

export default TransactionTable