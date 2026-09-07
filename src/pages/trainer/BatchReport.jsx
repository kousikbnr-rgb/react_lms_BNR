import { useState } from "react";
import "../../css/batch-report.css";

function BatchReport() {

  /* =========================================
     BATCH DATA
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

  const [fromDate, setFromDate] = useState("");

  const [toDate, setToDate] = useState("");

  const [reportData, setReportData] = useState([]);

  const [searched, setSearched] = useState(false);

  const [message, setMessage] = useState("");


  /* =========================================
     SEARCH REPORT
     ========================================= */

  function handleSearch() {

    if (!selectedBatch) {
      setMessage("Please select a batch.");
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
      setMessage("From date cannot be after To date.");
      setReportData([]);
      setSearched(false);
      return;
    }


    const storedAttendance = JSON.parse(
      localStorage.getItem("trainerAttendance") || "[]"
    );


    const filteredRecords = storedAttendance.filter(
      (record) =>
        record.batchId === selectedBatch &&
        record.date >= fromDate &&
        record.date <= toDate
    );


    setReportData(filteredRecords);

    setSearched(true);

    setMessage("");
  }


  /* =========================================
     CURRENT BATCH
     ========================================= */

  const currentBatch = batches.find(
    (batch) => batch.id === selectedBatch
  );


  /* =========================================
     CREATE TABLE ROWS
     ========================================= */

  const tableRows = [];

  reportData.forEach((record) => {

    currentBatch?.students.forEach((student) => {

      tableRows.push({
        date: record.date,
        studentName: student.name,
        status:
          record.attendance[student.id] || "Not Marked",
      });

    });

  });


  /* =========================================
     SUMMARY
     ========================================= */

  let presentCount = 0;
  let absentCount = 0;
  let leaveCount = 0;

  tableRows.forEach((row) => {

    if (row.status === "Present") {
      presentCount++;
    }

    if (row.status === "Absent") {
      absentCount++;
    }

    if (row.status === "Leave") {
      leaveCount++;
    }

  });


  const totalRecords =
    presentCount +
    absentCount +
    leaveCount;


  const attendancePercentage =
    totalRecords > 0
      ? Math.round(
          (presentCount / totalRecords) * 100
        )
      : 0;


  /* =========================================
     RETURN
     ========================================= */

  return (
    <div className="batch-report-page">

      {/* =====================================
          HEADING
          ===================================== */}

      <div className="batch-report-heading">

        <h2>
          Batch Report
        </h2>

        <p>
          View attendance records for a selected batch.
        </p>

      </div>


      {/* =====================================
          FILTER CARD
          ===================================== */}

      <div className="batch-report-filter-card">

        <div className="batch-report-filter-row">


          {/* BATCH */}

          <div className="batch-report-form-group">

            <label htmlFor="reportBatch">
              Select Batch
            </label>

            <select
              id="reportBatch"
              value={selectedBatch}
              onChange={(e) => {
                setSelectedBatch(e.target.value);
                setReportData([]);
                setSearched(false);
                setMessage("");
              }}
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


          {/* FROM DATE */}

          <div className="batch-report-form-group">

            <label htmlFor="fromDate">
              From
            </label>

            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => {
                setFromDate(e.target.value);
                setMessage("");
              }}
            />

          </div>


          {/* TO DATE */}

          <div className="batch-report-form-group">

            <label htmlFor="toDate">
              To
            </label>

            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => {
                setToDate(e.target.value);
                setMessage("");
              }}
            />

          </div>


          {/* SEARCH */}

          <div className="batch-report-button-wrapper">

            <button
              type="button"
              className="batch-report-search-btn"
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
          <div className="batch-report-message">
            {message}
          </div>
        )}

      </div>


      {/* =====================================
          REPORT RESULT
          ===================================== */}

      {searched && (

        <>

          {/* =================================
              SUMMARY
              ================================= */}

          <div className="batch-report-summary">


            <div className="report-summary-card">

              <span className="material-icons">
                calendar_month
              </span>

              <div>

                <strong>
                  {reportData.length}
                </strong>

                <p>
                  Attendance Dates
                </p>

              </div>

            </div>


            <div className="report-summary-card present">

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


            <div className="report-summary-card absent">

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


            <div className="report-summary-card leave">

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


            <div className="report-summary-card percentage">

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
              TABLE
              ================================= */}

          <div className="batch-report-table-card">

            <div className="batch-report-table-header">

              <div>

                <h3>
                  {currentBatch?.name}
                </h3>

                <p>
                  {fromDate} to {toDate}
                </p>

              </div>

              <span>
                {currentBatch?.students.length || 0} Students
              </span>

            </div>


            {tableRows.length > 0 ? (

              <div className="batch-report-table-wrapper">

                <table className="batch-report-table">

                  <thead>

                    <tr>

                      <th>
                        #
                      </th>

                      <th>
                        Date
                      </th>

                      <th>
                        Student Name
                      </th>

                      <th>
                        Status
                      </th>

                    </tr>

                  </thead>


                  <tbody>

                    {tableRows.map((row, index) => (

                      <tr key={`${row.date}-${index}`}>

                        <td>
                          {index + 1}
                        </td>

                        <td>
                          {row.date}
                        </td>

                        <td>
                          <strong>
                            {row.studentName}
                          </strong>
                        </td>

                        <td>

                          <span
                            className={`report-status ${row.status.toLowerCase()}`}
                          >
                            {row.status}
                          </span>

                        </td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            ) : (

              <div className="no-report-data">

                <span className="material-icons">
                  event_busy
                </span>

                <h4>
                  No attendance records found
                </h4>

                <p>
                  No attendance has been saved for this
                  batch during the selected date range.
                </p>

              </div>

            )}

          </div>

        </>

      )}

    </div>
  );
}

export default BatchReport;