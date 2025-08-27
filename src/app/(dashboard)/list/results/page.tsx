import TableSearch from "@/components/TableSearch";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsSortDown } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { resultTableColumns } from "@/data/table";
import { MdDelete } from "react-icons/md";
import { resultsData,role } from "@/lib/data";
import { resultProps } from "@/types/allTableType";
import FormModal from "@/components/FormModal";


const ResultList = () => {
  const renderRow = (item: resultProps) => (
    <tr
      key={item.id}
      className="hover:bg-sky-100 hover:dark:bg-sky-100/20 cursor-pointer
        border-b border-gray-200">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td>{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
            <>
              <FormModal
                table="result"
                type="update"
                data={item}
                icon={<MdModeEdit />}
              />
              <FormModal
                table="result"
                type="delete"
                id={item.id}
                icon={<MdDelete />}
              />
            </>
          )}
        </div>
      </td>
    </tr>
  ); // the join method is used to convert an array into a string
  return (
    <div className="dark:bg-[#171616] p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Results</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
              <HiOutlineAdjustmentsHorizontal />
              <BsSortDown />
              {role === "admin" && (
              <FormModal table="result" type="create" icon={<GoPlus />} />
            )}
            </div>
        </div>
      </div>
      {/* list */}
      <Table
        columns={resultTableColumns}
        renderRow={renderRow}
        data={resultsData}
      />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ResultList;
