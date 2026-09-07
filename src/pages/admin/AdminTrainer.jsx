import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { initialTrainers, departments } from "../../data/adminData";

import "../../css/dashboard.css";
import "../../css/theme.css";
import "../../css/admin.css";

function AdminTrainer() {

  const [trainers, setTrainers] = useState(initialTrainers);
  const [view, setView] = useState("list"); // "list" | "detail" | "form"
  const [selectedId, setSelectedId] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    department: departments[0],
    phone: "",
    address: "",
  });

  const selectedTrainer = trainers.find((trainer) => trainer.id === selectedId);

  function resetForm() {
    setForm({ name: "", department: departments[0], phone: "", address: "" });
    setEditingId(null);
  }

  function openCreateForm() {
    resetForm();
    setView("form");
  }

  function openEditForm(trainer) {
    setForm({
      name: trainer.name,
      department: trainer.department,
      phone: trainer.phone,
      address: trainer.address,
    });
    setEditingId(trainer.id);
    setView("form");
  }

  function openDetail(trainer) {
    setSelectedId(trainer.id);
    setView("detail");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSave(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim()) {
      return;
    }

    if (editingId) {
      setTrainers((previous) =>
        previous.map((trainer) =>
          trainer.id === editingId ? { ...trainer, ...form } : trainer
        )
      );
    } else {
      setTrainers((previous) => [
        ...previous,
        { id: Date.now(), ...form },
      ]);
    }

    resetForm();
    setView("list");
  }

  function handleDelete(id) {
    setTrainers((previous) => previous.filter((trainer) => trainer.id !== id));
  }

  return (
    <AdminLayout>

      <div className="admin-page">

        {view === "list" && (
          <>
            <div className="admin-page-header">

              <div>
                <h2>Trainer</h2>
                <p>Trainers on staff, by name and department.</p>
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

                    {trainers.length === 0 ? (
                      <div className="admin-empty">
                        <span className="material-icons">badge</span>
                        <p>No trainers yet. Click Create to add one.</p>
                      </div>
                    ) : (
                      <table className="table table-hover">

                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {trainers.map((trainer) => (
                            <tr
                              key={trainer.id}
                              className="admin-row-clickable"
                              onClick={() => openDetail(trainer)}
                            >
                              <td>{trainer.name}</td>
                              <td>
                                <span className="badge badge-primary">{trainer.department}</span>
                              </td>
                              <td onClick={(event) => event.stopPropagation()}>
                                <div className="admin-table-actions">
                                  <button
                                    type="button"
                                    className="admin-icon-btn"
                                    onClick={() => openEditForm(trainer)}
                                    aria-label="Edit trainer"
                                  >
                                    <span className="material-icons">edit</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="admin-icon-btn"
                                    onClick={() => handleDelete(trainer.id)}
                                    aria-label="Delete trainer"
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


        {view === "detail" && selectedTrainer && (
          <>
            <button
              type="button"
              className="admin-back-link"
              onClick={() => setView("list")}
            >
              <span className="material-icons">arrow_back</span>
              Back to Trainers
            </button>

            <div className="row">
              <div className="col-lg-6">

                <div className="card">

                  <div className="card-body">

                    <div className="admin-detail-header">

                      <div className="admin-detail-avatar">
                        {selectedTrainer.name.charAt(0)}
                      </div>

                      <div>
                        <h4 style={{ margin: 0 }}>{selectedTrainer.name}</h4>
                        <span className="badge badge-primary">
                          {selectedTrainer.department}
                        </span>
                      </div>

                    </div>

                    <div className="admin-detail-row">
                      <span className="material-icons">person</span>
                      <span className="admin-detail-label">Name</span>
                      <span className="admin-detail-value">{selectedTrainer.name}</span>
                    </div>

                    <div className="admin-detail-row">
                      <span className="material-icons">call</span>
                      <span className="admin-detail-label">Phone</span>
                      <span className="admin-detail-value">{selectedTrainer.phone}</span>
                    </div>

                    <div className="admin-detail-row">
                      <span className="material-icons">home</span>
                      <span className="admin-detail-label">Address</span>
                      <span className="admin-detail-value">{selectedTrainer.address}</span>
                    </div>

                    <div className="admin-form-actions">
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => openEditForm(selectedTrainer)}
                      >
                        Edit
                      </button>
                    </div>

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
              Back to Trainers
            </button>

            <div className="row">
              <div className="col-lg-6">

                <div className="card">

                  <div className="card-header">
                    <h4 className="card-title">
                      {editingId ? "Edit Trainer" : "Create Trainer"}
                    </h4>
                  </div>

                  <div className="card-body">

                    <form onSubmit={handleSave}>

                      <div className="admin-form-group">
                        <label htmlFor="trainer-name">Name</label>
                        <input
                          id="trainer-name"
                          name="name"
                          type="text"
                          placeholder="Trainer name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="trainer-department">Department</label>
                        <select
                          id="trainer-department"
                          name="department"
                          value={form.department}
                          onChange={handleChange}
                        >
                          {departments.map((department) => (
                            <option key={department} value={department}>
                              {department}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="trainer-phone">Phone</label>
                        <input
                          id="trainer-phone"
                          name="phone"
                          type="tel"
                          placeholder="10-digit phone number"
                          value={form.phone}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="admin-form-group">
                        <label htmlFor="trainer-address">Address</label>
                        <input
                          id="trainer-address"
                          name="address"
                          type="text"
                          placeholder="City, State"
                          value={form.address}
                          onChange={handleChange}
                        />
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

export default AdminTrainer;
