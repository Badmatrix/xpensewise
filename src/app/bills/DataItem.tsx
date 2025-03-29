import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableRow, TableCell } from "@/components/ui/table";
import { formatDayFromTimestamp, formatCurrency } from "@/lib/helper";
import { Transaction } from "@/types/types";
import { addMonths, differenceInDays } from "date-fns";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiWarningCircleFill } from "react-icons/pi";

type Props = { bill: Transaction };

export default function DataItem({ bill }: Props) {
  const today = new Date();

  const nextDueDate = addMonths(bill.created_at, 1); // Add 1 month for the next due date
  const daysRemaining = differenceInDays(nextDueDate, today);

  let billsStatus;
  if (daysRemaining < 5) billsStatus = "due";
  if (daysRemaining > 5 && daysRemaining < 15) billsStatus = "upcoming";
  if (daysRemaining >= 15 && daysRemaining <= 30) billsStatus = "paid";
  return (
    <TableRow>
      <TableCell className="flex items-center gap-5 text-nowrap text-xs font-semibold sm:text-sm">
        <Avatar>
          <AvatarImage src={bill.avatar} className="rounded-full" />
          <AvatarFallback className="aspect-square rounded-full bg-grey-300/30 px-2 py-3">
            CN
          </AvatarFallback>
        </Avatar>
        <span className="capitalize">{bill.name}</span>
      </TableCell>

      <TableCell
        className={` ${billsStatus === "due" ? "text-secondary-red" : billsStatus === "paid" ? "text-secondary-green" : "text-grey-500"}`}
      >
        <span className="flex items-center gap-2">
          Monthly-{formatDayFromTimestamp(bill.created_at)}
          {billsStatus === "paid" ? (
            <IoIosCheckmarkCircle className="text-secondary-green text-lg" />
          ) : billsStatus === "due" ? (
            <PiWarningCircleFill className="text-secondary-red text-lg" />
          ) : (
            ""
          )}
        </span>
      </TableCell>
      <TableCell className="text-sm font-semibold">
        {" "}
        {formatCurrency(Math.abs(bill.amount))}
      </TableCell>
    </TableRow>
  );
}
