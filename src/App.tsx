import React from "react";
import "./App.css";
import PublicLayout from "./components/decorator/public-layout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./modules/calendar/pages/notfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/calendar" replace />} />
        <Route path="/dashboard" element={<NotFound />} />
        <Route path="/calendar" element={<PublicLayout />} />
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
