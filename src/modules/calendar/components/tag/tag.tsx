import { Tag } from "antd";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin-left: 40px;
  margin-top: 16px;
  .ant-tag {
    background: linear-gradient(
      90deg,
      rgba(99, 75, 255, 1) 16%,
      rgba(94, 30, 156, 1) 65%
    );
    border: none;
    padding: 8px 18px;
    border-radius: 16px;
    color: white;
    font-size: 16px;
    font-weight: 300;
    margin-bottom: 20px;
  }

  .ant-tag span {
    vertical-align: middle;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    font-size: 8px;
    padding: 2px;
    margin-left: 10px;
  }
`;

const AntdTag: React.FC = () => (
  <StyledDiv>
    <Tag closable>Party</Tag>
    <Tag closable>Dancing</Tag>
    <Tag closable>Mood</Tag>
    <Tag closable>Girl</Tag>
    <Tag closable>Boy</Tag>
    <Tag closable>Thoughts</Tag>
  </StyledDiv>
);

export default AntdTag;
