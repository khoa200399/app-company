import React from "react";
import {
  CalendarOutlined,
  FileOutlined,
  PieChartOutlined,
  SettingOutlined,
  LineChartOutlined,
  AntDesignOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import AntdSider from "../../components/decorator/public-layout/navigation";
import AntdMenu from "../../components/menu";
import styled from "styled-components";
import AntdAvatar from "../../components/avatar";
import AntdButton from "../../components/button";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Dashboard", "1", <PieChartOutlined />),
  getItem("Calendar", "2", <CalendarOutlined />),
  getItem("Analytics", "3", <LineChartOutlined />),
  getItem("Ads", "4", <AntDesignOutlined />),
  getItem("Campaign", "5", <FileOutlined />),
  getItem("Setting", "6", <SettingOutlined />),
];

const AntdSiderStyled = styled(AntdSider)`
  background: #151419;
  .logo {
    color: white;
    padding: 20px 0;
  }

  .account {
    background: #1f1b27;
    padding: 20px 0;
    margin: 0 20px;
    border-radius: 25px;
    margin-top: 320px;
  
  }
  .account h2 {
    color: white;
    margin-top: 10px;
    margin-bottom: 0;
  }

  .account h1 {
    color: white;
    font-weight: 300;
    opacity: 0.5;
  }
`;
const AntdMenuStyled = styled(AntdMenu)`
  background: #151419;
  border-right: none;
  color: white;

  .ant-menu-item {
    background: #151419;
  }
  .ant-menu-item.ant-menu-item-selected {
    background: #151419;
  }
  .ant-menu-item.ant-menu-item-selected span {
    background: #1f1b27;
    color: #e0ddfa;
    height: 100%;
    margin: 0;
  }

  .ant-menu-title-content {
    padding-left: 10px;
  }

  .ant-menu-item.ant-menu-item-selected span svg {
    height: 100%;
  }

  .ant-menu-inline .ant-menu-selected::after,
  .ant-menu-inline .ant-menu-item-selected::after {
    opacity: 0 !important;
  }

  .ant-menu-item:hover {
    color: #e0ddfa;
  }
`;
const AntdButtonStyled = styled(AntdButton)`
    background: #634BFF;
    border: 1px solid #634BFF;
    color: white;
    border-radius: 20px;
    margin: 25px 10px 0px 10px;
    &:hover {
      background: #170c60;
      border-color: #634BFF;
      color: white;
    }
    &:active {
      background: #170c60;
      border-color: #634BFF;
      color: white;
    }
    &:focus {
      background: #170c60;
      border-color: #634BFF;
      color: white;
    }
`


const LeftNav: React.FC = () => {
  return (
    <AntdSiderStyled>
      <div className="logo">Khoa</div>
      <AntdMenuStyled defaultSelectedKeys={["1"]} mode="inline" items={items} />
      <div className="account">
        <AntdAvatar size={64} icon={<UserOutlined />} />
        <h2>Vanessa</h2>
        <h1>@vanessasays</h1>
        <AntdButtonStyled htmlType={'button'} size={"large"}>
          <LogoutOutlined style={{marginRight:'5px'}}/>Sign out
        </AntdButtonStyled>
      </div>
    </AntdSiderStyled>
  );
};

export default LeftNav;
