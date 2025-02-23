import Link from "next/link";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { IoMdArrowDropright } from "react-icons/io";
import TransactionTableSummary from "./TransactionTableSummary";
import { getAllTransactions} from "@/service/apiUser";

async function TransactionSummary() {
  const data = await getAllTransactions();

  return (
    <Card
      className={`border-0 lg:row-span-3 ${!data.length ? "hidden" : "block"}`}
    >
      <CardHeader>
        <CardTitle className="flex justify-between capitalize text-grey-900">
          <h3 className="text-lg font-semibold"> transactions</h3>
          <button className="flex items-center gap-1 align-middle text-xs font-normal text-grey-500 transition-colors duration-300 ease-linear hover:text-grey-900">
            <Link href="transactions" className="">
              view all
            </Link>
            <IoMdArrowDropright className="text-lg" />
          </button>
        </CardTitle>
      </CardHeader>
      <TransactionTableSummary data={data} />
    </Card>
  );
}

export default TransactionSummary;
