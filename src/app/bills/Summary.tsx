import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency, getTotal } from "@/lib/helper";
import { getRecuringBillsAll } from "@/service/apiUser";
import { ReceiptText } from "lucide-react";

async function Summary() {
  const bills = await getRecuringBillsAll();
  const total = Math.abs(getTotal(bills));
  return (
    <div className="col-span-1 space-y-5">
      <Card className="bg-grey-900 text-white">
        <CardContent className="mt-5 space-y-7">
          <ReceiptText className="text-white" size={40} />
          <div className="capitalize">
            <p className="text-sm">total bills</p>
            <h3 className="text-xl font-bold">{formatCurrency(total)}</h3>
          </div>
        </CardContent>
      </Card>
      <Card className="space-y-4 border-0 p-3">
        <h1 className="font-semibold capitalize">summary</h1>
        <div>
          <ul className="divide-y divide-grey-100 text-sm capitalize text-grey-300">
            <li className="py-2">paid bills</li>
            <li className="py-2">Total upcoming</li>
            <li className="py-2 text-secondary-red">due soon</li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default Summary;
