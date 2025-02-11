import Summary from "./Summary";
import BillsDisplay from "./BillsDisplay";
import { Suspense } from "react";
import Loading from "./Loading";

async function page() {
  return (
    <div className="my-3 space-y-4">
      <h1 className="text-2xl font-bold capitalize">Recurring bills</h1>
      <Suspense fallback={<Loading />}>
        <main className="grid gap-7 md:grid-cols-3">
          <Summary />
          <BillsDisplay />
        </main>
      </Suspense>
    </div>
  );
}

export default page;
