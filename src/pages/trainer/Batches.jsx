import { useState } from "react";
import "../../css/batches.css";

function Batches() {

  // Temporary batch data
  // Later this data will come from the backend/database

  const batchesData = [
    {
      id: 1,
      name: "Batch A",
      course: "React Development",
      trainer: "Trainer",
      students: 5,
      startDate: "2026-08-01",
      endDate: "2026-10-31",
      status: "Active",
    },
    {
      id: 2,
      name: "Batch B",
      course: "Java Development",
      trainer: "Trainer",
      students: 5,
      startDate: "2026-07-15",
      endDate: "2026-10-15",
      status: "Active",
    },
    {
      id: 3,
      name: "Batch C",
      course: "Python Development",
      trainer: "Trainer",
      students: 5,
      startDate: "2026-06-01",
      endDate: "2026-09-30",
      status: "Active",
    },
    {
      id: 4,
      name: "Batch D",
      course: "Full Stack Development",
      trainer: "Trainer",
      students: 5,
      startDate: "2026-05-01",
      endDate: "2026-08-31",
      status: "Completed",
    },
    {
      id: 5,
      name: "Batch E",
      course: "Web Development",
      trainer: "Trainer",
      students: 5,
      startDate: "2026-04-01",
      endDate: "2026-07-31",
      status: "Completed",
    },
  ];


  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");


  // Filter batches

  const filteredBatches = batchesData.filter((batch) => {

    const searchValue = search.toLowerCase();

    const matchesSearch =
      batch.name.toLowerCase().includes(searchValue) ||
      batch.course.toLowerCase().includes(searchValue) ||
      batch.trainer.toLowerCase().includes(searchValue);

    const matchesStatus =
      selectedStatus === "All" ||
      batch.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });


  return (
    <div className="batches-page">

      {/* ================================
          PAGE HEADER
      ================================= */}

      <div className="batches-header">

        <div>

          <h2>
            Batches
          </h2>

          <p>
            View and manage the batches assigned to you.
          </p>

        </div>

      </div>


      {/* ================================
          SUMMARY CARDS
      ================================= */}

      <div className="batches-summary">


        {/* Total Batches */}

        <div className="batch-summary-card total-batch-card">

          <div className="batch-summary-icon">

            <span className="material-icons">
              class
            </span>

          </div>

          <div>

            <h3>
              {batchesData.length}
            </h3>

            <p>
              Total Batches
            </p>

          </div>

        </div>


        {/* Active Batches */}

        <div className="batch-summary-card active-batch-card">

          <div className="batch-summary-icon">

            <span className="material-icons">
              play_circle
            </span>

          </div>

          <div>

            <h3>
              {
                batchesData.filter(
                  (batch) =>
                    batch.status === "Active"
                ).length
              }
            </h3>

            <p>
              Active Batches
            </p>

          </div>

        </div>


        {/* Completed Batches */}

        <div className="batch-summary-card completed-batch-card">

          <div className="batch-summary-icon">

            <span className="material-icons">
              check_circle
            </span>

          </div>

          <div>

            <h3>
              {
                batchesData.filter(
                  (batch) =>
                    batch.status === "Completed"
                ).length
              }
            </h3>

            <p>
              Completed Batches
            </p>

          </div>

        </div>


        {/* Total Students */}

        <div className="batch-summary-card students-batch-card">

          <div className="batch-summary-icon">

            <span className="material-icons">
              groups
            </span>

          </div>

          <div>

            <h3>
              {
                batchesData.reduce(
                  (total, batch) =>
                    total + batch.students,
                  0
                )
              }
            </h3>

            <p>
              Total Students
            </p>

          </div>

        </div>

      </div>


      {/* ================================
          FILTERS
      ================================= */}

      <div className="batches-filter-card">

        <div className="batches-filter">


          {/* Search */}

          <div className="batch-filter-group">

            <label>
              Search Batch
            </label>

            <div className="batch-search-box">

              <span className="material-icons">
                search
              </span>

              <input
                type="text"
                placeholder="Search by batch, course or trainer"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
              />

            </div>

          </div>


          {/* Status */}

          <div className="batch-filter-group">

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

              <option value="Completed">
                Completed
              </option>

            </select>

          </div>

        </div>

      </div>


      {/* ================================
          BATCH TABLE
      ================================= */}

      <div className="batches-table-card">


        {/* Table Header */}

        <div className="batches-table-header">

          <div>

            <h4>
              Batch List
            </h4>

            <span>
              {filteredBatches.length} batch
              {filteredBatches.length !== 1 ? "es" : ""}
            </span>

          </div>

        </div>


        {/* Table */}

        <div className="batches-table-wrapper">

          <table className="batches-table">

            <thead>

              <tr>

                <th>
                  #
                </th>

                <th>
                  Batch
                </th>

                <th>
                  Course
                </th>

                <th>
                  Trainer
                </th>

                <th>
                  Students
                </th>

                <th>
                  Start Date
                </th>

                <th>
                  End Date
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

              {filteredBatches.length > 0 ? (

                filteredBatches.map(
                  (batch, index) => (

                    <tr key={batch.id}>


                      {/* Number */}

                      <td>
                        {index + 1}
                      </td>


                      {/* Batch Name */}

                      <td>

                        <div className="batch-name-cell">

                          <div className="batch-icon">

                            <span className="material-icons">
                              class
                            </span>

                          </div>

                          <strong>
                            {batch.name}
                          </strong>

                        </div>

                      </td>


                      {/* Course */}

                      <td>
                        {batch.course}
                      </td>


                      {/* Trainer */}

                      <td>

                        <div className="batch-trainer-cell">

                          <div className="batch-trainer-avatar">
                            T
                          </div>

                          <span>
                            {batch.trainer}
                          </span>

                        </div>

                      </td>


                      {/* Students */}

                      <td>

                        <div className="batch-students-cell">

                          <span className="material-icons">
                            groups
                          </span>

                          <span>
                            {batch.students}
                          </span>

                        </div>

                      </td>


                      {/* Start Date */}

                      <td>
                        {batch.startDate}
                      </td>


                      {/* End Date */}

                      <td>
                        {batch.endDate}
                      </td>


                      {/* Status */}

                      <td>

                        <span
                          className={`batch-status ${
                            batch.status === "Active"
                              ? "batch-status-active"
                              : "batch-status-completed"
                          }`}
                        >

                          {batch.status}

                        </span>

                      </td>


                      {/* Action */}

                      <td>

                        <button
                          type="button"
                          className="batch-view-button"
                          title="View Batch"
                        >

                          <span className="material-icons">
                            visibility
                          </span>

                        </button>

                      </td>

                    </tr>

                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="9"
                    className="batches-no-data"
                  >

                    <span className="material-icons">
                      search_off
                    </span>

                    <p>
                      No batches found.
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

export default Batches;