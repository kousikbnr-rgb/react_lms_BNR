import "../../css/trainer-dashboard.css";

function TrainerDashboard() {
  return (
    <div className="trainer-dashboard">

      {/* =========================================
          WELCOME SECTION
          ========================================= */}

      <div className="trainer-welcome">

        <h2>
          Welcome Back, Trainer!
        </h2>

        <p>
          Here's what's happening with your batches today.
        </p>

      </div>


      {/* =========================================
          STAT CARDS
          ========================================= */}

      <div className="trainer-stats">

        {/* Total Students */}

        <div className="trainer-stat-card students-card">

          <div className="trainer-stat-icon">

            <span className="material-icons">
              groups
            </span>

          </div>

          <div className="trainer-stat-content">

            <h3>
              120
            </h3>

            <p>
              Total Students
            </p>

          </div>

        </div>


        {/* Total Batches */}

        <div className="trainer-stat-card batches-card">

          <div className="trainer-stat-icon">

            <span className="material-icons">
              class
            </span>

          </div>

          <div className="trainer-stat-content">

            <h3>
              5
            </h3>

            <p>
              Total Batches
            </p>

          </div>

        </div>


        {/* Today's Attendance */}

        <div className="trainer-stat-card attendance-card">

          <div className="trainer-stat-icon">

            <span className="material-icons">
              fact_check
            </span>

          </div>

          <div className="trainer-stat-content">

            <h3>
              92%
            </h3>

            <p>
              Today's Attendance
            </p>

          </div>

        </div>


        {/* Pending Attendance */}

        <div className="trainer-stat-card pending-card">

          <div className="trainer-stat-icon">

            <span className="material-icons">
              pending_actions
            </span>

          </div>

          <div className="trainer-stat-content">

            <h3>
              2
            </h3>

            <p>
              Pending Attendance
            </p>

          </div>

        </div>

      </div>


      {/* =========================================
          LOWER DASHBOARD SECTION
          ========================================= */}

      <div className="trainer-dashboard-grid">


        {/* =====================================
            TODAY'S ATTENDANCE
            ===================================== */}

        <div className="trainer-dashboard-card">

          <div className="trainer-card-header">

            <div>
              <h4>
                Today's Attendance
              </h4>
            </div>

            <span>
              04 Sep 2026
            </span>

          </div>


          <div className="attendance-summary">

            <div className="present-summary">

              <strong>
                110
              </strong>

              <span>
                Present
              </span>

            </div>


            <div className="absent-summary">

              <strong>
                7
              </strong>

              <span>
                Absent
              </span>

            </div>


            <div className="leave-summary">

              <strong>
                3
              </strong>

              <span>
                Leave
              </span>

            </div>

          </div>

        </div>


        {/* =====================================
            BATCH OVERVIEW
            ===================================== */}

        <div className="trainer-dashboard-card">

          <div className="trainer-card-header">

            <div>
              <h4>
                Batch Overview
              </h4>
            </div>

            <span>
              5 Batches
            </span>

          </div>


          <div className="batch-list">

            <div className="batch-row">

              <span>
                Batch A
              </span>

              <strong>
                25 Students
              </strong>

            </div>


            <div className="batch-row">

              <span>
                Batch B
              </span>

              <strong>
                30 Students
              </strong>

            </div>


            <div className="batch-row">

              <span>
                Batch C
              </span>

              <strong>
                20 Students
              </strong>

            </div>


            <div className="batch-row">

              <span>
                Batch D
              </span>

              <strong>
                25 Students
              </strong>

            </div>


            <div className="batch-row">

              <span>
                Batch E
              </span>

              <strong>
                20 Students
              </strong>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TrainerDashboard;