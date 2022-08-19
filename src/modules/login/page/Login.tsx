import React, { useEffect } from "react";
import { Card, Spin } from "antd";
import AntdInput from "../../../components/input";
import AntdButton from "../../../components/button";
import { useFormik } from "formik";
import styled from "styled-components";
import * as yup from "yup";
import { useLoginUserMutation } from "../../../redux/authApi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SITE_MAP } from "../../sitemap";

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
`;

const loginSchema = yup.object().shape({
  username: yup.string().required("*Please enter username!"),
  password: yup
    .string()
    .required("*Please enter password!")
    .min(4, "*Min 4 charaters"),
});

function Login() {
  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isSuccess: isLoginSuccess,
      isLoading: isLoginLoading,
      isError: isLoginError,
    },
  ] = useLoginUserMutation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      loginUser({ email: values.username, password: values.password });
    },
  });
  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("user") || "{}");
    if (auth.access_token) navigate(SITE_MAP.DASHBOARD);
  }, []);

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success("Login Successfully!!!");
      navigate(SITE_MAP.DASHBOARD);
    }
    if (isLoginError) {
      toast.error("Login error!!!");
    }
  }, [isLoginSuccess, isLoginError]);

  return (
    <div style={{ paddingTop: "40px", height: "100vh", background: "#1a1c20" }}>
      <Card title="LOGIN" style={{ width: "40%", margin: "0 auto" }}>
        <form onSubmit={formik.handleSubmit}>
          <StyledDiv>
            <label style={{ width: "30%" }} htmlFor="username">
              Username:
            </label>
            <AntdInput
              style={{ width: "70%" }}
              id="username"
              name="username"
              type="string"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
          </StyledDiv>
          {formik.errors.username && formik.touched.username && (
            <p style={{ color: "red" }}>{formik.errors.username}</p>
          )}

          <StyledDiv>
            <label style={{ width: "30%" }} htmlFor="password">
              Password:
            </label>
            <AntdInput
              style={{ width: "70%" }}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </StyledDiv>
          {formik.errors.password && formik.touched.password && (
            <p style={{ color: "red" }}>{formik.errors.password}</p>
          )}
          <AntdButton htmlType="submit" disabled={formik.isSubmitting}>
            Submit
          </AntdButton>
          {isLoginLoading ? <Spin size="large" /> : null}
        </form>
        <p>Test Accout: test@gmail.com - 123456</p>
      </Card>
    </div>
  );
}

export default Login;
