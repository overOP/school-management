"use client";
import { barData } from "@/data/chartData";
import React from "react";
import { IoIosMore } from "react-icons/io";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const AttendanceChart = () => {
  return (
    <div className="dark:bg-[#171616] rounded-xl  h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <IoIosMore className="text-2xl" />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={barData} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd"/>
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: "#d1d5db"}}/>
          <YAxis axisLine={false} tickLine={false} tick={{fill: "#d1d5db"}}/>
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "#d1d5db"}}/>
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar
            dataKey="present"
            fill="#8884d8"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#82ca9d"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
