import { useState } from "react";

import TrainerSidebar from "./TrainerSidebar";
import Header from "./Header";

import "../css/layout.css";

function TrainerLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-wrapper">

      <TrainerSidebar
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

export default TrainerLayout;