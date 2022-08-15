import React from "react";
import styled from "styled-components";
import AntdCarousel from "../../../../components/carousel";

const StyledDiv = styled.div`
  width: 85% !important;
  height: 320px;
  margin: 0 auto;
  border-radius: 25px;
`;

const StyleImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 25px;
`;

const CarouselDemo: React.FC = () => (
  <AntdCarousel autoplay>
    <StyledDiv>
      <StyleImg
        src="https://cali.vn/storage/app/media/2021/Services/Coaching/Dance/Sexy-dance.jpg"
        alt=""
      />
    </StyledDiv>

    <StyledDiv>
      <StyleImg
        src="https://leep.imgix.net/2021/06/dance-quan-4.jpg?auto=compress&fm=pjpg&ixlib=php-1.2.1"
        alt=""
      />
    </StyledDiv>

    <StyledDiv>
      <StyleImg
        src="http://www.elle.vn/wp-content/uploads/2014/12/09/ellevn-afro-dance.jpg"
        alt=""
      />
    </StyledDiv>

    <StyledDiv>
      <StyleImg
        src="https://i.guim.co.uk/img/media/1bb31654c7ada0b32268489b347bbe9067c72fdc/164_256_3724_2234/master/3724.jpg?width=1200&quality=85&auto=format&fit=max&s=edf0d8f3cdffbb5a6a3794bae33842a1"
        alt=""
      />
    </StyledDiv>
  </AntdCarousel>
);

export default CarouselDemo;
