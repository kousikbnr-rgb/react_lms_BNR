
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import AdminLayout from "../../components/AdminLayout";

import "../../css/dashboard.css";
import "../../css/theme.css";
import "../../css/admin.css";

function StudentReport() {

  const [testType, setTestType] = useState("");
  const [department, setDepartment] = useState("");
  const [status, setStatus] = useState("");
  const [students, setStudents] = useState([]);

  // Sample student data
  const studentData = [
    {
      id: 1,
      name: "Arun Kumar",
      registerNo: "STU001",
      department: "Computer Science",
      testType: "MCQ",
      score: 85,
      status: "Passed",
    },
    {
      id: 2,
      name: "Priya Sharma",
      registerNo: "STU002",
      department: "Computer Science",
      testType: "Programming",
      score: 78,
      status: "Passed",
    },
    {
      id: 3,
      name: "Rahul Raj",
      registerNo: "STU003",
      department: "Information Technology",
      testType: "MCQ",
      score: 62,
      status: "Passed",
    },
    {
      id: 4,
      name: "Sneha Devi",
      registerNo: "STU004",
      department: "Information Technology",
      testType: "Programming",
      score: 45,
      status: "Failed",
    },
    {
      id: 5,
      name: "Vijay Kumar",
      registerNo: "STU005",
      department: "Electronics",
      testType: "MCQ",
      score: 91,
      status: "Passed",
    },
    {
      id: 6,
      name: "Divya Sri",
      registerNo: "STU006",
      department: "Electronics",
      testType: "Programming",
      score: 72,
      status: "Passed",
    },
  ];

  const handleSearch = () => {

    let result = studentData;

    // Filter by Test Type
    if (testType) {
      result = result.filter(
        (student) => student.testType === testType
      );
    }

    // Filter by Department
    if (department && department !== "All") {
      result = result.filter(
        (student) => student.department === department
      );
    }

    // Filter by Pass / Fail
    if (status && status !== "All") {
      result = result.filter(
        (student) => student.status === status
      );
    }

    setStudents(result);
  };

  const handleExportPDF = () => {

    if (students.length === 0) {
      alert("No student data available to export.");
      return;
    }

    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Student Test Report", 14, 20);

    doc.setFontSize(11);

    doc.text(
      `Test Type: ${testType || "All"}`,
      14,
      30
    );

    doc.text(
      `Department: ${department || "All"}`,
      14,
      37
    );

    doc.text(
      `Result: ${status || "All"}`,
      14,
      44
    );

    const tableData = students.map((student) => [
      student.registerNo,
      student.name,
      student.department,
      student.testType,
      `${student.score}%`,
      student.status,
    ]);

    autoTable(doc, {
      startY: 52,

      head: [
        [
          "Register No",
          "Student Name",
          "Department",
          "Test Type",
          "Score",
          "Status",
        ],
      ],

      body: tableData,

      theme: "grid",

      headStyles: {
        fillColor: [78, 115, 223],
      },
    });

    doc.save("student-test-report.pdf");
  };

  return (
    <AdminLayout>

      <div className="admin-page">

        {/* Page Header */}
        <div className="admin-page-header">

          <div>
            <h2>Student Report</h2>

            <p>
              Search and export student test results.
            </p>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleExportPDF}
            disabled={students.length === 0}
          >
            <span className="material-icons">
              picture_as_pdf
            </span>

            Export PDF
          </button>

        </div>


        {/* Search Card */}
        <div className="card">

          <div className="card-header">

            <h4 className="card-title">
              Search Student Report
            </h4>

          </div>

          <div className="card-body">

            <div className="row">

              {/* Test Type */}
              <div className="col-md-4">

                <div className="admin-form-group">

                  <label htmlFor="testType">
                    Test Type
                  </label>

                  <select
                    id="testType"
                    value={testType}
                    onChange={(e) =>
                      setTestType(e.target.value)
                    }
                  >

                    <option value="">
                      Select Test Type
                    </option>

                    <option value="All">
                      All
                    </option>

                    <option value="MCQ">
                      MCQ
                    </option>

                    <option value="Programming">
                      Programming
                    </option>

                  </select>

                </div>

              </div>


              {/* Department */}
              <div className="col-md-4">

                <div className="admin-form-group">

                  <label htmlFor="department">
                    Department
                  </label>

                  <select
                    id="department"
                    value={department}
                    onChange={(e) =>
                      setDepartment(e.target.value)
                    }
                  >

                    <option value="">
                      Select Department
                    </option>

                    <option value="All">
                      All
                    </option>

                    <option value="Computer Science">
                      Computer Science
                    </option>

                    <option value="Information Technology">
                      Information Technology
                    </option>

                    <option value="Electronics">
                      Electronics
                    </option>

                  </select>

                </div>

              </div>


              {/* Pass / Fail */}
              <div className="col-md-4">

                <div className="admin-form-group">

                  <label htmlFor="status">
                    Result Status
                  </label>

                  <select
                    id="status"
                    value={status}
                    onChange={(e) =>
                      setStatus(e.target.value)
                    }
                  >

                    <option value="">
                      Select Result
                    </option>

                    <option value="All">
                      All
                    </option>

                    <option value="Passed">
                      Passed
                    </option>

                    <option value="Failed">
                      Failed
                    </option>

                  </select>

                </div>

              </div>

            </div>


            {/* Search Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "10px",
              }}
            >

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSearch}
              >

                <span className="material-icons">
                  search
                </span>

                Search

              </button>

            </div>

          </div>

        </div>


        {/* Student Results */}
        <div className="card">

          <div className="card-header">

            <h4 className="card-title">
              Student Results
            </h4>

          </div>

          <div className="card-body">

            {students.length === 0 ? (

              <div className="admin-empty">

                <span className="material-icons">
                  assessment
                </span>

                <p>
                  No student results found.
                  Select filters and click Search.
                </p>

              </div>

            ) : (

              <div className="table-responsive">

                <table className="table table-hover">

                  <thead>

                    <tr>
                      <th>S.No</th>
                      <th>Register No</th>
                      <th>Student Name</th>
                      <th>Department</th>
                      <th>Test Type</th>
                      <th>Score</th>
                      <th>Status</th>
                    </tr>

                  </thead>

                  <tbody>

                    {students.map((student, index) => (

                      <tr key={student.id}>

                        <td>
                          {index + 1}
                        </td>

                        <td>
                          {student.registerNo}
                        </td>

                        <td>
                          {student.name}
                        </td>

                        <td>
                          {student.department}
                        </td>

                        <td>
                          <span className="badge badge-primary">
                            {student.testType}
                          </span>
                        </td>

                        <td>
                          <strong>
                            {student.score}%
                          </strong>
                        </td>

                        <td>

                          <span
                            className={`badge ${
                              student.status === "Passed"
                                ? "badge-success"
                                : "badge-danger"
                            }`}
                          >
                            {student.status}
                          </span>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </div>

      </div>

    </AdminLayout>
  );
}

export default StudentReport;

