import Sidebar from "@/components/shared/Sidebar.js/Sidebar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-[calc(100vh-64px)]">
      <Sidebar>{children}</Sidebar>
    </div>
  );
};

export default DashboardLayout;
