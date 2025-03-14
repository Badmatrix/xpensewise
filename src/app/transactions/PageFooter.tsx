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
import { generatePageNumbers } from "@/lib/helper";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { PiGreaterThan, PiLessThan } from "react-icons/pi";

type Props = { pageNum: number; length: number };

function PageFooter({ pageNum, length }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  let curr = Number(params.get("page")) || 1;
  const isFirstPage = curr === 1;
  const isLastPage = curr === pageNum;
  const isSinglePage = PAGE_SIZE >= length;

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
    <CardFooter className={`${isFirstPage ? "hidden" : "block"}`}>
      <Pagination>
        <PaginationContent className="flex w-full justify-between">
          {/* Previous Button */}
          <PaginationItem
            onClick={handlePrev}
            className={`rounded-md border px-1 py-1 ${isFirstPage ? "hidden" : "block"}`}
          >
            <PaginationPrevious className="hidden cursor-pointer sm:flex" />
            <div className="block sm:hidden">
              <PiLessThan />
            </div>
          </PaginationItem>

          <div className="flex gap-1 sm:gap-3">
            {pageNumbers.map((page, index) => (
              <PaginationItem
                key={index}
                className={`${
                  curr === page
                    ? "bg-grey-900 text-grey-100"
                    : "hover:bg-grey-100"
                } rounded-md border px-2 py-1 transition-all duration-300 ease-linear sm:px-3 sm:py-2`}
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
            className={`rounded-md border px-1 py-1 ${isLastPage || isSinglePage ? "hidden" : "block"}`}
          >
            <PaginationNext className="hidden cursor-pointer sm:flex" />
            <div className="block sm:hidden">
              <PiGreaterThan />
            </div>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </CardFooter>
  );
}

export default PageFooter;
