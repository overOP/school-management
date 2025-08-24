"use client";
import { enents } from "@/data/eventData";
import { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { IoIosMore } from "react-icons/io";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const EventCalender = () => {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="  rounded-xl p-4">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between ">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <IoIosMore className="text-2xl" />
      </div>
      <div className="flex flex-col gap-4">
        {enents.map(event => (
            <div key={event.id}
            className="p-5 rounded-md border-1 border-gray-100 border-t-4 
            odd:border-t-sky-300 even:border-t-yellow-300 shadow-sm">
                <div className="flex items-center justify-between">
                <h2 className="font-semibold text-gray-600">{event.title}</h2>
                <p className="text-xs text-gray-300">{event.time}</p>
                </div>
                <p className="text-sm text-gray-400">{event.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalender;
