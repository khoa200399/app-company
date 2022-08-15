import React from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";
import AntdContent from "../../../components/content";

const StyledDiv = styled.div`
  padding: 0 20px;
  min-height: 100vh;
  background: #1a1c20;
  border-radius: 80px 0 0 80px;
`;

const StyledLayout = styled(Layout)`
  background: #151419;
`;

const Dashboard = () => {
  return (
    <StyledLayout hasSider>
      <AntdContent>
        <StyledDiv>Dashboard</StyledDiv>
      </AntdContent>
    </StyledLayout>
  );
};

export default Dashboard;
