import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/notfound/notfound";
import CalendarPage from "./modules/calendar/pages";
import DashboardPage from "./modules/dashboard/pages";
import AnalyticPage from "./modules/analytic/pages";
import AdsPage from "./modules/ads/pages";
import CampaignPage from "./modules/campaign/pages";
import SettingPage from "./modules/setting/pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/calendar" replace />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<AnalyticPage />} />
          <Route path="/ads" element={<AdsPage />} />
          <Route path="/campaign" element={<CampaignPage />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
