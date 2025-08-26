import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsSortDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { subjectTableColumns } from "@/data/table";
import Link from "next/link";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { role, subjectsData} from "@/lib/data";
import { subjectProps } from "@/types/allTableType";
import FormModal from "@/components/FormModal";

const SubjectList = () => {
  const renderRow = (item: subjectProps) => (
    <tr
      key={item.id}
      className="hover:bg-sky-100 hover:dark:bg-sky-100/20 cursor-pointer
        border-b border-gray-200"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td>
      <td>
        <div className="flex items-center gap-2">
        {role === "admin" && (
            <>
              <FormModal
                table="subject"
                type="update"
                data={item}
                icon={<MdModeEdit />}
              />
              <FormModal
                table="subject"
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
        <h1 className="hidden md:block text-lg font-semibold">All Subjects</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <HiOutlineAdjustmentsHorizontal />
              <BsSortDown />
              {role === "admin" && (
              <FormModal table="subject" type="create" icon={<GoPlus />} />
            )}
            </div>
        </div>
      </div>
      {/* list */}
      <Table
        columns={subjectTableColumns}
        renderRow={renderRow}
        data={subjectsData}
      />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default SubjectList;
