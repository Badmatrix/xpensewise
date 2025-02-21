import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { TableBody, TableRow, TableCell } from "../../components/ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";
import { Transaction } from "@/types/types";


type componentProps = {
  transactions: Transaction[];
};
function TransactionTableItems({ transactions }: componentProps) {
  return (
    <TableBody>
      {transactions?.map((transaction: Transaction) => (
        <TableRow key={transaction.id}>
          <TableCell className="flex items-center gap-5">
            <Avatar>
              {/* <AvatarImage src={transaction.avatar} /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {transaction.name}
          </TableCell>
          <TableCell className="capitalize">{transaction.category}</TableCell>
          <TableCell>
            {formatDateFromTimestamp(transaction.created_at)}
          </TableCell>
          <TableCell
            className={`${transaction.amount > 0 ? "text-secondary-green" : "text-secondary-red"}`}
          >
            {" "}
            {formatCurrency(transaction.amount)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TransactionTableItems;
