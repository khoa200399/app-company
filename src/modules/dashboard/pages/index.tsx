import React from "react";
import PublicLayout from "../../../components/decorator/public-layout";
import Dashboard from "./dashboard";

function DashboardPage() {
  return (
    <PublicLayout>
      <Dashboard />
    </PublicLayout>
  );
}

export default DashboardPage;
