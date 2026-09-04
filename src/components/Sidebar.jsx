import { NavLink } from "react-router-dom";
import "../css/sidebar.css";
import "../css/theme.css";
function Sidebar({ sidebarOpen, setSidebarOpen }) {

  return (
    <div
      className={`sidebar-wrapper ${
        sidebarOpen ? "sidebar-open" : ""
      }`}
    >

      {/* Sidebar Brand */}

      <div className="nav-header">

        <NavLink
          to="/dashboard"
          className="brand-logo"
          onClick={() => setSidebarOpen(false)}
        >

          <div className="logo-abbr">
            BR
          </div>

          <div className="brand-title">
            <h2>
               Academy
            </h2>
          </div>

        </NavLink>

      </div>


      {/* Sidebar Navigation */}

      <div className="dlabnav">

        <div className="dlabnav-scroll">

          <ul className="metismenu" id="menu">

            <li>
              <NavLink
                to="/dashboard"
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


            <li>
              <NavLink
                to="/profile"
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


            <li>
              <NavLink
                to="/course"
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
                to="/mcq"
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                onClick={() => setSidebarOpen(false)}
              >

                <span className="material-icons">
                  quiz
                </span>

                <span className="nav-text">
                  MCQ Test
                </span>

              </NavLink>
            </li>

          </ul>


          <div className="copyright">

            <p>
              <strong>
                Student Dashboard
              </strong>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Sidebar;