import { useState } from "react";

import AdminSidebar from "./AdminSidebar";
import Header from "./Header";

import "../css/layout.css";

function AdminLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-wrapper">

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Mobile overlay */}

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <main className="content-body">
        {children}
      </main>

    </div>
  );
}

export default AdminLayout;
