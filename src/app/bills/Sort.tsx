"use client";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sorts } from "@/lib/nav";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

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
      <Label className="w-full text-nowrap text-xs capitalize md:text-base lg:w-fit">
        sort by:
      </Label>
      <Select onValueChange={(value) => handleSort(value)}>
        <SelectTrigger className="w-fit text-nowrap ring-grey-900 focus:ring-2">
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
