"use client";
import { angleData } from "@/data/chartData";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const Performance = () => {
  return (
    <div className="dark:bg-[#171616] p-4 rounded-md h-80 relative">
      <div className="flex items-center justify-between ">
        <h1 className="text-lg font-semibold">Peformance</h1>
        <IoIosMore className="text-2xl" />
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={angleData}
            cx="50%"
            cy="50%"
            innerRadius={70}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold">9.2</h1>
        <p className="text-xs text-gray-400">of 10 max LTS</p>
      </div>
      <h2 className="font-medium absolute bottom-16 left-0 right-0 m-auto text-center">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default Performance;
