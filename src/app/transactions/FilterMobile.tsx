"use client";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { category } from "@/lib/nav";
import { FilterIcon} from "lucide-react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

function FilterMobile() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("categories", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <FilterIcon className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] rounded-lg bg-white p-2 shadow-md">
        <div className="flex items-center gap-2">
          <Label className="w-full text-nowrap text-xs capitalize md:text-base lg:w-fit">
            filter by:
          </Label>
          <Select onValueChange={(value) => handleFilter(value)}>
            <SelectTrigger className="text-nowrap ring-grey-900 focus:ring-2 lg:w-fit">
              <SelectValue placeholder="Categories"  />
            </SelectTrigger>
            <SelectContent className="capitalize">
              {category.map((item) => (
                <SelectItem
                  value={item.value}
                  key={item.name}
                  className="capitalize"
                >
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export default FilterMobile;
