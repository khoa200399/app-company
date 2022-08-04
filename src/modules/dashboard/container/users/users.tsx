import React from "react";
import AntdAvatar from "../../../../components/avatar/style";
import { UserOutlined } from "@ant-design/icons";
import styled from "styled-components";
import AntdBadge from "../../../../components/badge";

const StyledDiv = styled.div`
  text-align: left;
`;

const User: React.FC = () => {
  return (
    <StyledDiv>
      <AntdBadge count={2}>
        <AntdAvatar size={64} icon={<UserOutlined />} />
      </AntdBadge>
      <AntdBadge count={2}>
        <AntdAvatar size={64} icon={<UserOutlined />} />
      </AntdBadge>
      <AntdBadge count={2}>
        <AntdAvatar size={64} icon={<UserOutlined />} />
      </AntdBadge>
      <AntdBadge count={2}>
        <AntdAvatar size={64} icon={<UserOutlined />} />
      </AntdBadge>
      <AntdBadge>
        <AntdAvatar size={64} style={{ backgroundColor: "#87d068" }}>
          {" "}
          +
        </AntdAvatar>
      </AntdBadge>
    </StyledDiv>
  );
};

export default User;
