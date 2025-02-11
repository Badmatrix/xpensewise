import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import TransactionTableSummary from "./TransactionTableSummary";

function TransactionSummary() {
  return (
    <Card className=" border-0 lg:row-span-4">
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
      <TransactionTableSummary/>
    </Card>
  );
}

export default TransactionSummary