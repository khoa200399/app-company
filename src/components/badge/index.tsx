import React from "react";
import {BadgeProps} from 'antd';
import StyledBadge from "./style";

interface Props extends BadgeProps{}

const AntdBadge: React.FC<Props> = (props) => {
    return <StyledBadge {...props}>{props.children}</StyledBadge>
}

export default AntdBadge;