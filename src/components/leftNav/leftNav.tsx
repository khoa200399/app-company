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
import AntdSider from "../decorator/public-layout/navigation";
import AntdMenu from "../menu";
import styled from "styled-components";
import AntdAvatar from "../avatar";
import AntdButton from "../button";
import {useDispatch, useSelector} from 'react-redux'
import { setCurrentPage } from "../../redux/displaySlice";
import {Link} from 'react-router-dom'

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
  getItem(<Link to='/dashboard'>Dashboard</Link>, "dashboard", <PieChartOutlined />),
  getItem(<Link to='/calendar'>Calendar</Link>, "calendar", <CalendarOutlined />),
  getItem(<Link to='/analytics'>Analytics</Link>, "analytics", <LineChartOutlined />),
  getItem(<Link to='/ads'>Ads</Link>, "ads", <AntDesignOutlined />),
  getItem(<Link to='/campaign'>Campaign</Link>, "campaign", <FileOutlined />),
  getItem(<Link to='/setting'>Setting</Link>, "setting", <SettingOutlined />),
];

const AntdSiderStyled = styled(AntdSider)`
  background: #151419;
  .logo {
    color: white;
    padding: 20px 0;
    margin-bottom: 60px;
  }

  .account {
    background: #1f1b27;
    padding: 20px 0;
    margin: 0 20px;
    border-radius: 25px;
    margin-top: 270px;
  
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

  .ant-menu-title-content a {
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
  .anticon.ant-menu-item-icon {
    padding-left: 20px;
    color: rgba(255,255,255,0.5);
    border-radius: 20px 0 0 20px;
    font-size: 18px;

  }
  .ant-menu-title-content a {
    border-radius: 0px 20px 20px 0px;
    color: rgba(255,255,255,0.5);
    font-size: 15px;
  }

  .ant-menu-title-content {
    margin-left: 0 !important;
  }

  .ant-menu-item.ant-menu-item-selected .anticon.ant-menu-item-icon {
    color: #634BFF;
  }
  .ant-menu-item.ant-menu-item-selected .ant-menu-title-content a {
    color:white;
  }
  .ant-menu-item::after {
    border-right:none;
  }
  .ant-menu-item.ant-menu-item-selected::after {
    border-right:none;
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
  const dispatch = useDispatch()
  const handleClick = (e:any) => {
    dispatch(setCurrentPage({currentPage: e.key}))
  }
  const selectedPage:any = useSelector(state => state)
  console.log(selectedPage.display.currentPage);
  
  return (
    <AntdSiderStyled>
      <div className="logo">Khoa</div>
      <AntdMenuStyled onClick={e => handleClick(e)} defaultSelectedKeys={selectedPage.display.currentPage} mode="inline" items={items} />
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
