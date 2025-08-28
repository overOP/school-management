"use client";
import React from "react";
import { Button } from "./ui/button";
import { paginationProps } from "@/types/paginationType";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { useRouter } from "next/navigation";

const Pagination = ({ page, count }: paginationProps) => {
  const router = useRouter();
  const hasPrev = ITEM_PER_PAGE * (page - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (page - 1) + ITEM_PER_PAGE < count;
  const changePage = (newPage: number) => {
    const params = new URLSearchParams(window.location.search);
    params.set("page", newPage.toString());
    router.push(`${window.location.pathname}?${params}`);
  };
  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <Button
        disabled = {!hasPrev}
        className="py-2 px-4 rounded-md bg-slate-200 text-black text-xs font-semibold 
        disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-300"
        onClick={() => {
          changePage(page - 1);
        }}
      >
        Prev
      </Button>
      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: Math.ceil(count / ITEM_PER_PAGE) }, (_, i) => {
          const pageIndex = i + 1;
          return (
            <Button
              key={pageIndex}
              variant="outline"
              className={`border-0 focus-visible:ring-0 focus-visible:ring-offset-0
              px-2 rounded-2xl ${page === pageIndex ? "text-sky-600" : ""}`}
              onClick={() => {
                changePage(pageIndex);
              }}
            >
              {pageIndex}
            </Button>
          );
        })}
      </div>
      <Button
        disabled={!hasNext}
        className="py-2 px-4 rounded-md bg-slate-200 text-black
        hover:bg-slate-300 text-xs font-semibold 
        disabled:opacity-50 disabled:cursor-not-allowed"
        onClick={() => {
          changePage(page + 1);
        }}
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
