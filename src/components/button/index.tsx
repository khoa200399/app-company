import React from "react";
import {ButtonProps} from 'antd';
import StyledButton from "./style";

interface Props extends ButtonProps{}

const AntdButton: React.FC<Props> = (props) => {
    return <StyledButton {...props}>{props.children}</StyledButton>
}

export default AntdButton;