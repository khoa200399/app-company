import { Button, Result } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SITE_MAP } from "../../modules/sitemap";

const NotFound: React.FC = () => {
    const navigate = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={() => navigate(SITE_MAP.LOGIN)} type="primary">Back Home</Button>}
    />
  );
};

export default NotFound;
