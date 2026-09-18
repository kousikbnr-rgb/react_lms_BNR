import { NavLink } from "react-router-dom";
import "../css/sidebar.css";
import "../css/theme.css";
 import logo from "../assets/images/cogniitec-logo.png"; 


function AdminSidebar({ sidebarOpen, setSidebarOpen }) {

  return (
    <div
      className={`sidebar-wrapper ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >

      {/* Sidebar Brand */}

      <div className="nav-header">

             <NavLink to="/dashboard" className="brand-logo" onClick={() => setSidebarOpen(false)} > <img src={logo} alt="Academy Logo" className="brand-logo-image" /> </NavLink>
      

      </div>


      {/* Sidebar Navigation */}

      <div className="dlabnav">

        <div className="dlabnav-scroll">

          <ul className="metismenu" id="admin-menu">

            <li>
              <NavLink
                to="/admin/dashboard"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  dashboard
                </span>

                <span className="nav-text">
                  Dashboard
                </span>

              </NavLink>
            </li>


            {/* <li>
              <NavLink
                to="/admin/course"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  menu_book
                </span>

                <span className="nav-text">
                  Course
                </span>

              </NavLink>
            </li>


            <li>
              <NavLink
                to="/admin/trainer"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  badge
                </span>

                <span className="nav-text">
                  Trainer
                </span>

              </NavLink>
            </li>


            <li>
              <NavLink
                to="/admin/student"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  groups
                </span>

                <span className="nav-text">
                  Student
                </span>

              </NavLink>
            </li> */}


            <li>
              <NavLink
                to="/test/allocate"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  event_available
                </span>

                <span className="nav-text">
                  Test Allocate
                </span>

              </NavLink>
            </li>
            <li>
              <NavLink
                to="/admin/results"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  event_available
                </span>

                <span className="nav-text">
                  Test Result
                </span>

              </NavLink>
            </li>


            {/* <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  logout
                </span>

                <span className="nav-text">
                  Logout
                </span>

              </NavLink>
            </li> */}

          </ul>


          <div className="copyright">

            <p>
              <strong>
                Admin Panel
              </strong>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminSidebar;
