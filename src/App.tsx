import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/notfound/notfound";
import CalendarPage from "./modules/calendar/pages";
import DashboardPage from "./modules/dashboard/pages";
import AnalyticPage from "./modules/analytic/pages";
import AdsPage from "./modules/ads/pages";
import CampaignPage from "./modules/campaign/pages";
import SettingPage from "./modules/setting/pages";
import Login from "./modules/login/page/Login";
import RequireAuth from "./components/requireAuth/requireAuth";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/authSlice";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const dispath = useDispatch()
  const user = localStorage.getItem('user');
  useEffect(() => {
    dispath(setUser(JSON.parse(user || "{}")))
  },[])
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Navigate to="/calendar" replace />} />
          <Route path="/login" element={<Login />} />

          <Route element={<RequireAuth allowRole={"all"} />}>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/analytics" element={<AnalyticPage />} />
            <Route path="/ads" element={<AdsPage />} />
          </Route>

          <Route element={<RequireAuth allowRole={"admin"} />}>
            <Route path="/campaign" element={<CampaignPage />} />
            <Route path="/setting" element={<SettingPage />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
