"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { category } from "../../lib/nav";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Category() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("categories", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Label className="text-xs capitalize md:text-base">category:</Label>

      <Select onValueChange={(value) => handleFilter(value)}>
        <SelectTrigger className="ring-grey-900 focus:ring-2 lg:w-fit">
          <SelectValue placeholder="Categories" />
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
  );
}

export default Category;
