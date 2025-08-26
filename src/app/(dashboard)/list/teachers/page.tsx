import TableSearch from "@/components/TableSearch";
import { Button } from "@/components/ui/button";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BsSortDown } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import React from "react";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import { teacherTableColumns } from "@/data/table";
import Image from "next/image";
import Link from "next/link";
import { GrView } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { role, teachersData } from "@/lib/data";
import { teacherProps } from "@/types/allTableType";
import FormModal from "@/components/FormModal";

const TeacherList = () => {
  const renderRow = (item: teacherProps) => (
    <tr
      key={item.id}
      className="hover:bg-sky-100 hover:dark:bg-sky-100/20 cursor-pointer
        border-b border-gray-200">
      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt={item.name}
          width={50}
          height={50}
          className="md:hidden xl:block w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.teacherId}</td>
      <td className="hidden md:table-cell">{item.subjects.join(", ")}</td>
      <td className="hidden md:table-cell">{item.classes.join(", ")}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <Button
              variant="outline"
              className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              <GrView />
            </Button>
          </Link>
          {role === "admin" && 
              <FormModal table="teacher" type="delete" id={item.id} icon={<MdDelete />} />
          }
        </div>
      </td>
    </tr>
  ); // the join method is used to convert an array into a string
  return (
    <div className="dark:bg-[#171616] p-4 rounded-md flex-1 m-4 mt-0">
      {/* top */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
          <TableSearch />
            <div className="flex items-center gap-4 self-end">
              <HiOutlineAdjustmentsHorizontal />
              <BsSortDown />
              {role === "admin" && 
              <FormModal table="teacher" type="create" icon={<GoPlus />}/>}
            </div>
        </div>
      </div>
      {/* list */}
      <Table
        columns={teacherTableColumns}
        renderRow={renderRow}
        data={teachersData}
      />
      {/* pagination */}
      <Pagination />
    </div>
  );
};

export default TeacherList;
