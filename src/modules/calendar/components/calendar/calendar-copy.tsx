import React, { useRef, useState } from "react";
import FullCalendar, {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/react";
import moment from "moment";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setDisplay } from "../../../../redux/displaySlice";
import { Modal } from "antd";
import AntdInput from "../../../../components/input";
import { useFormik } from "formik";
import AntdButton from "../../../../components/button";
import AntdDateTimePicker from "../../../../components/datetimepicker/datetimepicker";
import AntdCheckBox from "../../../../components/checkbox";
import { increaseDate } from "../../../../utils/datetime";

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
  const calendarRef = useRef<FullCalendar>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editEvent, setEditEvent] = useState({
    title: "",
    start: "",
    end: "",
    allDay: false,
  });
  const [selEvent, setSelEvent] = useState({
    title: "",
    start: "",
    end: "",
    allDay: false,
  });
  const [idEventEdit, setIdEventEdit] = useState("");
  const dispatch = useDispatch();
  const displayToggle = useSelector((state) => state);

  const formik = useFormik({
    initialValues: {
      title: "",
      start: "",
      end: "",
    },
    onSubmit: (values: any) => {
      handleEditEvent(idEventEdit, values);
      setIsModalVisible(false);
    },
  });

  const handleEditEvent = (eventId: any, values: any) => {
    const calendarApi = calendarRef.current?.getApi();
    const eventEdit: any = calendarApi?.getEventById(eventId);

    if (values.title === "") eventEdit?.setProp("title", selEvent.title);
    else eventEdit?.setProp("title", values.title);

    console.log(editEvent.start)

    eventEdit.setStart(editEvent.start);
    eventEdit.setEnd(editEvent.end);
    eventEdit.setAllDay(editEvent.allDay);
  };

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    // console.log(selectInfo);
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    let title = prompt("Please enter a new title for your event");
    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: increaseDate(selectInfo.startStr, 3),
        allDay: selectInfo.allDay,
        editable: true,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg | any) => {
    formik.resetForm();
    setIdEventEdit(clickInfo.event.id);
    setIsModalVisible(true);

    console.log(JSON.stringify(clickInfo.event.start));
    

    setSelEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      allDay: clickInfo.event.allDay,
    });

    setEditEvent({
      title: clickInfo.event.title,
      start: clickInfo.event.start,
      end: clickInfo.event.end,
      allDay: clickInfo.event.allDay,
    });

    dispatch(setDisplay({ onDisplay: "true" }));
  };

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <div style={{ background: "transparent" }}>
        <b style={{ marginRight: "5px" }}>
          {eventContent.timeText.toUpperCase()}
        </b>
        <i>{eventContent.event.title}</i>
      </div>
    );
  }

  const handleStart = (dateStr: any) => {
    setEditEvent((prevEdit) => {
      return { ...prevEdit, start: dateStr };
    });
  };
  const handleEnd = (dateStr: any) => {
    setEditEvent((prevEdit) => {
      return { ...prevEdit, end: dateStr };
    });
  };
  const handleAllDay = (e: any) => {
    setEditEvent((prevEdit) => {
      return { ...prevEdit, allDay: e.target.checked };
    });
  };
  const handleDelete = () => {
    const calendarApi = calendarRef.current?.getApi();
    const eventEdit = calendarApi?.getEventById(idEventEdit);
    eventEdit?.remove();
    setIsModalVisible(false);
  };

  return (
    <StyledDiv className="demo-app">
      {/* {this.renderSidebar()} */}
      <div className="demo-app-main">
        <FullCalendar
          ref={calendarRef}
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

      <Modal
        visible={isModalVisible}
        title="Basic Modal"
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
        onCancel={() => setIsModalVisible(false)}
        destroyOnClose={true}
      >
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="title">Event title:</label>
          <AntdInput
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            defaultValue={selEvent.title}
          />
          <AntdDateTimePicker
            defaultStart={selEvent.start}
            defaultEnd={selEvent.end}
            valueEnd={handleEnd}
            valueStart={handleStart}
          />
          <AntdCheckBox
            onChange={handleAllDay}
            defaultChecked={selEvent.allDay}
          >
            All Day Event
          </AntdCheckBox>
          <div>
            <AntdButton
              htmlType="submit"
              type="primary"
              disabled={formik.isSubmitting}
            >
              Save
            </AntdButton>
            <AntdButton
              style={{ marginLeft: "10px" }}
              danger
              type="primary"
              onClick={handleDelete}
            >
              Delete
            </AntdButton>
          </div>
        </form>
      </Modal>
    </StyledDiv>
  );
};

export default CalendarDemoTest;
