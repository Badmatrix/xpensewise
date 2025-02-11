import { Suspense } from "react";
import PotsHeader from "./PotsHeader";
import PotsData from "./PotsData";
import Loading from "./Loading";

function page() {
  return (
    <div>
      <PotsHeader />

      <Suspense fallback={<Loading />}>
        <PotsData />
      </Suspense>
    </div>
  );
}

export default page;
