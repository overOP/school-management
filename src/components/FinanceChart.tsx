"use client";
import { lineData } from "@/data/chartData";
import React from "react";
import { IoIosMore } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const FinanceChart = () => {
  return (
    <div className="dark:bg-[#171616] rounded-xl  h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">Finance</h1>
        <IoIosMore className="text-2xl" />
      </div>
      {/* chart */}
      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          width={500}
          height={300}
          data={lineData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#d1d5db" }}
            tickMargin={10}
          />
          <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{ fill: "#d1d5db" }} 
          tickMargin={20}
          />
          <Tooltip />
          <Legend
            align="center"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px" }}
          />
          <Line
            type="monotone"
            dataKey="income"
            stroke="#8884d8"
            strokeWidth={5}
          />
          <Line 
          type="monotone" 
          dataKey="expense" 
          stroke="#82ca9d" 
          strokeWidth={5}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FinanceChart;
