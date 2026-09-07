import { NavLink } from "react-router-dom";
import "../css/sidebar.css";
import "../css/theme.css";

function TrainerSidebar({ sidebarOpen, setSidebarOpen }) {

  return (
    <div
      className={`sidebar-wrapper ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >

      {/* Sidebar Brand */}

      <div className="nav-header">

        <NavLink
          to="/trainer/dashboard"
          className="brand-logo"
          onClick={() => setSidebarOpen(false)}
        >

          <div className="logo-abbr">
            BR
          </div>

          <div className="brand-title">
            <h2>
             Trainer
            </h2>
          </div>

        </NavLink>

      </div>


      {/* Sidebar Navigation */}

      <div className="dlabnav">

        <div className="dlabnav-scroll">

          <ul className="metismenu" id="menu">

            {/* Dashboard */}

            <li>
              <NavLink
                to="/trainer/dashboard"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  home
                </span>

                <span className="nav-text">
                  Dashboard
                </span>

              </NavLink>
            </li>


            {/* Attendance */}

            <li>
              <NavLink
                to="/trainer/attendance"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  fact_check
                </span>

                <span className="nav-text">
                  Attendance
                </span>

              </NavLink>
            </li>


            {/* Batch Report */}

            <li>
              <NavLink
                to="/trainer/reports/batch"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  assessment
                </span>

                <span className="nav-text">
                  Batch Report
                </span>

              </NavLink>
            </li>


            {/* Student Report */}

            <li>
              <NavLink
                to="/trainer/reports/student"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  person_search
                </span>

                <span className="nav-text">
                  Student Report
                </span>

              </NavLink>
            </li>


            {/* Students */}

            <li>
              <NavLink
                to="/trainer/students"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  groups
                </span>

                <span className="nav-text">
                  Students
                </span>

              </NavLink>
            </li>


            {/* Batches */}

            <li>
              <NavLink
                to="/trainer/batches"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  class
                </span>

                <span className="nav-text">
                  Batches
                </span>

              </NavLink>
            </li>


            {/* Profile */}

            <li>
              <NavLink
                to="/trainer/profile"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  person
                </span>

                <span className="nav-text">
                  Profile
                </span>

              </NavLink>
            </li>

          </ul>


          <div className="copyright">

            <p>
              <strong>
                Trainer Dashboard
              </strong>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TrainerSidebar;