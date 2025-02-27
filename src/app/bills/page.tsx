import Summary from "./Summary";
import BillsDisplay from "./BillsDisplay";
import { Suspense } from "react";
import Loading from "./Loading";
import { getRecuringBillsAll } from "@/service/apiUser";
import { PAGE_SIZE } from "@/lib/Constant";
type searchParamsProps = {
  sortBy?: string;
  search?: string;
  page?: number;
};
type Props = {
  searchParams: Promise<searchParamsProps>;
};
async function page({ searchParams }: Props) {
  const sort = (await searchParams).sortBy || "latest";
  const search = (await searchParams).search || "";
  const page = (await searchParams).page || 1;
  const data = await getRecuringBillsAll();
  const pageNum = Math.ceil(data.length / PAGE_SIZE);

  return (
    <div className="my-3 space-y-4">
      <h1 className="text-2xl font-bold capitalize">Recurring bills</h1>
      <Suspense fallback={<Loading />}>
        <main className="grid gap-7 md:grid-cols-3">
          <Summary />
          <BillsDisplay
            sort={sort}
            search={search}
            page={page}
            pageNum={pageNum}
          />
        </main>
      </Suspense>
    </div>
  );
}

export default page;
