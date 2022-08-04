import { DatePicker, TimePicker, Space } from "antd";
import type { Moment } from "moment";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  text-align: left;
  margin: 16px 40px;
  .circle {
    height: 8px;
    width: 8px;
    background-color: white;
    border-radius: 50%;
    display: inline-block;
    margin: 0 16px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 16px 0;
  }
  .ant-picker-input {
    flex-direction: row-reverse;
  }
  .ant-picker-input input {
    color: white;
    margin-left: 10px;
    font-weight: 400;
  }
  .ant-picker-suffix {
    color: white;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  border-radius: 10px;
  background: #1a1c20;
  border: 1px solid #737579;
`;

const StyledTimePicker = styled(TimePicker)`
  border-radius: 10px;
  background: #1a1c20;
  border: 1px solid #737579;
`;

const AntdDateTimePicker: React.FC = () => (
  <StyledDiv>
    <div className="wrapper">
      <StyledDatePicker format={"DD MMMM"} />
      <div className="circle">-</div>
      <StyledTimePicker use12Hours={true} format={"HH:mm A"} />
    </div>

    <div className="wrapper">
      <StyledDatePicker format={"DD MMMM"} />
      <div className="circle">-</div>
      <StyledTimePicker use12Hours={true} format={"HH:mm A"} />
    </div>
  </StyledDiv>
);

export default AntdDateTimePicker;
