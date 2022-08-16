import React from "react";
import {InputProps} from 'antd';
import StyledInput from "./style";

interface Props extends InputProps{}

const AntdInput: React.FC<Props> = (props) => {
    return <StyledInput {...props}>{props.children}</StyledInput>
}

export default AntdInput;