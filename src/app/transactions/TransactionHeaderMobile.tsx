import SearchInput from "./SearchInput";
import SortMobile from "./SortMobile";
import FilterMobile from "./FilterMobile";

function TransactionHeaderMobile() {
  return (
    <header className="flex w-full items-center gap-3 sm:justify-between">
      <SearchInput />
      <div className="flex w-1/3 items-center justify-end gap-3">
        <SortMobile />
        <FilterMobile />
      </div>
    </header>
  );
}

export default TransactionHeaderMobile;
