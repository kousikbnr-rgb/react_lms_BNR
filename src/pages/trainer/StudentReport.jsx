import { useState } from "react";
import "../../css/student-report.css";

function StudentReport() {

  /* =========================================
     BATCH + STUDENT DATA
     ========================================= */

  const batches = [
    {
      id: "batch-a",
      name: "Batch A",
      students: [
        { id: 1, name: "John" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Priya" },
        { id: 4, name: "Arun" },
        { id: 5, name: "Anitha" },
      ],
    },

    {
      id: "batch-b",
      name: "Batch B",
      students: [
        { id: 6, name: "Kiran" },
        { id: 7, name: "Vishnu" },
        { id: 8, name: "Meera" },
        { id: 9, name: "Sneha" },
        { id: 10, name: "Akhil" },
      ],
    },

    {
      id: "batch-c",
      name: "Batch C",
      students: [
        { id: 11, name: "Ravi" },
        { id: 12, name: "Neha" },
        { id: 13, name: "Manu" },
        { id: 14, name: "Divya" },
        { id: 15, name: "Sanjay" },
      ],
    },

    {
      id: "batch-d",
      name: "Batch D",
      students: [
        { id: 16, name: "Amal" },
        { id: 17, name: "Fahad" },
        { id: 18, name: "Asha" },
        { id: 19, name: "Nikhil" },
        { id: 20, name: "Reshma" },
      ],
    },

    {
      id: "batch-e",
      name: "Batch E",
      students: [
        { id: 21, name: "Vivek" },
        { id: 22, name: "Anu" },
        { id: 23, name: "Rahul" },
        { id: 24, name: "Maya" },
        { id: 25, name: "Sree" },
      ],
    },
  ];


  /* =========================================
     STATE
     ========================================= */

  const [selectedBatch, setSelectedBatch] = useState("");

  const [selectedStudent, setSelectedStudent] = useState("");

  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const [reportData, setReportData] = useState([]);

  const [searched, setSearched] = useState(false);

  const [message, setMessage] = useState("");


  /* =========================================
     GET SELECTED BATCH
     ========================================= */

  const currentBatch = batches.find(
    (batch) => batch.id === selectedBatch
  );


  /* =========================================
     HANDLE BATCH CHANGE
     ========================================= */

  function handleBatchChange(e) {

    setSelectedBatch(e.target.value);

    /*
      When batch changes, clear the
      previously selected student.
    */

    setSelectedStudent("");

    setReportData([]);

    setSearched(false);

    setMessage("");
  }


  /* =========================================
     SEARCH STUDENT REPORT
     ========================================= */

  function handleSearch() {

    if (!selectedBatch) {

      setMessage("Please select a batch.");

      setReportData([]);

      setSearched(false);

      return;
    }


    if (!selectedStudent) {

      setMessage("Please select a student.");

      setReportData([]);

      setSearched(false);

      return;
    }


    if (!fromDate || !toDate) {

      setMessage("Please select both dates.");

      setReportData([]);

      setSearched(false);

      return;
    }


    if (fromDate > toDate) {

      setMessage(
        "From date cannot be after To date."
      );

      setReportData([]);

      setSearched(false);

      return;
    }


    /* =====================================
       GET SAVED ATTENDANCE
       ===================================== */

    const storedAttendance = JSON.parse(
      localStorage.getItem("trainerAttendance") || "[]"
    );


    /* =====================================
       FILTER ATTENDANCE
       ===================================== */

    const filteredRecords = storedAttendance.filter(
      (record) =>
        record.batchId === selectedBatch &&
        record.date >= fromDate &&
        record.date <= toDate &&
        record.attendance[selectedStudent]
    );


    setReportData(filteredRecords);

    setSearched(true);

    setMessage("");
  }


  /* =========================================
     SELECTED STUDENT
     ========================================= */

  const student = currentBatch?.students.find(
    (item) =>
      item.id.toString() === selectedStudent
  );


  /* =========================================
     CALCULATE SUMMARY
     ========================================= */

  let presentCount = 0;

  let absentCount = 0;

  let leaveCount = 0;


  reportData.forEach((record) => {

    const status =
      record.attendance[selectedStudent];


    if (status === "Present") {
      presentCount++;
    }

    if (status === "Absent") {
      absentCount++;
    }

    if (status === "Leave") {
      leaveCount++;
    }

  });


  const totalDays =
    presentCount +
    absentCount +
    leaveCount;


  const attendancePercentage =
    totalDays > 0
      ? Math.round(
          (presentCount / totalDays) * 100
        )
      : 0;


  /* =========================================
     RETURN
     ========================================= */

  return (
    <div className="student-report-page">


      {/* =====================================
          PAGE HEADING
          ===================================== */}

      <div className="student-report-heading">

        <h2>
          Student Report
        </h2>

        <p>
          View attendance records for an individual student.
        </p>

      </div>


      {/* =====================================
          FILTER CARD
          ===================================== */}

      <div className="student-report-filter-card">

        <div className="student-report-filter-row">


          {/* BATCH */}

          <div className="student-report-form-group">

            <label htmlFor="studentReportBatch">
              Select Batch
            </label>

            <select
              id="studentReportBatch"
              value={selectedBatch}
              onChange={handleBatchChange}
            >

              <option value="">
                Select Batch
              </option>

              {batches.map((batch) => (

                <option
                  key={batch.id}
                  value={batch.id}
                >
                  {batch.name}
                </option>

              ))}

            </select>

          </div>


          {/* STUDENT */}

          <div className="student-report-form-group">

            <label htmlFor="studentReportStudent">
              Select Student
            </label>

            <select
              id="studentReportStudent"
              value={selectedStudent}
              onChange={(e) => {

                setSelectedStudent(e.target.value);

                setReportData([]);

                setSearched(false);

                setMessage("");

              }}
              disabled={!selectedBatch}
            >

              <option value="">
                {selectedBatch
                  ? "Select Student"
                  : "Select Batch First"}
              </option>


              {currentBatch?.students.map(
                (item) => (

                  <option
                    key={item.id}
                    value={item.id}
                  >
                    {item.name}
                  </option>

                )
              )}

            </select>

          </div>


          {/* FROM DATE */}

          <div className="student-report-form-group">

            <label htmlFor="studentFromDate">
              From
            </label>

            <input
              type="date"
              id="studentFromDate"
              value={fromDate}
              onChange={(e) => {

                setFromDate(e.target.value);

                setMessage("");

              }}
            />

          </div>


          {/* TO DATE */}

          <div className="student-report-form-group">

            <label htmlFor="studentToDate">
              To
            </label>

            <input
              type="date"
              id="studentToDate"
              value={toDate}
              onChange={(e) => {

                setToDate(e.target.value);

                setMessage("");

              }}
            />

          </div>


          {/* SEARCH */}

          <div className="student-report-button-wrapper">

            <button
              type="button"
              className="student-report-search-btn"
              onClick={handleSearch}
            >

              <span className="material-icons">
                search
              </span>

              Search

            </button>

          </div>

        </div>


        {/* MESSAGE */}

        {message && (

          <div className="student-report-message">
            {message}
          </div>

        )}

      </div>


      {/* =====================================
          REPORT
          ===================================== */}

      {searched && (

        <>

          {/* =================================
              STUDENT INFORMATION
              ================================= */}

          <div className="student-report-profile-card">

            <div className="student-report-profile-icon">

              <span className="material-icons">
                person
              </span>

            </div>


            <div className="student-report-profile-info">

              <h3>
                {student?.name}
              </h3>

              <p>
                {currentBatch?.name}
              </p>

            </div>


            <div className="student-report-date-range">

              <span>
                {fromDate}
              </span>

              <span>
                to
              </span>

              <span>
                {toDate}
              </span>

            </div>

          </div>


          {/* =================================
              SUMMARY
              ================================= */}

          <div className="student-report-summary">


            <div className="student-summary-card">

              <span className="material-icons">
                calendar_month
              </span>

              <div>

                <strong>
                  {totalDays}
                </strong>

                <p>
                  Total Days
                </p>

              </div>

            </div>


            <div className="student-summary-card present">

              <span className="material-icons">
                check_circle
              </span>

              <div>

                <strong>
                  {presentCount}
                </strong>

                <p>
                  Present
                </p>

              </div>

            </div>


            <div className="student-summary-card absent">

              <span className="material-icons">
                cancel
              </span>

              <div>

                <strong>
                  {absentCount}
                </strong>

                <p>
                  Absent
                </p>

              </div>

            </div>


            <div className="student-summary-card leave">

              <span className="material-icons">
                event_busy
              </span>

              <div>

                <strong>
                  {leaveCount}
                </strong>

                <p>
                  Leave
                </p>

              </div>

            </div>


            <div className="student-summary-card percentage">

              <span className="material-icons">
                pie_chart
              </span>

              <div>

                <strong>
                  {attendancePercentage}%
                </strong>

                <p>
                  Attendance
                </p>

              </div>

            </div>

          </div>


          {/* =================================
              ATTENDANCE TABLE
              ================================= */}

          <div className="student-report-table-card">

            <div className="student-report-table-header">

              <div>

                <h3>
                  Attendance History
                </h3>

                <p>
                  {student?.name} — {currentBatch?.name}
                </p>

              </div>

            </div>


            {reportData.length > 0 ? (

              <div className="student-report-table-wrapper">

                <table className="student-report-table">

                  <thead>

                    <tr>

                      <th>
                        #
                      </th>

                      <th>
                        Date
                      </th>

                      <th>
                        Status
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {reportData.map(
                      (record, index) => {

                        const status =
                          record.attendance[
                            selectedStudent
                          ];


                        return (

                          <tr
                            key={`${record.date}-${index}`}
                          >

                            <td>
                              {index + 1}
                            </td>

                            <td>
                              {record.date}
                            </td>

                            <td>

                              <span
                                className={`student-report-status ${status.toLowerCase()}`}
                              >
                                {status}
                              </span>

                            </td>

                          </tr>

                        );

                      }
                    )}

                  </tbody>

                </table>

              </div>

            ) : (

              <div className="student-no-report-data">

                <span className="material-icons">
                  event_busy
                </span>

                <h4>
                  No attendance records found
                </h4>

                <p>
                  No attendance has been saved for
                  this student during the selected
                  date range.
                </p>

              </div>

            )}

          </div>

        </>

      )}

    </div>
  );
}

export default StudentReport;