import { Card } from "@/components/ui/card";
import BillTable from "./BillTable";
import Sort from "./Sort";
import SearchInput from "./SearchInput";

import BillsFooter from "./BillsFooter";
import { getCurrUser } from "@/lib/Actions";
import { PAGE_SIZE } from "@/lib/Constant";
import { getRecuringBillsAll } from "@/service/apiUser";
import EmptyBills from "./EmptyBills";
import { Suspense } from "react";
import TableLoading from "../transactions/TableLoading";
type Props = { sort: string; search: string; page: number };
async function BillsDisplay({ sort, search, page }: Props) {
  const { user } = await getCurrUser();
  const data = await getRecuringBillsAll(user.id);
  const length = data.length;
  const pageNum = Math.ceil(length / PAGE_SIZE);
 
  return (
    <div className="md:col-span-2">
      {!length ? (
        <EmptyBills />
      ) : (
        <Card className="space-y-7 border-0 px-3 py-5">
          <header className="flex items-center justify-between">
            <SearchInput />
            <Sort />
          </header>
          <Suspense fallback={<TableLoading />} key={sort + page}>
            <BillTable sort={sort} search={search} page={page} />
          </Suspense>

          <BillsFooter pageNum={pageNum} length={length} />
        </Card>
      )}
    </div>
  );
}

export default BillsDisplay;
