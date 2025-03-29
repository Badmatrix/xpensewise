import { TableBody } from "@/components/ui/table";
import { getCurrUser } from "@/lib/Actions";
import { PAGE_SIZE } from "@/lib/Constant";
import { getSortedData, getSearchedData } from "@/lib/helper";
import { getRecuringBills } from "@/service/apiUser";
import DataItem from "./DataItem";
type Props = { sort: string; search: string; page: number };

async function BillData({ sort, search, page }: Props) {
  const { user } = await getCurrUser();
  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE - 1;
  const bills = await getRecuringBills(start, end, user.id);
  const sortedBills = getSortedData(bills, sort);
  const searchedBy = ["name", "amount"];
  const searchedBills = getSearchedData(sortedBills, searchedBy, search);

  return (
    <TableBody className="text-xs md:text-sm">
      {searchedBills.map((bill) => (
        <DataItem bill={bill} key={bill.id} />
      ))}
    </TableBody>
  );
}

export default BillData;
