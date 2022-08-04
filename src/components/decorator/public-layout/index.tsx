import React from "react";
import { Layout } from "antd";
import DashBoard from "../../../modules/dashboard/pages/dashboard";
import LeftNav from "../../../modules/leftNav/leftNav";

const { Content } = Layout;

const StyledLayout: React.FC = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <LeftNav></LeftNav>
    <DashBoard />
  </Layout>
);

export default StyledLayout;
