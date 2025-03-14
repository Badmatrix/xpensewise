"use client";
import { CardFooter } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { PAGE_SIZE } from "@/lib/Constant";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

type Props = { pageNum: number; length: number };

export default function BillsFooter({ pageNum, length }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const params = new URLSearchParams(searchParams);
  let curr = Number(params.get("page")) || 1;
  const isFirstPage = curr === 1;
  const isLastPage = curr === pageNum;
  const isSinglePage = PAGE_SIZE >= length;

  async function handleNext() {
    if (isLastPage) return;
    curr++;
    params.set("page", String(curr));
    router.replace(`${pathname}?${params.toString()}`, { scroll: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }

  function handlePrev() {
    if (isFirstPage) return;
    curr--;
    params.set("page", String(curr));
    router.replace(`${pathname}?${params.toString()}`, { scroll: true });
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  }
  return (
    <CardFooter>
      <Pagination>
        <PaginationContent className="flex w-full justify-between">
          {/* Previous Button */}
          <PaginationItem
            onClick={handlePrev}
            className={`scale-90 rounded-md border md:scale-100 ${isFirstPage ? "hidden" : "block"}`}
          >
            <PaginationPrevious className="cursor-pointer" />
          </PaginationItem>
          <PaginationItem
            onClick={handleNext}
            className={`scale-90 rounded-md border md:scale-100 ${isLastPage || isSinglePage ? "hidden" : "block"}`}
          >
            <PaginationNext className="cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </CardFooter>
  );
}
