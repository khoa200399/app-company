import { DatePicker, TimePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import moment from "moment";
import { dateFormat } from "../../utils/datetime";

const StyledDiv = styled.div`
  text-align: left;
  .circle {
    height: 8px;
    width: 8px;
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    margin: 0 16px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 16px 0;
  }
  .wrapper span {
    width: 14%;
  }
  .ant-picker-input {
    flex-direction: row-reverse;
  }
  .ant-picker-input input {
    color: black;
    margin-left: 10px;
    font-weight: 400;
  }
  .ant-picker-suffix {
    color: black;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  border: 1px solid #737579;
`;

const StyledTimePicker = styled(TimePicker)`
  border: 1px solid #737579;
`;

interface DateTimePickerProps {
  valueStart: (value: string) => void;
  valueEnd: (value: string) => void;
  defaultStart?: string;
  defaultEnd?: string;
}

const AntdDateTimePicker: React.FC<DateTimePickerProps> = (props) => {
  const [startDate, setStartDate] = useState({ date: "", time: "" });
  const [endDate, setEndDate] = useState({ date: "", time: "" });

  useEffect(() => {
    let defaultStart = JSON.stringify(props.defaultStart).replaceAll(/"/gi, "");
    let defaultEnd = JSON.stringify(props.defaultEnd).replaceAll(/"/gi, "");
    let startDateSplit = defaultStart.split("T");
    let endDateSplit = defaultEnd.split("T");

    setStartDate({
      date: startDateSplit[0],
      time: startDateSplit[1]?.replace(":00.000Z", ""),
    });
    setEndDate({
      date: endDateSplit[0],
      time: endDateSplit[1]?.replace(":00.000Z", ""),
    });
  }, [props.defaultStart, props.defaultEnd]);

  useEffect(() => {
    const valueS: string = startDate.date + "T" + startDate.time + ":00.000Z";
    props.valueStart(valueS);

    const valueE: string = endDate.date + "T" + endDate.time + ":00.000Z";
    props.valueEnd(valueE);
  }, [startDate, endDate]);

  const handleStart = (date: any, dateStr: string, val: any) => {
    if (val === "date") setStartDate({ ...startDate, date: dateStr });
    else setStartDate({ ...startDate, time: dateStr });
  };

  const handleEnd = (date: any, dateStr: string, val: any) => {
    if (val === "date") setEndDate({ ...endDate, date: dateStr });
    else setEndDate({ ...endDate, time: dateStr });
  };

  return (
    <StyledDiv>
      <div className="wrapper">
        <span>Start date:</span>
        <StyledDatePicker
          onChange={(date, dateStr) => handleStart(date, dateStr, "date")}
          format={"YYYY-MM-DD"}
          defaultValue={dateFormat(props.defaultStart, "YYYY-MM-DD")}
        />
        <div className="circle"></div>
        <StyledTimePicker
          onChange={(date, dateStr) => handleStart(date, dateStr, "time")}
          format={"HH:mm"}
          defaultValue={dateFormat(props.defaultStart, "HH:mm")}
        />
      </div>

      <div className="wrapper">
        <span>End date:</span>
        <StyledDatePicker
          onChange={(date, dateStr) => handleEnd(date, dateStr, "date")}
          format={"YYYY-MM-DD"}
          defaultValue={
            props.defaultEnd ? dateFormat(props.defaultEnd, "YYYY-MM-DD") : moment()
          }
        />
        <div className="circle"></div>
        <StyledTimePicker
          onChange={(date, dateStr) => handleEnd(date, dateStr, "time")}
          format={"HH:mm"}
          defaultValue={
            props.defaultEnd ? dateFormat(props.defaultEnd, "HH:mm") : moment()
          }
        />
      </div>
    </StyledDiv>
  );
};

export default AntdDateTimePicker;
