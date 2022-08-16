import React, { useEffect } from "react";
import NewCalendar from "../container/calendar/calendar";
import PostScheduler from "../container/postScheduler/postCheduler";
import User from "../container/users/users";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";
import AntdContent from "../../../components/content";
import PostSettingTest from "../container/postSetting/postSetting-copy";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/displaySlice";

const StyledDiv = styled.div`
  padding: 0 20px;
  min-height: 100vh;
  background: #1a1c20;
  border-radius: 80px 0 0 80px;
`;

const StyledLayout = styled(Layout)`
  background: #151419;
`;

const Calendar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage({ currentPage: "calendar" }));
  });

  return (
    <StyledLayout hasSider>
      <AntdContent>
        <StyledDiv>
          <User />
          <PostScheduler />
          <NewCalendar />
        </StyledDiv>
      </AntdContent>
      <PostSettingTest />
    </StyledLayout>
  );
};

export default Calendar;
