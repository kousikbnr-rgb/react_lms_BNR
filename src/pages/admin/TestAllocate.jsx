import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";

import "../../css/dashboard.css";
import "../../css/theme.css";
import "../../css/admin.css";

function AdminEnable() {

  const [mcqEnabled, setMcqEnabled] = useState(false);
  const [programmingEnabled, setProgrammingEnabled] = useState(false);

  return (
    <AdminLayout>

      <div className="admin-page">

        <div className="admin-page-header">
          <div>
            <h2>Assessment Settings</h2>
            <p>Enable or disable MCQ and Programming assessments.</p>
          </div>
        </div>

        <div className="row">

          {/* MCQ */}
          <div className="col-lg-6 col-md-6">
            <div className="card">

              <div className="card-body text-center">

                <span
                  className="material-icons"
                  style={{
                    fontSize: "48px",
                    color: "#4e73df",
                    marginBottom: "15px"
                  }}
                >
                  quiz
                </span>

                <h4 className="card-title">
                  MCQ Assessment
                </h4>

                <p>
                  Enable or disable the MCQ assessment for students.
                </p>

                <button
                  type="button"
                  className={`btn ${
                    mcqEnabled ? "btn-danger" : "btn-primary"
                  }`}
                  onClick={() => setMcqEnabled(!mcqEnabled)}
                >
                  {mcqEnabled ? "MCQ Disable" : "MCQ Enable"}
                </button>

                <div style={{ marginTop: "15px" }}>
                  <span
                    className={`badge ${
                      mcqEnabled
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {mcqEnabled ? "Enabled" : "Disabled"}
                  </span>
                </div>

              </div>

            </div>
          </div>

          {/* Programming */}
          <div className="col-lg-6 col-md-6">
            <div className="card">

              <div className="card-body text-center">

                <span
                  className="material-icons"
                  style={{
                    fontSize: "48px",
                    color: "#1cc88a",
                    marginBottom: "15px"
                  }}
                >
                  code
                </span>

                <h4 className="card-title">
                  Programming Assessment
                </h4>

                <p>
                  Enable or disable the Programming assessment for students.
                </p>

                <button
                  type="button"
                  className={`btn ${
                    programmingEnabled
                      ? "btn-danger"
                      : "btn-primary"
                  }`}
                  onClick={() =>
                    setProgrammingEnabled(!programmingEnabled)
                  }
                >
                  {programmingEnabled
                    ? "Programming Disable"
                    : "Programming Enable"}
                </button>

                <div style={{ marginTop: "15px" }}>
                  <span
                    className={`badge ${
                      programmingEnabled
                        ? "badge-success"
                        : "badge-danger"
                    }`}
                  >
                    {programmingEnabled
                      ? "Enabled"
                      : "Disabled"}
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default AdminEnable;

