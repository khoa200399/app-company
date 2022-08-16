import React from "react";
import FullCalendar, {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { DisplayState, setDisplay } from "../../../../redux/displaySlice";

const StyledDiv = styled.div`
  margin: 0 20px;
  .fc-toolbar-title {
    color: white;
  }
  .fc-scrollgrid tbody {
    background: #22262e;
  }
  .fc-col-header-cell-cushion {
    color: #d5d0eb;
  }
  .fc-daygrid-day-number {
    color: #d5d0eb;
  }
  .fc-daygrid-event.fc-event-end {
    color: white;
  }
  .fc .fc-daygrid-day.fc-day-today {
    background: linear-gradient(
      0deg,
      rgba(99, 75, 255, 1) 20%,
      rgba(78, 45, 147, 1) 100%
    );
  }
  .fc-scrollgrid-section th,
  .fc-scrollgrid-section > td,
  .fc-scrollgrid {
    border: none;
  }

  .fc .fc-daygrid-day {
    border: 1.5px solid #3f4144;
  }
  .fc-daygrid-day-frame {
    padding: 10px 30px;
  }
  .fc-scroller-harness {
    border-radius: 80px;
  }
  .fc-scrollgrid-section.fc-scrollgrid-section-body.fc-scrollgrid-section-liquid td:first-child {
    border-radius: 80px;
  }
  .fc-daygrid-day.fc-day.fc-day-mon.fc-day-today  {
    border-radius: 0px !important; 
  }
  td.fc-day-sat, td.fc-day-sun {
    background: #1d1f24;
`;

const CalendarDemoTest: React.FC = () => {
  const dispatch = useDispatch();
  const displayToggle = useSelector(state => state);
  
  const handleDateSelect = (selectInfo: DateSelectArg) => {
    console.log(selectInfo);
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };
  const handleEventClick = (clickInfo: EventClickArg) => {
    console.log(clickInfo.event);

    // if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
    // console.log(clickInfo.event);
    dispatch(setDisplay({'onDisplay':'true'}));
  };

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    );
  }

  return (
    <StyledDiv className="demo-app">
      {/* {this.renderSidebar()} */}
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "title",
            center: "",
            right: "",
          }}
          defaultAllDay
          firstDay={1}
          height="600px"
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          fixedWeekCount={false}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
        />
      </div>
    </StyledDiv>
  );
};

export default CalendarDemoTest;
