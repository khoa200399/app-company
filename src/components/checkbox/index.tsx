import React from "react";
import {CheckboxProps} from 'antd';
import StyledCheckBox from "./style";

interface Props extends CheckboxProps{}

const AntdCheckBox: React.FC<Props> = (props) => {
    return <StyledCheckBox {...props}>{props.children}</StyledCheckBox>
}

export default AntdCheckBox;