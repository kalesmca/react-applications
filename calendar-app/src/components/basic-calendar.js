import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export default function BasicCalendarComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <div>
      <Calendar onChange={setCurrentDate} value={currentDate} />
    </div>
  );
}

