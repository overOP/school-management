import { announcements } from "@/data/annoucementData";
import React from "react";

const Announcements = () => {
  return (
    <div className="p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((event) => (
          <div
            key={event.id}
            className="p-5 rounded-md border-1 border-gray-100 border-t-4 
                        odd:border-t-purple-300 even:border-t-green-300 shadow-sm"
          >
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

export default Announcements;
