import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { initialAllocations, initialTrainers, batches, statuses } from "../../data/adminData";

import "../../css/dashboard.css";
import "../../css/theme.css";
import "../../css/admin.css";

const statusBadge = {
  Active: "badge-success",
  Completed: "badge-primary",
  "On Hold": "badge-warning",
  Dropped: "badge-danger",
};

function AdminAllocate() {

  const [allocations, setAllocations] = useState(initialAllocations);
  const [view, setView] = useState("list"); // "list" | "form"
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    trainer: initialTrainers[0]?.name || "",
    batch: batches[0],
    startDate: "",
    endDate: "",
    status: statuses[0],
  });

  function resetForm() {
    setForm({
      trainer: initialTrainers[0]?.name || "",
      batch: batches[0],
      startDate: "",
      endDate: "",
      status: statuses[0],
    });
    setEditingId(null);
  }

  function openCreateForm() {
    resetForm();
    setView("form");
  }

  function openEditForm(allocation) {
    setForm({
      trainer: allocation.trainer,
      batch: allocation.batch,
      startDate: allocation.startDate,
      endDate: allocation.endDate,
      status: allocation.status,
    });
    setEditingId(allocation.id);
    setView("form");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSave(event) {
    event.preventDefault();

    if (!form.trainer || !form.startDate || !form.endDate) {
      return;
    }

    if (editingId) {
      setAllocations((previous) =>
        previous.map((allocation) =>
          allocation.id === editingId ? { ...allocation, ...form } : allocation
        )
      );
    } else {
      setAllocations((previous) => [
        ...previous,
        { id: Date.now(), ...form },
      ]);
    }

    resetForm();
    setView("list");
  }

  function handleDelete(id) {
    setAllocations((previous) => previous.filter((allocation) => allocation.id !== id));
  }

  return (
    <AdminLayout>

      <div className="admin-page">

        {view === "list" && (
          <>
            <div className="admin-page-header">

              <div>
                <h2>Allocate</h2>
                <p>Trainers allocated to each batch.</p>
              </div>

              <button
                type="button"
                className="btn btn-primary admin-create-btn"
                onClick={openCreateForm}
              >
                <span className="material-icons">add</span>
                Create
              </button>

            </div>

            <div className="row">
              <div className="col-lg-12">

                <div className="card">

                  <div className="card-body">

                    {allocations.length === 0 ? (
                      <div className="admin-empty">
                        <span className="material-icons">event_available</span>
                        <p>No allocations yet. Click Create to add one.</p>
                      </div>
                    ) : (
                      <table className="table table-hover">

                        <thead>
                          <tr>
                            <th>Trainer</th>
                            <th>Batch</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {allocations.map((allocation) => (
                            <tr key={allocation.id}>
                              <td>{allocation.trainer}</td>
                              <td>{allocation.batch}</td>
                              <td>{allocation.startDate}</td>
                              <td>{allocation.endDate}</td>
                              <td>
                                <span className={`badge ${statusBadge[allocation.status] || "badge-info"}`}>
                                  {allocation.status}
                                </span>
                              </td>
                              <td>
                                <div className="admin-table-actions">
                                  <button
                                    type="button"
                                    className="admin-icon-btn"
                                    onClick={() => openEditForm(allocation)}
                                    aria-label="Edit allocation"
                                  >
                                    <span className="material-icons">edit</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="admin-icon-btn"
                                    onClick={() => handleDelete(allocation.id)}
                                    aria-label="Delete allocation"
                                  >
                                    <span className="material-icons">delete</span>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      </table>
                    )}

                  </div>

                </div>

              </div>
            </div>
          </>
        )}


        {view === "form" && (
          <>
            <button
              type="button"
              className="admin-back-link"
              onClick={() => { resetForm(); setView("list"); }}
            >
              <span className="material-icons">arrow_back</span>
              Back to Allocations
            </button>

            <div className="row">
              <div className="col-lg-6">

                <div className="card">

                  <div className="card-header">
                    <h4 className="card-title">
                      {editingId ? "Edit Allocation" : "Create Allocation"}
                    </h4>
                  </div>

                  <div className="card-body">

                    <form onSubmit={handleSave}>

                      <div className="row">

                        <div className="col-md-6">
                          <div className="admin-form-group">
                            <label htmlFor="allocate-trainer">Trainer</label>
                            <select
                              id="allocate-trainer"
                              name="trainer"
                              value={form.trainer}
                              onChange={handleChange}
                            >
                              {initialTrainers.map((trainer) => (
                                <option key={trainer.id} value={trainer.name}>
                                  {trainer.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="admin-form-group">
                            <label htmlFor="allocate-batch">Student Batch</label>
                            <select
                              id="allocate-batch"
                              name="batch"
                              value={form.batch}
                              onChange={handleChange}
                            >
                              {batches.map((batch) => (
                                <option key={batch} value={batch}>
                                  {batch}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                      </div>

                      <div className="row">

                        <div className="col-md-6">
                          <div className="admin-form-group">
                            <label htmlFor="allocate-start">Start Date</label>
                            <input
                              id="allocate-start"
                              name="startDate"
                              type="date"
                              value={form.startDate}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="admin-form-group">
                            <label htmlFor="allocate-end">End Date</label>
                            <input
                              id="allocate-end"
                              name="endDate"
                              type="date"
                              value={form.endDate}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="allocate-status">Status</label>
                        <select
                          id="allocate-status"
                          name="status"
                          value={form.status}
                          onChange={handleChange}
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>
                              {status}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="admin-form-actions">
                        <button type="submit" className="btn btn-primary">
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn btn-light"
                          onClick={() => { resetForm(); setView("list"); }}
                        >
                          Cancel
                        </button>
                      </div>

                    </form>

                  </div>

                </div>

              </div>
            </div>
          </>
        )}

      </div>

    </AdminLayout>
  );
}

export default AdminAllocate;
