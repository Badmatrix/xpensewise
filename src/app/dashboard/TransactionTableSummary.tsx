// import { AvatarImage } from "@/components/ui/avatar";
import { CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { formatCurrency, formatDateFromTimestamp } from "@/lib/helper";
import { Transaction } from "@/types/types";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

type Props = { data: Transaction[] };

function TransactionTableSummary({ data }: Props) {
  const display = data.splice(0, 10);
  return (
    <CardContent>
      <Table>
        <TableBody>
          {display.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="flex items-center gap-2 text-xs sm:text-sm md:gap-5 md:text-base">
                <Avatar>
                  {/* <AvatarImage src={item.avatar} /> */}
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                {item.name}
              </TableCell>
              <TableCell className="text-xs">
                <span
                  className={`${item.amount > 0 ? "text-secondary-green" : "text-secondary-red"}`}
                >
                  {formatCurrency(item.amount)}
                </span>
                <div className="text-grey-300">
                  {formatDateFromTimestamp(item.created_at)}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardContent>
  );
}

export default TransactionTableSummary;
