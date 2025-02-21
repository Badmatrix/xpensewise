import Category from "./Category";
import Sort from "./Sort";
import SearchInput from "./SearchInput";

function TransactionHeader() {
  return (
    <header className="flex w-full gap-3 sm:justify-between md:gap-0 ">
      <SearchInput />
      <div className="flex items-center gap-3">
        <Sort />
        <Category />
      </div>
    </header>
  );
}

export default TransactionHeader;
