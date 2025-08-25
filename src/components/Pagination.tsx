import React from "react";
import { Button } from "./ui/button";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between p-4 text-gray-500">
      <Button
        disabled
        className="py-2 px-4 rounded-md bg-slate-200 text-black text-xs font-semibold 
        disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </Button>
      <div className="flex items-center gap-2 text-sm">
        <Button variant="outline" 
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
        px-2 rounded-2xl text-sky-600">1</Button>
        <Button variant="outline" 
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
        px-2 rounded-2xl ">2</Button>
        <Button variant="outline" 
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
        px-2 rounded-2xl ">3</Button>
        ...
        <Button variant="outline" 
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
        px-2 rounded-2xl ">10</Button>
      </div>
      <Button
        className="py-2 px-4 rounded-md bg-slate-200 text-black
        hover:bg-slate-300 text-xs font-semibold 
        disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </Button>
    </div>
  );
};

export default Pagination;
