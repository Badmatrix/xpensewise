import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Suspense } from "react";
import TransactionHeader from "./TransactionHeader";
import TransactionTable from "./TransactionTable";
import TableLoading from "./TableLoading";
import { Button } from "@/components/ui/button";
import Header from "./Header";
import { getTransactions } from "@/service/apiUser";
import EmptyTransactions from "./EmptyTransactions";

async function page({
  searchParams,
}: {
  searchParams: { sortBy?: string; categories?: string; search?: string };
}) {
  const transactions = await getTransactions();

  const filter = searchParams?.categories || "all-transactions";
  const sort = searchParams?.sortBy || "latest";
  const search = searchParams?.search || "";

  return (
    <div className="w-full space-y-4">
      <Header />
      {!transactions.length ? (
        <EmptyTransactions />
      ) : (
        <Card className="hidden w-full space-y-4 border-0 px-3 py-5 shadow-sm sm:block md:p-5">
          <TransactionHeader />
          <CardContent className="p-0">
            <Suspense fallback={<TableLoading />} key={filter || sort}>
              <TransactionTable filter={filter} sort={sort} search={search} />
            </Suspense>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      )}
    </div>
  );
}

export default page;
