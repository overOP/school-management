import Image from "next/image";
import React from "react";
import { MdBloodtype } from "react-icons/md";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaCodeBranch } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import BigCalendar from "@/components/BigCalender";
import Announcements from "@/components/Announcements";
import Link from "next/link";
import Performance from "@/components/Performance";

const SingleStudent = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        {/* top */}
        <div className="flex flex-col gap-4 xl:flex-row">
          {/* user info card */}
          <div className="bg-sky-200 dark:bg-sky-900 py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3">
              <Image
                src="https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="teacher"
                width={144}
                height={144}
                className="w-36 h-36 object-cover rounded-full"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Pradeep Chaudhary</h1>
              <p className="text-sm text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <MdBloodtype className="w-4 h-4" />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <HiOutlineCalendarDateRange className="w-4 h-4" />
                  <span>December 19</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <IoMdMail className="w-4 h-4" />
                  <span>useer</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <FaPhoneAlt className="w-4 h-4" />
                  <span>9812733452</span>
                </div>
              </div>
            </div>
          </div>
          {/* small cards */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap dark:bg-[#171616]">
            {/* card */}
            <div
              className=" p-4 rounded-md flex gap-4 w-full 
              md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
            >
              <MdOutlinePeopleAlt className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">90%</h1>
                <span className="text-sm text-gray-400">Attendance</span>
              </div>
            </div>
            <div
              className=" p-4 rounded-md flex gap-4 w-full 
              md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
            >
              <FaCodeBranch className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">6th</h1>
                <span className="text-sm text-gray-400">Grade</span>
              </div>
            </div>
            <div
              className=" p-4 rounded-md flex gap-4 w-full 
              md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
            >
              <MdPlayLesson className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">18</h1>
                <span className="text-sm text-gray-400">lessons</span>
              </div>
            </div>
            <div
              className=" p-4 rounded-md flex gap-4 w-full 
              md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
            >
              <SiGoogleclassroom className="w-6 h-6" />
              <div>
                <h1 className="text-xl font-semibold">6A</h1>
                <span className="text-sm text-gray-400">Classe</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="mt-4 dark:bg-[#171616] rounded-md p-4 h-[800px]">
            <h1>Student&apos;s Schedule</h1>
            <BigCalendar />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
      <div className="dark:bg-[#171616] p-4 rounded-md">
        <h1 className="text-xl font-semibold">Shortcuts</h1>
        <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-400">
            <Link className="p-3 rounded-md bg-sky-200" href="/">Student&apos;s Lessons</Link>
            <Link className="p-3 rounded-md bg-purple-200" href="/">Student&apos;s Teachers</Link>
            <Link className="p-3 rounded-md bg-pink-200" href="/">Student&apos;s Exams</Link>
            <Link className="p-3 rounded-md bg-sky-200" href="/">Student&apos;s Assignments</Link>
            <Link className="p-3 rounded-md bg-yellow-200" href="/">Student&apos;s Results</Link>
        </div>
      </div>
      <Performance />
      <Announcements/>
      </div>
    </div>
  );
};

export default SingleStudent;
