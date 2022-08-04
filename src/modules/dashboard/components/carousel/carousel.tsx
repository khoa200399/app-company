import { Carousel } from "antd";
import { url } from "inspector";
import React from "react";
import styled from "styled-components";
import AntdCarousel from "../../../../components/carousel";

const contentStyle: React.CSSProperties = {
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "30px",
  margin: "10px 40px",
};

const StyledDiv = styled.div`
  width: 85%;
  height: 320px;
  margin-left: 40px;
  background-size: auto;
  background-repeat: no-repeat;
  background-position: bottom;
  border-radius: 25px;
`;

const CarouselDemo: React.FC = () => (
  <AntdCarousel>
    <div>
      <StyledDiv
        style={{
          background: `url('https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg')`,
        }}
      />
    </div>
    <div>
      <StyledDiv
        style={{
          background: `url('https://cali.vn/storage/app/media/2021/Services/Coaching/Dance/Sexy-dance.jpg')`,
        }}
      />
    </div>
    <div>
      <StyledDiv
        style={{
          background: `url('https://cali.vn/storage/app/media/2021/Services/Coaching/Dance/Sexy-dance.jpg')`,
        }}
      />
    </div>
  </AntdCarousel>
);

export default CarouselDemo;
