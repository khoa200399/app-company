import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";
import AntdContent from "../../../components/content";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../redux/displaySlice";
import { setUser } from "../../../redux/authSlice";

const StyledDiv = styled.div`
  padding: 0 20px;
  min-height: 100vh;
  background: #1a1c20;
  border-radius: 80px 0 0 80px;
  color: white;
  font-size: 50px;
  h1 {
    color: white;
  }
  .wrapper p {
    color: white;
    font-size: 20px;
    text-align: left;
  }
`;

const StyledLayout = styled(Layout)`
  background: #151419;
`;

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage({ currentPage: "dashboard" }));
  }, []);
  const user = useSelector((state: any) => state.auth.current_user);

  return (
    <StyledLayout hasSider>
      <AntdContent>
        <StyledDiv>
          <h1>Dashboard</h1>
          <div className="wrapper">
            <p>Id: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Token: {user.access_token?.substr(0, 60) + "..."}</p>
          </div>
        </StyledDiv>
      </AntdContent>
    </StyledLayout>
  );
};

export default Dashboard;
