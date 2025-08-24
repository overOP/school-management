import React from "react";
import { IoIosMore } from "react-icons/io";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-purple-200 even:bg-yellow-200 p-4 flex-1 min-w-[130px]">
      <div className="flex justify-between items-center">
        <span className="text-[10px] rounded-full py-1 px-2 bg-white text-green-600">
          2025/24
        </span>
        <IoIosMore className="text-2xl text-black" />
      </div>
      <h1 className="text-2xl font-semibold my-4 text-black">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-gray-500">{type}</h2>
    </div>
  );
};

export default UserCard;
