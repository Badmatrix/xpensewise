import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Suspense } from "react";
import TransactionHeader from "./TransactionHeader";
import TransactionTable from "./TransactionTable";
import TableLoading from "./TableLoading";

function page() {
  return (
    <div className="w-full space-y-4">
      <h1 className="text-2xl font-bold capitalize">transactions</h1>
      <Card className="hidden w-full space-y-4 border-0 px-3 py-5 shadow-sm sm:block md:p-5">
        <TransactionHeader />
        <CardContent className="p-0">
          <Suspense fallback={<TableLoading />}>
            <TransactionTable />
          </Suspense>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
}

export default page;
