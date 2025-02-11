import { PiTipJarLight } from "react-icons/pi";
import { IoMdArrowDropright } from "react-icons/io";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { formatCurrency, getTotal } from "@/lib/helper";
import { getPots } from "@/service/apiUser";
import PotListSummary from "./PotListSummary";
async function PotSummary() {
  const pots = await getPots();
  const savings = getTotal(pots);
  const potsDisplay = pots.slice(0, 4);

  // const savings=getTotal(pots)
  return (
    <Card className="row-span-1 h-fit overflow-hidden border-0 text-grey-900">
      <CardHeader>
        <CardTitle className="flex justify-between capitalize text-grey-900">
          <h3 className="text-lg font-semibold"> pots</h3>
          <button className="flex items-center gap-1 align-middle text-xs font-normal text-grey-500 transition-colors duration-300 ease-linear hover:text-grey-900">
            <Link href="pots" className="">
              see details
            </Link>
            <IoMdArrowDropright className="text-lg" />
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-5 sm:flex-row md:gap-x-10">
        <Card className="flex w-full border-0 bg-beige-100 py-3 capitalize md:w-2/3 lg:w-4/5">
          <div className="flex w-44 items-center gap-2 px-3 align-middle">
            <PiTipJarLight className="text-5xl text-secondary-green" />
            <div className="space-y-2 text-sm">
              <p className="text-xs text-grey-300">total saved</p>
              <h3 className="text-lg font-bold">{formatCurrency(savings)}</h3>
            </div>
          </div>
        </Card>
        <PotListSummary potsDisplay={potsDisplay} />
      </CardContent>
    </Card>
  );
}

export default PotSummary;
