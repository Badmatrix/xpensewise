export const runtime = "nodejs";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Suspense } from "react";
import TransactionHeader from "./TransactionHeader";
import TransactionTable from "./TransactionTable";
import TableLoading from "./TableLoading";
import Header from "./Header";

type searchParamsProps = {
  sortBy?: string;
  categories?: string;
  search?: string;
};
type Props = {
  searchParams: Promise<searchParamsProps>;
};
async function page({ searchParams }: Props) {
  const filter = (await searchParams)?.categories || "all-transactions";
  const sort = (await searchParams)?.sortBy || "latest";
  const search = (await searchParams)?.search || "";



  return (
    <div className="w-full space-y-4">
      <Header />

      <Card className="hidden w-full space-y-4 border-0 px-3 py-5 shadow-sm sm:block md:p-5">
        <TransactionHeader />
        <CardContent className="p-0">
          <Suspense fallback={<TableLoading />} key={filter || sort}>
            <TransactionTable filter={filter} sort={sort} search={search} />
          </Suspense>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default page;
