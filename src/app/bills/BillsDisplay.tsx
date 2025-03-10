import { Card } from "@/components/ui/card";
import BillTable from "./BillTable";
import Sort from "./Sort";
import SearchInput from "./SearchInput";

import BillsFooter from "./BillsFooter";
type Props = { sort: string; search: string; page: number; pageNum: number };
function BillsDisplay({ sort, search, page, pageNum }: Props) {
  return (
    <div className="md:col-span-2">
      <Card className="space-y-7 border-0 px-3 py-5">
        <header className="flex items-center justify-between">
          <SearchInput />
          <Sort />
        </header>
        <BillTable sort={sort} search={search} page={page} />
        <BillsFooter pageNum={pageNum} />
      </Card>
    </div>
  );
}

export default BillsDisplay;
