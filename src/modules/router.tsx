import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./login/page/Login";
import RequireAuth from "../components/requireAuth/requireAuth";
// import CalendarPage from "./calendar/pages";
// import DashboardPage from "./dashboard/pages";
// import AnalyticPage from "./analytic/pages";
// import AdsPage from "./ads/pages";
// import CampaignPage from "./campaign/pages";
// import SettingPage from "./setting/pages";
import { SITE_MAP } from "./sitemap";

const DashboardLazy = React.lazy(() => import("./dashboard/pages"));
const CalendarLazy = React.lazy(() => import("./calendar/pages"));
const AnalyticLazy = React.lazy(() => import("./analytic/pages"));
const AdsLazy = React.lazy(() => import("./ads/pages"));
const CampaignLazy = React.lazy(() => import("./campaign/pages"));
const SettingLazy = React.lazy(() => import("./setting/pages"));

const RouterApp = () => {
  const dispath = useDispatch();
  const user = localStorage.getItem("user");
  useEffect(() => {
    dispath(setUser(JSON.parse(user || "{}")));
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Navigate to={SITE_MAP.LOGIN} replace />} />
          <Route path={SITE_MAP.LOGIN} element={<Login />} />

          <Route element={<RequireAuth allowRole={"all"} />}>
            <Route
              path={SITE_MAP.DASHBOARD}
              element={
                <React.Suspense fallback={<>...</>}>
                  <DashboardLazy />
                </React.Suspense>
              }
            />
            <Route
              path={SITE_MAP.CANLENDAR}
              element={
                <React.Suspense fallback={<>...</>}>
                  <CalendarLazy />
                </React.Suspense>
              }
            />
            <Route
              path={SITE_MAP.ANALYTICS}
              element={
                <React.Suspense fallback={<>...</>}>
                  <AnalyticLazy />
                </React.Suspense>
              }
            />
            <Route
              path={SITE_MAP.ADS}
              element={
                <React.Suspense fallback={<>...</>}>
                  <AdsLazy />
                </React.Suspense>
              }
            />
          </Route>

          <Route element={<RequireAuth allowRole={"admin"} />}>
            <Route
              path={SITE_MAP.CAMPAIGN}
              element={
                <React.Suspense fallback={<>...</>}>
                  <CampaignLazy />
                </React.Suspense>
              }
            />
            <Route
              path={SITE_MAP.SETTING}
              element={
                <React.Suspense fallback={<>...</>}>
                  <SettingLazy />
                </React.Suspense>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default RouterApp;
