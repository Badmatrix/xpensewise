import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrUser } from "@/lib/Actions";
import { formatCurrency } from "@/lib/helper";
import { getRecuringBillsAll } from "@/service/apiUser";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";

async function BillSummary() {
  const { user } = await getCurrUser();
  const bill = await getRecuringBillsAll(user.id);
  // console.log(bill)
  return (
    <Card
      className={`border-0 lg:row-span-2 ${!bill.length ? "hidden" : "block"}`}
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          <h1 className="text-lg font-semibold text-grey-900">
            Recurring bills
          </h1>
          <button className="flex items-center gap-1 align-middle text-xs font-normal text-grey-500 transition-colors duration-300 ease-linear hover:text-grey-900">
            <Link href="bills" className="">
              see details
            </Link>
            <IoMdArrowDropright className="text-lg" />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Card className="flex items-center justify-between border-0 border-l-4 border-l-secondary-green bg-beige-100 p-3 font-semibold capitalize text-grey-900">
          <h1 className="text-sm font-normal text-grey-500">paid bills</h1>
          <h3>{formatCurrency(200)}</h3>
        </Card>
        <Card className="flex items-center justify-between border-0 border-l-4 border-l-secondary-yellow bg-beige-100 p-3 font-semibold capitalize text-grey-900">
          <h1 className="text-sm font-normal text-grey-500">total upcoming</h1>
          <h3>{formatCurrency(300)}</h3>
        </Card>
        <Card className="flex items-center justify-between border-0 border-l-4 border-l-secondary-cyan bg-beige-100 p-3 font-semibold capitalize text-grey-900">
          <h1 className="text-sm font-normal text-grey-500">Due soon</h1>
          <h3>{formatCurrency(500)}</h3>
        </Card>
      </CardContent>
    </Card>
  );
}

export default BillSummary;
