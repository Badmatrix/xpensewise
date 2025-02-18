import TransactionTableItems from "@/components/TransactionTableItems";
import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { getTransactions } from "@/service/apiUser";

const tableHeader = [
  "recipient / sender",
  "category",
  "transaction date",
  "amount",
];
async function TransactionTable({ filter, sort, search }: any) {
  const transactions = await getTransactions();

  const filteredTransactions =
    filter === "all-transactions"
      ? transactions
      : transactions.filter((tx) => tx.category === filter);

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const getTime = (date: string) => new Date(date).getTime(); // Ensure number output

    const sortOptions: Record<string, number> = {
      latest: getTime(b.created_at) - getTime(a.created_at),
      oldest: getTime(a.created_at) - getTime(b.created_at),
      highest: b.amount - a.amount,
      lowest: a.amount - b.amount,
      "a-z": a.name.localeCompare(b.name),
      "z-a": b.name.localeCompare(a.name),
    };

    return sortOptions[sort] ?? 0;
  });

  const searchedTransactions = sortedTransactions.filter((tx) =>
    ["name", "category", "amount"].some((key) =>
      String(tx[key]).toLowerCase().includes(search.toLowerCase()),
    ),
  );

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
      <TransactionTableItems transactions={searchedTransactions} />
    </Table>
  );
}

export default TransactionTable;
