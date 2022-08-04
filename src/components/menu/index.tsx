import React from "react";
import {MenuProps} from 'antd';
import StyledMenu from "./style";

interface Props extends MenuProps{}

const AntdMenu: React.FC<Props> = (props) => {
    return <StyledMenu {...props}>{props.children}</StyledMenu>
}

export default AntdMenu;