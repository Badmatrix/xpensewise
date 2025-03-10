"use client"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sorts } from "@/lib/nav";
import { SortDescIcon } from "lucide-react";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";

function SortMobile() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleSort(sort: string) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", sort);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <SortDescIcon className="h-5 w-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] rounded-lg bg-white p-2 shadow-md">
        <div className="flex items-center gap-2">
          <Label className="w-full text-xs capitalize md:text-base lg:w-fit">
            sort by:
          </Label>
          <Select onValueChange={(value) => handleSort(value)}>
            <SelectTrigger className="w-full text-nowrap ring-grey-900 focus:ring-2">
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
      </PopoverContent>
    </Popover>
  );
}

export default SortMobile;
