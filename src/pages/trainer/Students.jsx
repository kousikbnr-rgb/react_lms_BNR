import { useState } from "react";
import "../../css/students.css";

function Students() {

  // Temporary student data
  // Later this will come from the backend/database

  const studentsData = [
    {
      id: 1,
      name: "John",
      email: "john@gmail.com",
      batch: "Batch A",
      attendance: 95,
      status: "Active",
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@gmail.com",
      batch: "Batch A",
      attendance: 88,
      status: "Active",
    },
    {
      id: 3,
      name: "Priya",
      email: "priya@gmail.com",
      batch: "Batch A",
      attendance: 92,
      status: "Active",
    },
    {
      id: 4,
      name: "Arun",
      email: "arun@gmail.com",
      batch: "Batch A",
      attendance: 76,
      status: "Active",
    },
    {
      id: 5,
      name: "Anitha",
      email: "anitha@gmail.com",
      batch: "Batch A",
      attendance: 98,
      status: "Active",
    },

    {
      id: 6,
      name: "Kiran",
      email: "kiran@gmail.com",
      batch: "Batch B",
      attendance: 90,
      status: "Active",
    },
    {
      id: 7,
      name: "Vishnu",
      email: "vishnu@gmail.com",
      batch: "Batch B",
      attendance: 84,
      status: "Active",
    },
    {
      id: 8,
      name: "Meera",
      email: "meera@gmail.com",
      batch: "Batch B",
      attendance: 91,
      status: "Active",
    },
    {
      id: 9,
      name: "Sneha",
      email: "sneha@gmail.com",
      batch: "Batch B",
      attendance: 73,
      status: "Inactive",
    },
    {
      id: 10,
      name: "Akhil",
      email: "akhil@gmail.com",
      batch: "Batch B",
      attendance: 89,
      status: "Active",
    },

    {
      id: 11,
      name: "Ravi",
      email: "ravi@gmail.com",
      batch: "Batch C",
      attendance: 94,
      status: "Active",
    },
    {
      id: 12,
      name: "Neha",
      email: "neha@gmail.com",
      batch: "Batch C",
      attendance: 87,
      status: "Active",
    },
    {
      id: 13,
      name: "Manu",
      email: "manu@gmail.com",
      batch: "Batch C",
      attendance: 79,
      status: "Active",
    },
    {
      id: 14,
      name: "Divya",
      email: "divya@gmail.com",
      batch: "Batch C",
      attendance: 96,
      status: "Active",
    },
    {
      id: 15,
      name: "Sanjay",
      email: "sanjay@gmail.com",
      batch: "Batch C",
      attendance: 82,
      status: "Active",
    },

    {
      id: 16,
      name: "Amal",
      email: "amal@gmail.com",
      batch: "Batch D",
      attendance: 91,
      status: "Active",
    },
    {
      id: 17,
      name: "Fahad",
      email: "fahad@gmail.com",
      batch: "Batch D",
      attendance: 86,
      status: "Active",
    },
    {
      id: 18,
      name: "Asha",
      email: "asha@gmail.com",
      batch: "Batch D",
      attendance: 93,
      status: "Active",
    },
    {
      id: 19,
      name: "Nikhil",
      email: "nikhil@gmail.com",
      batch: "Batch D",
      attendance: 78,
      status: "Inactive",
    },
    {
      id: 20,
      name: "Reshma",
      email: "reshma@gmail.com",
      batch: "Batch D",
      attendance: 97,
      status: "Active",
    },

    {
      id: 21,
      name: "Vivek",
      email: "vivek@gmail.com",
      batch: "Batch E",
      attendance: 89,
      status: "Active",
    },
    {
      id: 22,
      name: "Anu",
      email: "anu@gmail.com",
      batch: "Batch E",
      attendance: 95,
      status: "Active",
    },
    {
      id: 23,
      name: "Rahul",
      email: "rahul2@gmail.com",
      batch: "Batch E",
      attendance: 81,
      status: "Active",
    },
    {
      id: 24,
      name: "Maya",
      email: "maya@gmail.com",
      batch: "Batch E",
      attendance: 90,
      status: "Active",
    },
    {
      id: 25,
      name: "Sree",
      email: "sree@gmail.com",
      batch: "Batch E",
      attendance: 75,
      status: "Inactive",
    },
  ];


  const [search, setSearch] = useState("");
  const [selectedBatch, setSelectedBatch] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");


  // Filter students

  const filteredStudents = studentsData.filter((student) => {

    const searchValue = search.toLowerCase();

    const matchesSearch =
      student.name.toLowerCase().includes(searchValue) ||
      student.email.toLowerCase().includes(searchValue);

    const matchesBatch =
      selectedBatch === "All" ||
      student.batch === selectedBatch;

    const matchesStatus =
      selectedStatus === "All" ||
      student.status === selectedStatus;

    return (
      matchesSearch &&
      matchesBatch &&
      matchesStatus
    );
  });


  return (
    <div className="students-page">

      {/* Page Header */}

      <div className="students-header">

        <div>
          <h2>Students</h2>

          <p>
            View and manage students assigned to your batches.
          </p>
        </div>

      </div>


      {/* Summary Cards */}

      <div className="students-summary">

        <div className="student-summary-card total-students">

          <div className="student-summary-icon">
            <span className="material-icons">
              groups
            </span>
          </div>

          <div>
            <h3>{studentsData.length}</h3>
            <p>Total Students</p>
          </div>

        </div>


        <div className="student-summary-card active-students">

          <div className="student-summary-icon">
            <span className="material-icons">
              person
            </span>
          </div>

          <div>
            <h3>
              {
                studentsData.filter(
                  (student) =>
                    student.status === "Active"
                ).length
              }
            </h3>

            <p>Active Students</p>
          </div>

        </div>


        <div className="student-summary-card inactive-students">

          <div className="student-summary-icon">
            <span className="material-icons">
              person_off
            </span>
          </div>

          <div>
            <h3>
              {
                studentsData.filter(
                  (student) =>
                    student.status === "Inactive"
                ).length
              }
            </h3>

            <p>Inactive Students</p>
          </div>

        </div>


        <div className="student-summary-card batches-count">

          <div className="student-summary-icon">
            <span className="material-icons">
              class
            </span>
          </div>

          <div>
            <h3>5</h3>
            <p>Total Batches</p>
          </div>

        </div>

      </div>


      {/* Filters */}

      <div className="students-filter-card">

        <div className="students-filter">

          {/* Search */}

          <div className="student-filter-group">

            <label>
              Search Student
            </label>

            <div className="student-search-box">

              <span className="material-icons">
                search
              </span>

              <input
                type="text"
                placeholder="Search by name or email"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>


          {/* Batch */}

          <div className="student-filter-group">

            <label>
              Batch
            </label>

            <select
              value={selectedBatch}
              onChange={(e) =>
                setSelectedBatch(e.target.value)
              }
            >

              <option value="All">
                All Batches
              </option>

              <option value="Batch A">
                Batch A
              </option>

              <option value="Batch B">
                Batch B
              </option>

              <option value="Batch C">
                Batch C
              </option>

              <option value="Batch D">
                Batch D
              </option>

              <option value="Batch E">
                Batch E
              </option>

            </select>

          </div>


          {/* Status */}

          <div className="student-filter-group">

            <label>
              Status
            </label>

            <select
              value={selectedStatus}
              onChange={(e) =>
                setSelectedStatus(e.target.value)
              }
            >

              <option value="All">
                All Status
              </option>

              <option value="Active">
                Active
              </option>

              <option value="Inactive">
                Inactive
              </option>

            </select>

          </div>

        </div>

      </div>


      {/* Student Table */}

      <div className="students-table-card">

        <div className="students-table-header">

          <div>

            <h4>
              Student List
            </h4>

            <span>
              {filteredStudents.length} student
              {filteredStudents.length !== 1 ? "s" : ""}
            </span>

          </div>

        </div>


        <div className="students-table-wrapper">

          <table className="students-table">

            <thead>

              <tr>

                <th>
                  #
                </th>

                <th>
                  Student
                </th>

                <th>
                  Email
                </th>

                <th>
                  Batch
                </th>

                <th>
                  Attendance
                </th>

                <th>
                  Status
                </th>

                <th>
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {filteredStudents.length > 0 ? (

                filteredStudents.map((student, index) => (

                  <tr key={student.id}>

                    <td>
                      {index + 1}
                    </td>


                    <td>

                      <div className="student-name-cell">

                        <div className="student-avatar">

                          {student.name
                            .charAt(0)
                            .toUpperCase()}

                        </div>

                        <strong>
                          {student.name}
                        </strong>

                      </div>

                    </td>


                    <td>
                      {student.email}
                    </td>


                    <td>
                      <span className="batch-badge">
                        {student.batch}
                      </span>
                    </td>


                    <td>

                      <div className="attendance-cell">

                        <div className="attendance-progress">

                          <div
                            className="attendance-progress-bar"
                            style={{
                              width: `${student.attendance}%`,
                            }}
                          ></div>

                        </div>

                        <span>
                          {student.attendance}%
                        </span>

                      </div>

                    </td>


                    <td>

                      <span
                        className={`student-status ${
                          student.status === "Active"
                            ? "status-active"
                            : "status-inactive"
                        }`}
                      >

                        {student.status}

                      </span>

                    </td>


                    <td>

                      <button
                        type="button"
                        className="student-view-button"
                        title="View Student"
                      >

                        <span className="material-icons">
                          visibility
                        </span>

                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="7"
                    className="students-no-data"
                  >

                    <span className="material-icons">
                      search_off
                    </span>

                    <p>
                      No students found.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Students;