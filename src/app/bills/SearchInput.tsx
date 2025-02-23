"use client";
import { Input } from "@/components/ui/input";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  function handleSearch(value: string) {
    const params = new URLSearchParams(searchParams);
    params.set("search", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="w-1/3">
      <Input
        placeholder="search bills"
        className="h-8 w-full cursor-pointer outline-none ring-grey-500 placeholder:text-sm focus:ring-2 md:w-full"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
