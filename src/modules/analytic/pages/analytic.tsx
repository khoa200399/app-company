import React, { useEffect } from "react";
import styled from "styled-components";
import Layout from "antd/lib/layout/layout";
import AntdContent from "../../../components/content";
import { useDispatch } from "react-redux";
import { setCurrentPage } from "../../../redux/displaySlice";

const StyledDiv = styled.div`
  padding: 0 20px;
  min-height: 100vh;
  background: #1a1c20;
  border-radius: 80px 0 0 80px;
  color: white;
  font-size: 50px;
`;

const StyledLayout = styled(Layout)`
  background: #151419;
`;

const Analytic = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setCurrentPage({ currentPage: "analytics" }));
  }, []);
  return (
    <StyledLayout hasSider>
      <AntdContent>
        <StyledDiv>Analytic</StyledDiv>
      </AntdContent>
    </StyledLayout>
  );
};

export default Analytic;
