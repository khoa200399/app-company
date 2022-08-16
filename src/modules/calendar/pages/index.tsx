import React from "react";
import Calendar from "./calendar";
import PublicLayout from "../../../components/decorator/public-layout";

function CalendarPage() {
  return (
    <PublicLayout currentPage='calendar'>
      <Calendar />
    </PublicLayout>
  );
}

export default CalendarPage;
