import { TableRow, TableCell } from "@/components/ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Transaction } from "@/types/types";


type Props = {
  item: Transaction;
};
function CategoryTable({ item }: Props) {
  return (
    <TableRow className="mx-2 flex items-center justify-between text-xs md:text-sm">
      <TableCell className="flex items-center gap-2">
        <Avatar>
          <AvatarFallback>BH</AvatarFallback>
          <AvatarImage className="rounded-full" src={ item.avatar} />
        </Avatar>
        <span className="capitalize">{item.name}</span>
      </TableCell>
      <TableCell>
        <div>{formatCurrency(item.amount)}</div>
        <span className="text-xs text-grey-500">
          {formatDateFromTimestamp(item.created_at)}
        </span>
      </TableCell>
    </TableRow>
  );
}

export default CategoryTable;
