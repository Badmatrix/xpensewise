import Summary from "./Summary";
import BillsDisplay from "./BillsDisplay";
import { getCurrUser } from "@/lib/Actions";
import { redirect } from "next/navigation";
type searchParamsProps = {
  sortBy?: string;
  search?: string;
  page?: number;
};
type Props = {
  searchParams: Promise<searchParamsProps>;
};
async function page({ searchParams }: Props) {
  const { user } = await getCurrUser();
  if (!user) redirect("/login");

  const sort = (await searchParams).sortBy || "latest";
  const search = (await searchParams).search || "";
  const page = (await searchParams).page || 1;

  return (
    <div className="my-3 space-y-4 scroll-smooth">
      <h1 className="text-2xl font-bold capitalize">Recurring bills</h1>

      <main className="grid gap-7 md:grid-cols-3">
        <Summary />
        <BillsDisplay sort={sort} search={search} page={page} />
      </main>
    </div>
  );
}

export default page;
