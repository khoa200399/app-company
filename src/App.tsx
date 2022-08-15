import React from "react";
import "./App.css";
import PublicLayout from "./components/decorator/public-layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./components/notfound/notfound";
import CalendarPage from "./modules/calendar/pages";
import DashboardPage from "./modules/dashboard/pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/calendar" replace />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/analytics" element={<NotFound />} />
          <Route path="/ads" element={<NotFound />} />
          <Route path="/campaign" element={<NotFound />} />
          <Route path="/setting" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
