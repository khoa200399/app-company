import React from "react";
import {AvatarProps} from 'antd';
import StyledAvatar from "./style";

interface Props extends AvatarProps{}

const AntdAvatar: React.FC<Props> = (props) => {
    return <StyledAvatar {...props}>{props.children}</StyledAvatar>
}

export default AntdAvatar;