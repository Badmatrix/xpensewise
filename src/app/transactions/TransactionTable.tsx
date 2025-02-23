import TransactionTableItems from "@/app/transactions/TransactionTableItems";
import { Table, TableHeader, TableRow, TableHead } from "@/components/ui/table";
import { PAGE_SIZE } from "@/lib/Constant";
import { getSearchedData, getSortedData } from "@/lib/helper";
import { getTransactions } from "@/service/apiUser";

const tableHeader = [
  "recipient / sender",
  "category",
  "transaction date",
  "amount",
];

type Props = { filter: string; sort: string; search: string; page: number };

async function TransactionTable({ filter, sort, search, page }: Props) {
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE - 1;
  const transactions = await getTransactions(start, end);

  const filteredTransactions =
    filter === "all-transactions"
      ? transactions
      : transactions.filter(
          (tx) =>
            tx.category && tx.category.toLowerCase() === filter.toLowerCase(),
        );

  const searchBy = ["name", "category", "amount"];
  const sortedTransactions = getSortedData(filteredTransactions, sort);
  const searchedTransactions = getSearchedData(
    sortedTransactions,
    searchBy,
    search,
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