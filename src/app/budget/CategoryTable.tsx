import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TransactionProps {
  id: number;
  name: string;
  created_at: string;
  amount: number;
}
type Props = {
  item: TransactionProps;
};
function CategoryTable({ item }: Props) {
  return (
    <TableRow className="flex items-center justify-between mx-2 text-xs md:text-sm">
      <TableCell className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>BH</AvatarFallback>
        </Avatar>
        {item.name}
      </TableCell>
      <TableCell className="">
        <div>{formatCurrency(item.amount)}</div>
        <span className="text-grey-500 text-xs">
          {formatDateFromTimestamp(item.created_at)}
        </span>
      </TableCell>
    </TableRow>
  );
}

export default CategoryTable;
