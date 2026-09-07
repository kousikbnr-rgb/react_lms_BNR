import { useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { initialStudents, initialCourses, batches, statuses } from "../../data/adminData";

import "../../css/dashboard.css";
import "../../css/theme.css";
import "../../css/admin.css";

const statusBadge = {
  Active: "badge-success",
  Completed: "badge-primary",
  "On Hold": "badge-warning",
  Dropped: "badge-danger",
};

function AdminStudent() {

  const [students, setStudents] = useState(initialStudents);
  const [view, setView] = useState("list"); // "list" | "form"
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    course: initialCourses[0]?.name || "",
    batch: batches[0],
    startDate: "",
    status: statuses[0],
  });

  function resetForm() {
    setForm({
      name: "",
      course: initialCourses[0]?.name || "",
      batch: batches[0],
      startDate: "",
      status: statuses[0],
    });
    setEditingId(null);
  }

  function openCreateForm() {
    resetForm();
    setView("form");
  }

  function openEditForm(student) {
    setForm({
      name: student.name,
      course: student.course,
      batch: student.batch,
      startDate: student.startDate,
      status: student.status,
    });
    setEditingId(student.id);
    setView("form");
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  }

  function handleSave(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.startDate) {
      return;
    }

    if (editingId) {
      setStudents((previous) =>
        previous.map((student) =>
          student.id === editingId ? { ...student, ...form } : student
        )
      );
    } else {
      setStudents((previous) => [
        ...previous,
        { id: Date.now(), sno: previous.length + 1, ...form },
      ]);
    }

    resetForm();
    setView("list");
  }

  function handleDelete(id) {
    setStudents((previous) =>
      previous
        .filter((student) => student.id !== id)
        .map((student, index) => ({ ...student, sno: index + 1 }))
    );
  }

  return (
    <AdminLayout>

      <div className="admin-page">

        {view === "list" && (
          <>
            <div className="admin-page-header">

              <div>
                <h2>Student</h2>
                <p>Students enrolled across every batch.</p>
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

                    {students.length === 0 ? (
                      <div className="admin-empty">
                        <span className="material-icons">groups</span>
                        <p>No students yet. Click Create to add one.</p>
                      </div>
                    ) : (
                      <table className="table table-hover">

                        <thead>
                          <tr>
                            <th>S.No</th>
                            <th>Student</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Start Date</th>
                            <th>Status</th>
                            <th>Actions</th>
                          </tr>
                        </thead>

                        <tbody>
                          {students.map((student) => (
                            <tr key={student.id}>
                              <td>{student.sno}</td>
                              <td>{student.name}</td>
                              <td>{student.course}</td>
                              <td>{student.batch}</td>
                              <td>{student.startDate}</td>
                              <td>
                                <span className={`badge ${statusBadge[student.status] || "badge-info"}`}>
                                  {student.status}
                                </span>
                              </td>
                              <td>
                                <div className="admin-table-actions">
                                  <button
                                    type="button"
                                    className="admin-icon-btn"
                                    onClick={() => openEditForm(student)}
                                    aria-label="Edit student"
                                  >
                                    <span className="material-icons">edit</span>
                                  </button>
                                  <button
                                    type="button"
                                    className="admin-icon-btn"
                                    onClick={() => handleDelete(student.id)}
                                    aria-label="Delete student"
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
              Back to Students
            </button>

            <div className="row">
              <div className="col-lg-6">

                <div className="card">

                  <div className="card-header">
                    <h4 className="card-title">
                      {editingId ? "Edit Student" : "Create Student"}
                    </h4>
                  </div>

                  <div className="card-body">

                    <form onSubmit={handleSave}>

                      <div className="admin-form-group">
                        <label htmlFor="student-name">Student</label>
                        <input
                          id="student-name"
                          name="name"
                          type="text"
                          placeholder="Student name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="row">

                        <div className="col-md-6">
                          <div className="admin-form-group">
                            <label htmlFor="student-course">Course</label>
                            <select
                              id="student-course"
                              name="course"
                              value={form.course}
                              onChange={handleChange}
                            >
                              {initialCourses.map((course) => (
                                <option key={course.id} value={course.name}>
                                  {course.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          <div className="admin-form-group">
                            <label htmlFor="student-batch">Batch</label>
                            <select
                              id="student-batch"
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
                            <label htmlFor="student-start">Start Date</label>
                            <input
                              id="student-start"
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
                            <label htmlFor="student-status">Status</label>
                            <select
                              id="student-status"
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
                        </div>

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

export default AdminStudent;
