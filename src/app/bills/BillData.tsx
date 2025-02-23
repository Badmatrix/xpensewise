import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { PAGE_SIZE } from "@/lib/Constant";
import {
  formatDateFromTimestamp,
  formatCurrency,
  getSortedData,
  getSearchedData,
} from "@/lib/helper";
import { getRecuringBills } from "@/service/apiUser";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
type Props = { sort: string; search: string; page: number };

async function BillData({ sort, search, page }: Props) {
  
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE - 1;
  const bills = await getRecuringBills(start,end);
  const sortedBills = getSortedData(bills, sort);
  const searchedBy = ["name", "amount"];
  const searchedBills = getSearchedData(sortedBills, searchedBy, search);

  return (
    <TableBody className="text-xs md:text-sm">
      {searchedBills.map((bill) => (
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
