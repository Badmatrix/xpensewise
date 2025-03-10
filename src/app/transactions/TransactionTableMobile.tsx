import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { PAGE_SIZE } from "@/lib/Constant";
import {
  getSortedData,
  getSearchedData,
  formatCurrency,
  formatDateFromTimestamp,
} from "@/lib/helper";
import { getTransactions } from "@/service/apiUser";
import { Transaction } from "@/types/types";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

type Props = { filter: string; sort: string; search: string; page: number };
async function TransactionTableMobile({ filter, sort, search, page }: Props) {
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
          
      <TableBody>
        {searchedTransactions?.map((transaction: Transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>
              <Avatar>
                {/* <AvatarImage src={transaction.avatar} /> */}
                <AvatarFallback className="aspect-square rounded-full bg-grey-100 px-2 py-3">
                  CN
                </AvatarFallback>
              </Avatar>
            </TableCell>
            <TableCell className="text-nowrap">
              <div className="text-sm font-semibold">{transaction.name}</div>
              <div className="text-xs text-grey-500">
                {transaction.category}
              </div>
            </TableCell>
            <TableCell className="text-nowrap">
              <div
                className={`${transaction.amount > 0 ? "text-secondary-green" : "text-secondary-red"} text-xs font-semibold`}
              >
                {formatCurrency(transaction.amount)}
              </div>
              <div className="text-xs text-grey-300">
                {formatDateFromTimestamp(transaction.created_at)}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TransactionTableMobile;
{
  /* <TableCell className="flex items-center gap-5">
              
              
            </TableCell>
            <TableCell className="capitalize"></TableCell>
            <TableCell>
              {formatDateFromTimestamp(transaction.created_at)}
            </TableCell>
            <TableCell
              className={`${transaction.amount > 0 ? "text-secondary-green" : "text-secondary-red"}`}
            >
              {" "}
              {formatCurrency(transaction.amount)}
            </TableCell> */
}
