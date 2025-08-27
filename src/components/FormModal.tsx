"use client";
import { formProps } from "@/types/formType";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { IoIosClose } from "react-icons/io";
import dynamic from "next/dynamic";

// dynamic form
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), {
    loading: () => <p>Loading...</p>,
});
const StudentForm = dynamic(() => import("./forms/StudentForm"), {
    loading: () => <p>Loading...</p>,
});

const forms : {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

const FormModal = ({ table, type, data, id, icon }: formProps) => {
  const [open, setOpen] = useState(false);
  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="p-4 flex flex-col gap-4 ">
        <span className="text-center font-medium dark:text-black">
          All data will be deleted. Are you sure you want to delete this {table}
          ?
        </span>
        <Button className="bg-red-600 text-white py-2 px-4 rounded-md border-0 w-max self-center">
          Delete
        </Button>
      </form>
    ) : type === "create" || type === "update" ? (
      <div className="text-black">
        {forms[table](type, data)}
      </div>
    ) : <div className="text-black">form not found</div>;
  };
  return (
    <>
      <Button
        variant="outline"
        className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0
    dark:bg-[#171616] hover:dark:bg-[#171616] cursor-pointer self-end"
        onClick={() => setOpen(true)}
      >
        {icon}
      </Button>
      {open && (
        <div className="w-screen h-screen absolute left-0 top-0 bg-black/60 z-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md relative w-[90%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]">
            <Form />
            <div
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <IoIosClose className="text-2xl dark:text-black" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
