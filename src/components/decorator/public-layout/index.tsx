import React from "react";
import { Layout } from "antd";
import Calendar from "../../../modules/calendar/pages/calendar";
import LeftNav from "../../leftNav/leftNav";

const { Content } = Layout;

type Props = {
  currentPage?: string;
  children?: JSX.Element;
};

const PublicLayout: React.FC<Props> = (props) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <LeftNav currentPage={props.currentPage} />
      {props.children}
    </Layout>
  );
};

export default PublicLayout;
