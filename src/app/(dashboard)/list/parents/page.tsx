import TableSearch from "@/components/TableSearch";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsSortDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { parentTableColumns } from "@/data/table";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { parentsData, role } from "@/lib/data";
import { parentProps } from "@/types/allTableType";
import FormModal from "@/components/FormModal";

const ParentList = () => {
  const renderRow = (item: parentProps) => (
    <tr
      key={item.id}
      className="hover:bg-sky-100 hover:dark:bg-sky-100/20 cursor-pointer
        border-b border-gray-200"
    >
      <td className="flex items-center gap-4 p-4">
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.students.join(", ")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal
                table="parent"
                type="update"
                data={item}
                icon={<MdModeEdit />}
              />
              <FormModal
                table="parent"
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
        <h1 className="hidden md:block text-lg font-semibold">All Parents</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <HiOutlineAdjustmentsHorizontal />
            <BsSortDown />
            {role === "admin" && (
              <FormModal table="parent" type="create" icon={<GoPlus />} />
            )}
          </div>
        </div>
      </div>
      {/* list */}
      <Table
        columns={parentTableColumns}
        renderRow={renderRow}
        data={parentsData}
      />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default ParentList;
