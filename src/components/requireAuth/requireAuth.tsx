import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import RedirectToLogin from "../redirectToLogin/redirectToLogin";

const RequireAuth = ({ allowRole }: { allowRole: any }) => {
  const { access_token, roles } = useSelector((state: any) => state.auth.current_user);
    const roleCheck = roles.find((item:any) => item === allowRole);
    

  return access_token && roleCheck ? <Outlet /> : <RedirectToLogin />;
};

export default RequireAuth;
