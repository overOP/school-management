import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsSortDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { classTableColumns } from "@/data/table";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { classesData, role } from "@/lib/data";
import { classProps } from "@/types/allTableType";

const ClassList = () => {
  const renderRow = (item: classProps) => (
    <tr
      key={item.id}
      className="hover:bg-sky-100 hover:dark:bg-sky-100/20 cursor-pointer
        border-b border-gray-200">
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <Button
              variant="outline"
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
                 bg-sky-200 hover:bg-sky-300
                 dark:bg-gray-400 hover:dark:bg-gray-500 cursor-pointer">
              <MdModeEdit />
            </Button>
          </Link>
          {role === "admin" && (
            <Button
              variant="outline"
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
                           bg-red-200 hover:bg-red-300  
                           dark:bg-red-400 hover:dark:bg-red-500 cursor-pointer"
            >
              <MdDelete />
            </Button>
          )}
        </div>
      </td>
    </tr>
  ); // the join method is used to convert an array into a string
  return (
    <div className="dark:bg-[#171616] p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Classes</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <Button
            variant="outline"
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
                 dark:bg-[#171616] hover:dark:bg-[#171616] cursor-pointer self-end"
          >
            <div className="flex items-center gap-4">
              <HiOutlineAdjustmentsHorizontal />
              <BsSortDown />
              {role === "admin" && <GoPlus />}
            </div>
          </Button>
        </div>
      </div>
      {/* list */}
      <Table
        columns={classTableColumns}
        renderRow={renderRow}
        data={classesData}
      />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ClassList;
