import { TableBody, TableRow, TableCell } from "@/components/ui/table";
import { getCurrUser } from "@/lib/Actions";
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
  const {user}=await getCurrUser()
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE - 1;
  const bills = await getRecuringBills(start, end,user.id);
  const sortedBills = getSortedData(bills, sort);
  const searchedBy = ["name", "amount"];
  const searchedBills = getSearchedData(sortedBills, searchedBy, search);

  return (
    <TableBody className="text-xs md:text-sm">
      {searchedBills.map((bill) => (
        <TableRow key={bill.id}>
          <TableCell className="flex items-center gap-5 text-nowrap text-xs font-semibold sm:text-sm">
            <Avatar>
              {/* <AvatarImage src="https://github.com/shadcn.png" /> */}
              <AvatarFallback className="aspect-square rounded-full bg-grey-300/30 px-2 py-3">
                CN
              </AvatarFallback>
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
