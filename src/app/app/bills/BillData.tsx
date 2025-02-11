import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { formatDateFromTimestamp, formatCurrency } from "@/lib/helper";
import { getRecuringBills } from "@/service/apiUser";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

async function BillData() {
  const bills = await getRecuringBills();

  return (
    <TableBody className="text-xs md:text-sm">
      {bills.map((bill) => (
        <TableRow key={bill.id}>
          <TableCell className="flex items-center gap-5">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {bill.name}
          </TableCell>

          <TableCell>
            {formatDateFromTimestamp(bill.created_at)} change later
          </TableCell>
          <TableCell> {formatCurrency(bill.amount)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
}

export default BillData;
