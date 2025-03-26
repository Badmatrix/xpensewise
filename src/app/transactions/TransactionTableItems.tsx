import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { TableBody, TableRow, TableCell } from "../../components/ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";
import { Transaction } from "@/types/types";
import { AvatarImage } from "@/components/ui/avatar";


type componentProps = {
  transactions: Transaction[];
};
function TransactionTableItems({ transactions }: componentProps) {
  return (
    <TableBody>
      {transactions?.map((transaction: Transaction) => (
        <TableRow key={transaction.id}>
          <TableCell className="flex items-center gap-5">
            <Avatar className="rounded-full">
              <AvatarImage className="rounded-full" src={transaction.avatar} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span className="capitalize">{transaction.name}</span>
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
