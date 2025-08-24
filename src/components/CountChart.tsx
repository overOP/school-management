"use client";

import { radialbarData } from "@/data/chartData";
import React from "react";
import { IoIosMore } from "react-icons/io";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MdBoy, MdGirl } from "react-icons/md";

const CountChart = () => {
  return (
    <div className="dark:bg-[#171616] rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold">Students</h1>
        <IoIosMore className="text-2xl" />
      </div>
      {/* chart */}
      <div className="w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="40%"
            outerRadius="100%"
            barSize={32}
            data={radialbarData}
          >
            <RadialBar
              background
              dataKey="count"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
            />
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
      {/* bottom */}
      <div className="flex items-center justify-center gap-16">
        <div className="flex flex-col items-center gap-1">
          <MdBoy className="text-3xl text-blue-500" />
          <h2 className="font-bold ">1,243</h2>
          <h2 className="text-sm text-gray-500">Boys (55%)</h2>
        </div>
        <div className="flex flex-col items-center gap-1">
          <MdGirl className="text-3xl text-pink-500" />
          <h2 className="font-bold">1,043</h2>
          <h2 className="text-sm text-gray-500">Girls (45%)</h2>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
