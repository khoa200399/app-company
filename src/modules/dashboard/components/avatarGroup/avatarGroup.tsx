import { RightSquareOutlined } from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import React from "react";
import styled from "styled-components";

const StyledAvatar = styled(Avatar)`
  border: none !important;
  border-radius: 20px;
`;
const StyledDiv = styled.div`
  text-align: left;
  padding: 10px;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .ant-avatar-group .ant-avatar:not(:first-child) {
    margin-left: -10px;
  }
  .checkOut {
    display: flex;
    align-items: center;
  }
  .checkOut h4 {
    color: #d5d0eb;
    font-size: 18px;
    display: inline-block;
    margin: 0;
    padding: 0;
    transition: all 0.5s;
    font-weight: 400;
  }
  .checkOut span {
    margin-left: 8px;
    font-size: 18px;
    color: #d5d0eb;
    transition: all 0.5s;
  }

  .checkOut:hover h4, 
  .checkOut:hover span {
    color:white;
  }

`;
const AvatarGroup: React.FC = () => (
  <StyledDiv>
    <Avatar.Group>
      <StyledAvatar
        size={64}
        shape="square"
        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg?quality=75&width=990&auto=webp&crop=982:726,smart"
      />
      <StyledAvatar
        size={64}
        shape="square"
        src="https://assets.bizjournals.com/static/img/potm/marketing/team-success-img.jpg"
      />
      <StyledAvatar
        size={64}
        shape="square"
        src="https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI="
      />
      <StyledAvatar
        size={64}
        shape="square"
        src="https://www.franklincovey.com/wp-content/uploads/2022/02/7-Habits-Hero_435-x-430.jpg"
      />
    </Avatar.Group>
    <div className="checkOut">
      <a href="#">
        <h4>Check out</h4> <RightSquareOutlined />
      </a>
    </div>
  </StyledDiv>
);

export default AvatarGroup;
