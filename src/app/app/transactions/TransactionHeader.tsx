import { Input } from "@/components/ui/input";
import Category from "./Category";
import Sort from "./Sort";

function TransactionHeader() {
  return (
    <header className="flex w-full gap-3 sm:justify-between md:gap-0">
      <div className="w-1/3">
        <Input
          className="w-full outline-none ring-0 placeholder:text-xs md:w-full"
          placeholder="Search transactions"
        />
      </div>
      <div className="flex items-center gap-3">
        <Sort />
        <Category />
      </div>
    </header>
  );
}

export default TransactionHeader;
