import React from "react";
import { CiSearch } from "react-icons/ci";
import { LuMessageCircleMore } from "react-icons/lu";
import { GrAnnounce } from "react-icons/gr";
import { RxAvatar } from "react-icons/rx";
import { Input } from "../ui/input";
import ModeToggle from "../ModeToggle";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* search ber */}
      <div
        className="hidden md:flex items-center gap-4 border-1 px-2 rounded-full
        shadow-sm"
      >
        <CiSearch className="text-2xl" />
        <Input
          type="text"
          placeholder="Search..."
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
        />
      </div>
      {/* icons and user */}
      <div className="flex items-center gap-6 justify-end w-full">
        <ModeToggle />
        <LuMessageCircleMore className="text-2xl cursor-pointer" />
        <div className="relative">
          <GrAnnounce className="text-2xl cursor-pointer" />
          <div
            className="absolute -top-1 -right-3 w-5 h-5 flex items-center justify-center
        bg-purple-500 rounded-full text-white text-sm"
          >
            1
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm leading-3 font-medium">Pradeep Chaudhary</h2>
          <p className="text-[10px] text-gray-500 text-right">Admin</p>
        </div>
        <RxAvatar className="text-2xl" />
      </div>
    </div>
  );
};

export default NavBar;
