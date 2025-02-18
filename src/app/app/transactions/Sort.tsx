"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sorts } from "../nav";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Sort() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleSort(sort: string) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", sort);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Label className="w-full text-xs capitalize md:text-base lg:w-fit">
        sort by:
      </Label>
      <Select onValueChange={(value) => handleSort(value)}>
        <SelectTrigger className="ring-grey-900 focus:ring-2 lg:w-[100px]">
          <SelectValue placeholder="Latest" />
        </SelectTrigger>
        <SelectContent className="text-sm capitalize md:text-base">
          {sorts.map((sort) => (
            <SelectItem value={sort.value} key={sort.name}>
              {sort.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

export default Sort;
