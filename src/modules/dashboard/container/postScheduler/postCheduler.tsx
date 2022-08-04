import React from "react";
import styled from "styled-components";
import '../../../../styles/variables.scss'
import AvatarGroup from "../../components/avatarGroup/avatarGroup";



const StyledDiv = styled.div`
  margin: 10px;
  background: #1a1c20;
  h1 {
    font-size: 25px;
    text-align: left;
    margin-left: 10px;
    color: white;
  }
  .row {
    display: flex;
  }

  .row .col {
    width: calc(100% / 3);
    margin: 10px;
  }

  .row .col-1 {
    width: 70%;
  }

  .content {
    background: #22262e;
    border-radius: 16px;
    padding:0 16px;
    height: 100%;
  }

  .content-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content p {
    font-size: 16px;
    color: #d5d0eb;
    padding: 10px
  }

  .content h1 {
    font-size: 30px;
    color: #d5d0eb;
    text-align: center;
  }

  .content h2 {
    font-size: 14px;
    color: #d5d0eb;
    font-weight: 400;
    text-align: center;
  }
  .content .title {
    font-size: 20px;
    padding: 10px;
    text-align: left;
    margin: 0;
  }
`;
const PostScheduler: React.FC = () => {
  return (
    <StyledDiv>
      <h1>Post Schedule</h1>
      <div className="row">
        <div className="col col-1">
          <div className="content">
            <h1 className="title">Last Month Highlights</h1>
            <AvatarGroup/>
          </div>
        </div>
        <div className="col">
          <div className="content content-1">
            <h1>2</h1>
            <h2>Scheduled for today</h2>
          </div>
        </div>
        <div className="col">
          <div className="content content-1">
            <h1>3</h1>
            <h2>Post this weeks</h2>
          </div>
        </div>
      </div>
    </StyledDiv>
  );
};

export default PostScheduler;
