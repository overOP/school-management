import React from 'react'
import { Input } from './ui/input'
import { CiSearch } from "react-icons/ci";

const TableSearch = () => {
  return (
         <div
           className="w-full md:w-auto flex items-center gap-4 border-1 px-2 rounded-full
           shadow-sm"
         >
           <CiSearch className="text-2xl" />
           <Input
             type="text"
             placeholder="Search..."
             className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-[#171616]"
           />
         </div>
  )
}

export default TableSearch