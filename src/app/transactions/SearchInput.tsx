"use client";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react"; // Lucide icons
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
    <div className="relative w-1/3">
      <Input
        className="w-full cursor-pointer pr-10 outline-none placeholder:text-xs focus:ring-1 focus:ring-grey-900"
        placeholder="Search transactions"
        onChange={(e) => handleSearch(e.target.value)}
      />
      <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
    </div>
  );
}
