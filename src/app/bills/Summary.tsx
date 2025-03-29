import { Card, CardContent } from "@/components/ui/card";
import { getCurrUser } from "@/lib/Actions";
import { addDueDate, formatCurrency, getTotal, setBillStatus } from "@/lib/helper";
import { getRecuringBillsAll } from "@/service/apiUser";
import { ReceiptText } from "lucide-react";

async function Summary() {
  const { user } = await getCurrUser();
  const bills = await getRecuringBillsAll(user.id);
  const total = Math.abs(getTotal(bills));
  const transactions = addDueDate(bills);
  const billStatus = setBillStatus(transactions)
  // console.log(billStatus);
  const { paid, upcoming, due } = billStatus;
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
            <li className="flex items-center justify-between py-2">
              <span>paid bills</span>
              {paid.length > 0 && (
                <div className="font-semibold text-gray-900">
                  {paid.length}
                  <span>({formatCurrency(Math.abs(paid.value))})</span>
                </div>
              )}
            </li>
            <li className="flex items-center justify-between py-2">
              <span>Total upcoming</span>
              {upcoming.length > 0 && (
                <div className="font-semibold text-gray-900">
                  {upcoming.length}
                  <span>({formatCurrency(Math.abs(upcoming.value))})</span>
                </div>
              )}
            </li>
            <li className="flex items-center justify-between py-2 text-secondary-red">
              <span>due soon</span>
              {due.length > 0 && (
                <div className="font-semibold">
                  {due.length}
                  <span>({formatCurrency(Math.abs(due.value))})</span>
                </div>
              )}
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default Summary;
