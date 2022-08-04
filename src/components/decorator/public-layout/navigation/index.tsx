import React from "react";
import { SiderProps } from "antd";
import StyledSider from "./style";

interface Props extends SiderProps {}

const AntdSider: React.FC<Props> = (props) => {
  return <StyledSider {...props}>{props.children}</StyledSider>;
};

export default AntdSider;
