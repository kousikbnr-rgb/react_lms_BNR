import { useState } from "react";
import "../../css/attendance.css";

function Attendance() {

  /* =========================================
     BATCH DATA
     Temporary data for frontend development
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

  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [students, setStudents] = useState([]);

  const [attendance, setAttendance] = useState({});

  const [message, setMessage] = useState("");


  /* =========================================
     LOAD STUDENTS
     ========================================= */

  function handleLoadStudents() {

    if (!selectedBatch) {
      setMessage("Please select a batch.");
      return;
    }

    if (!selectedDate) {
      setMessage("Please select a date.");
      return;
    }

    const batch = batches.find(
      (item) => item.id === selectedBatch
    );

    if (!batch) {
      return;
    }

    setStudents(batch.students);

    /*
      Set every student as Present by default.
      Trainer only needs to change Absent/Leave.
    */

    const defaultAttendance = {};

    batch.students.forEach((student) => {
      defaultAttendance[student.id] = "Present";
    });

    setAttendance(defaultAttendance);

    setMessage("");
  }


  /* =========================================
     CHANGE ATTENDANCE
     ========================================= */

  function handleAttendanceChange(studentId, status) {

    setAttendance((previous) => ({
      ...previous,
      [studentId]: status,
    }));
  }


  /* =========================================
     SAVE ATTENDANCE
     ========================================= */

  function handleSaveAttendance() {

    if (students.length === 0) {
      setMessage("Please load the students first.");
      return;
    }

    const selectedBatchData = batches.find(
      (batch) => batch.id === selectedBatch
    );

    const existingAttendance = JSON.parse(
      localStorage.getItem("trainerAttendance") || "[]"
    );


    const attendanceRecord = {
      batchId: selectedBatch,
      batchName: selectedBatchData.name,
      date: selectedDate,
      attendance: attendance,
    };


    /*
      Remove existing record for the same
      batch and date before saving.
    */

    const updatedAttendance = existingAttendance.filter(
      (record) =>
        !(
          record.batchId === selectedBatch &&
          record.date === selectedDate
        )
    );


    updatedAttendance.push(attendanceRecord);


    localStorage.setItem(
      "trainerAttendance",
      JSON.stringify(updatedAttendance)
    );


    setMessage("Attendance saved successfully!");
  }


  /* =========================================
     GET CURRENT BATCH NAME
     ========================================= */

  const currentBatch = batches.find(
    (batch) => batch.id === selectedBatch
  );


  /* =========================================
     RETURN
     ========================================= */

  return (
    <div className="attendance-page">

      {/* =====================================
          PAGE HEADING
          ===================================== */}

      <div className="attendance-heading">

        <h2>
          Attendance
        </h2>

        <p>
          Mark and manage student attendance.
        </p>

      </div>


      {/* =====================================
          FILTER SECTION
          ===================================== */}

      <div className="attendance-filter-card">

        <div className="attendance-filter-row">


          {/* BATCH */}

          <div className="attendance-form-group">

            <label htmlFor="batch">
              Select Batch
            </label>

            <select
              id="batch"
              value={selectedBatch}
              onChange={(e) => {
                setSelectedBatch(e.target.value);
                setStudents([]);
                setAttendance({});
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


          {/* DATE */}

          <div className="attendance-form-group">

            <label htmlFor="attendanceDate">
              Select Date
            </label>

            <input
              type="date"
              id="attendanceDate"
              value={selectedDate}
              onChange={(e) => {
                setSelectedDate(e.target.value);
                setMessage("");
              }}
            />

          </div>


          {/* LOAD BUTTON */}

          <div className="attendance-button-wrapper">

            <button
              type="button"
              className="load-students-btn"
              onClick={handleLoadStudents}
            >
              <span className="material-icons">
                search
              </span>

              Load Students
            </button>

          </div>

        </div>


        {/* MESSAGE */}

        {message && (
          <div className="attendance-message">
            {message}
          </div>
        )}

      </div>


      {/* =====================================
          STUDENT LIST
          ===================================== */}

      {students.length > 0 && (

        <div className="attendance-students-card">


          {/* CARD HEADER */}

          <div className="attendance-card-header">

            <div>

              <h3>
                {currentBatch?.name}
              </h3>

              <p>
                {students.length} Students
              </p>

            </div>

            <span>
              {selectedDate}
            </span>

          </div>


          {/* TABLE */}

          <div className="attendance-table-wrapper">

            <table className="attendance-table">

              <thead>

                <tr>

                  <th>
                    #
                  </th>

                  <th>
                    Student Name
                  </th>

                  <th>
                    Attendance
                  </th>

                </tr>

              </thead>


              <tbody>

                {students.map((student, index) => (

                  <tr key={student.id}>

                    <td>
                      {index + 1}
                    </td>

                    <td>
                      <div className="student-name">
                        {student.name}
                      </div>
                    </td>

                    <td>

                      <select
                        className={`attendance-status ${
                          attendance[student.id]?.toLowerCase()
                        }`}
                        value={
                          attendance[student.id] || "Present"
                        }
                        onChange={(e) =>
                          handleAttendanceChange(
                            student.id,
                            e.target.value
                          )
                        }
                      >

                        <option value="Present">
                          Present
                        </option>

                        <option value="Absent">
                          Absent
                        </option>

                        <option value="Leave">
                          Leave
                        </option>

                      </select>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


          {/* SAVE */}

          <div className="attendance-save-section">

            <button
              type="button"
              className="save-attendance-btn"
              onClick={handleSaveAttendance}
            >

              <span className="material-icons">
                save
              </span>

              Save Attendance

            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Attendance;