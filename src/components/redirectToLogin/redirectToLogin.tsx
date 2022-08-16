import { Button, Result } from 'antd';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const RedirectToLogin: React.FC = () => {
  const navigate = useNavigate();  
  
  return <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button onClick={() => navigate('/login')} type="primary">Back Home</Button>}
  />
};

export default RedirectToLogin;