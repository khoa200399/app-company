import React from "react";
import { CarouselProps } from "antd";
import StyledCarousel from "./style";

interface Props extends CarouselProps {}

const AntdCarousel: React.FC<Props> = (props) => {
  return <StyledCarousel {...props}>{props.children}</StyledCarousel>;
};

export default AntdCarousel;
