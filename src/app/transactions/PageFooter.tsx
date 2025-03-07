"use client";
import { CardFooter } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { generatePageNumbers } from "@/lib/helper";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
type Props = { pageNum: number };

function PageFooter({ pageNum }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  let curr = Number(params.get("page")) || 1;
  const isFirstPage = curr === 1;
  const isLastPage = curr === pageNum;

  function handleNext() {
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

  const pageNumbers = generatePageNumbers(curr, pageNum);
  return (
    <CardFooter>
      <Pagination className="">
        <PaginationContent className="flex w-full justify-between">
          {/* Previous Button */}
          <PaginationItem
            onClick={handlePrev}
            className={`rounded-md border ${isFirstPage ? "hidden" : "block"}`}
          >
            <PaginationPrevious className="cursor-pointer" />
          </PaginationItem>

          <div className="flex gap-3">
            {pageNumbers.map((page, index) => (
              <PaginationItem
                key={index}
                className={`${
                  curr === page
                    ? "bg-grey-900 text-grey-100"
                    : "hover:bg-grey-100"
                } rounded-md border px-3 py-2 transition-all duration-300 ease-linear`}
              >
                <Link
                  href={`transactions?page=${page}`}
                  className="aspect-square cursor-pointer"
                >
                  {page}
                </Link>
              </PaginationItem>
            ))}
          </div>

          {/* Next Button */}
          <PaginationItem
            onClick={handleNext}
            className={`rounded-md border ${isLastPage ? "hidden" : "block"}`}
          >
            <PaginationNext className="cursor-pointer" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </CardFooter>
  );
}

export default PageFooter;
