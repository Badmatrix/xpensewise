export const runtime = "nodejs";
import { Card, CardContent } from "@/components/ui/card";
import { Suspense } from "react";
import TransactionHeader from "./TransactionHeader";
import TransactionTable from "./TransactionTable";
import TableLoading from "./TableLoading";
import Header from "./Header";
import PageFooter from "./PageFooter";
import { getAllTransactions } from "@/service/apiUser";
import { PAGE_SIZE } from "@/lib/Constant";

type searchParamsProps = {
  sortBy?: string;
  categories?: string;
  search?: string;
  page?: number;
};
type Props = {
  searchParams: Promise<searchParamsProps>;
};
async function page({ searchParams }: Props) {
  const filter = (await searchParams)?.categories || "all-transactions";
  const sort = (await searchParams)?.sortBy || "latest";
  const search = (await searchParams)?.search || "";
  const page = (await searchParams)?.page || 1;

  const length = (await getAllTransactions()).length;
  const pageNum = Math.ceil(length / PAGE_SIZE);

  return (
    <div className="w-full space-y-4 overflow-x-hidden">
      <Header />

      <Card className="hidden w-full space-y-4 border-0 px-3 py-5 shadow-sm sm:block md:p-5">
        <TransactionHeader />
        <CardContent className="p-0">
          <Suspense fallback={<TableLoading />} key={filter || sort}>
            <TransactionTable
              filter={filter}
              sort={sort}
              search={search}
              page={page}
            />
          </Suspense>
        </CardContent>
        <PageFooter pageNum={pageNum} />
      </Card>
    </div>
  );
}

export default page;
