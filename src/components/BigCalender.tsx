"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

export default function BigCalendar() {
    const [view, setView] = useState<View>(Views.WORK_WEEK); 
    //<View> is compatible with typescript for react-big-calendar 
    const handleViewChange = (view: View) => { setView(view); }
  return (
    <div className="h-full">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        defaultView={Views.WORK_WEEK}
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleViewChange}
        defaultDate={new Date(2024, 7, 12)}       
        min={new Date(1970, 0, 1, 8, 0, 0)}        
        max={new Date(1970, 0, 1, 17, 0, 0)}
        scrollToTime={new Date(1970, 0, 1, 8, 0, 0)}  
        popup
        style={{ height: "98%" }}
      />
    </div>
  );
}
