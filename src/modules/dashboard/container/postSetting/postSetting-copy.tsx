import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "../../../../styles/variables.scss";
import CarouselDemo from "../../components/carousel/carousel";
import AntdDateTimePicker from "../../components/datepicker/datepicker";
import AntdTag from "../../components/tag/tag";
import { RootState } from "../../../../redux/store";
import { setDisplay } from "../../../../redux/displaySlice";

const StyledDiv = styled.div`
  position: relative;
  height: 100vh;
  width: 30%;
  background: #1a1c20;
  .title {
    color: white;
    font-size: 25px;
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .partTitle {
    margin: 10px 40px;
    color: white;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
  }
  .description p {
    margin: 16px 40px;
    color: #737579;
    text-align: left;
    background: #1a1c20;
    padding: 20px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .ant-picker-clear {
    background: transparent;
    color: white;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 20px;
  position: absolute;
  top: 2%;
  right: 4%;
  transition: all 0.5s;
  &:hover {
    color: #634bff;
  }
`;
const StyledDivContent = styled.div`
  background: #22262d;
  border-radius: 80px 0 0 80px;
  height: 100vh;
`

const PostSettingTest: React.FC = () => {
  const displayToggle = useSelector(
    (state: RootState) => state.display.onDisplay
  );
  
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setDisplay({ onDisplay: "false" }));
  };
  let displayState = displayToggle == "true" ? "block" : "none";

  return (
    <StyledDiv style={{ display: displayState }}>
      <StyledDivContent>
        <StyledButton onClick={handleClose} className="close">
          <CloseCircleOutlined />
        </StyledButton>
        <h1 className="title">Post Setting</h1>

        <div className="imgInfo">
          <h1 className="partTitle">Image</h1>
          <CarouselDemo />
        </div>

        <div className="description">
          <h1 className="partTitle">Description</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            magni cum rem tempora facere, accusamus inventore magnam eaque ipsa
            unde in libero vero pariatur quo saepe, aliquam consequatur at
            temporibus.
          </p>
        </div>

        <div className="datePosting">
          <h1 className="partTitle">Date of Posting</h1>
          <AntdDateTimePicker />
        </div>

        <div className="tag">
          <h1 className="partTitle">Tags</h1>
          <AntdTag />
        </div>
      </StyledDivContent>
    </StyledDiv>
  );
};

export default PostSettingTest;
