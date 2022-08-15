import React from "react";
import { Layout } from "antd";
import Calendar from "../../../modules/calendar/pages/calendar";
import LeftNav from "../../../modules/calendar/components/leftNav/leftNav";

const { Content } = Layout;

const PublicLayout: React.FC = () => (
  <Layout style={{ minHeight: "100vh" }}>
    <LeftNav />
    <Calendar />
  </Layout>
);

export default PublicLayout;
