import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { TableBody, TableRow, TableCell } from "./ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";


interface Transactions {
  id: string;
  name: string;
  category: string;
  created_at: string;
  amount: number;
  avatar?: string;
};
type componentProps = {
  transactions: Transactions[];
};
function TransactionTableItems({ transactions }: componentProps) {
  return (
    <TableBody>
      {transactions.map((transaction: Transactions) => (
        <TableRow key={transaction.id}>
          <TableCell className="flex items-center gap-5">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {transaction.name}
          </TableCell>
          <TableCell className="capitalize">{transaction.category}</TableCell>
          <TableCell>
            {formatDateFromTimestamp(transaction.created_at)}
          </TableCell>
          <TableCell> {formatCurrency(transaction.amount)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default TransactionTableItems;
