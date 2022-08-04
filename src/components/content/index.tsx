import React from "react";
import {LayoutProps} from 'antd';
import StyledContent from "./style";

interface Props extends LayoutProps{}

const AntdContent: React.FC<Props> = (props) => {
    return <StyledContent {...props}>{props.children}</StyledContent>
}

export default AntdContent;