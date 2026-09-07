import { useState } from "react";
import "../../css/trainer-profile.css";

function TrainerProfile() {

  // Temporary trainer data
  // Later this will come from the backend

  const trainer = {
    name: "Trainer",
    job: "Senior Technical Trainer",
    email: "trainer@bracademy.com",
    phone: "+91 98765 43210",
    specialization: "React, JavaScript & Full Stack Development",
    experience: "5 Years",
    joiningDate: "January 10, 2022",
    location: "Kerala, India",
    employeeId: "TR-001",
  };


  // Temporary batch data

  const batches = [
    {
      id: 1,
      name: "Batch A",
      course: "React Development",
      students: [
        "John",
        "Rahul",
        "Priya",
        "Arun",
        "Anitha",
      ],
      startDate: "01 Aug 2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Batch B",
      course: "Java Development",
      students: [
        "Kiran",
        "Vishnu",
        "Meera",
        "Sneha",
        "Akhil",
      ],
      startDate: "15 Jul 2026",
      status: "Active",
    },
    {
      id: 3,
      name: "Batch C",
      course: "Python Development",
      students: [
        "Ravi",
        "Neha",
        "Manu",
        "Divya",
        "Sanjay",
      ],
      startDate: "01 Jun 2026",
      status: "Active",
    },
    {
      id: 4,
      name: "Batch D",
      course: "Full Stack Development",
      students: [
        "Amal",
        "Fahad",
        "Asha",
        "Nikhil",
        "Reshma",
      ],
      startDate: "01 May 2026",
      status: "Completed",
    },
    {
      id: 5,
      name: "Batch E",
      course: "Web Development",
      students: [
        "Vivek",
        "Anu",
        "Rahul",
        "Maya",
        "Sree",
      ],
      startDate: "01 Apr 2026",
      status: "Completed",
    },
  ];


  const [showEditForm, setShowEditForm] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [profile, setProfile] = useState({
    name: trainer.name,
    email: trainer.email,
    phone: trainer.phone,
    specialization: trainer.specialization,
  });


  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });


  const activeBatches = batches.filter(
    (batch) => batch.status === "Active"
  ).length;


  const completedBatches = batches.filter(
    (batch) => batch.status === "Completed"
  ).length;


  const totalStudents = batches.reduce(
    (total, batch) =>
      total + batch.students.length,
    0
  );


  function handleProfileChange(e) {

    const { name, value } = e.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  }


  function handleProfileSubmit(e) {

    e.preventDefault();

    alert("Profile updated successfully.");

    setShowEditForm(false);
  }


  function handlePasswordChange(e) {

    const { name, value } = e.target;

    setPasswordData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }


  function handlePasswordSubmit(e) {

    e.preventDefault();

    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      alert("Please fill all password fields.");
      return;
    }


    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert("New password and confirm password do not match.");
      return;
    }


    if (passwordData.newPassword.length < 6) {
      alert("New password must contain at least 6 characters.");
      return;
    }


    alert("Password changed successfully.");

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });

    setShowPasswordForm(false);
  }


  return (
    <div className="trainer-profile-page">


      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <div className="trainer-profile-header">

        <div>

          <h2>
            Trainer Profile
          </h2>

          <p>
            View and manage your trainer information.
          </p>

        </div>

      </div>


      {/* =====================================
          PROFILE HERO
      ====================================== */}

      <div className="trainer-profile-hero">

        <div className="trainer-profile-avatar">

          <span>
            {trainer.name.charAt(0).toUpperCase()}
          </span>

        </div>


        <div className="trainer-profile-main-info">

          <h3>
            {profile.name}
          </h3>

          <p className="trainer-job">
            {trainer.job}
          </p>

          <p className="trainer-specialization">
            {profile.specialization}
          </p>

          <div className="trainer-profile-meta">

            <span>

              <span className="material-icons">
                badge
              </span>

              {trainer.employeeId}

            </span>


            <span>

              <span className="material-icons">
                calendar_month
              </span>

              Joined {trainer.joiningDate}

            </span>


            <span>

              <span className="material-icons">
                location_on
              </span>

              {trainer.location}

            </span>

          </div>

        </div>


        <div className="trainer-profile-actions">

          <button
            type="button"
            className="trainer-edit-button"
            onClick={() =>
              setShowEditForm(!showEditForm)
            }
          >

            <span className="material-icons">
              edit
            </span>

            Edit Profile

          </button>

        </div>

      </div>


      {/* =====================================
          SUMMARY CARDS
      ====================================== */}

      <div className="trainer-profile-summary">


        <div className="profile-summary-card profile-students-card">

          <div className="profile-summary-icon">

            <span className="material-icons">
              groups
            </span>

          </div>

          <div>

            <h3>
              {totalStudents}
            </h3>

            <p>
              Total Students
            </p>

          </div>

        </div>


        <div className="profile-summary-card profile-active-card">

          <div className="profile-summary-icon">

            <span className="material-icons">
              play_circle
            </span>

          </div>

          <div>

            <h3>
              {activeBatches}
            </h3>

            <p>
              Active Batches
            </p>

          </div>

        </div>


        <div className="profile-summary-card profile-completed-card">

          <div className="profile-summary-icon">

            <span className="material-icons">
              check_circle
            </span>

          </div>

          <div>

            <h3>
              {completedBatches}
            </h3>

            <p>
              Completed Batches
            </p>

          </div>

        </div>


        <div className="profile-summary-card profile-experience-card">

          <div className="profile-summary-icon">

            <span className="material-icons">
              workspace_premium
            </span>

          </div>

          <div>

            <h3>
              {trainer.experience}
            </h3>

            <p>
              Experience
            </p>

          </div>

        </div>

      </div>


      {/* =====================================
          MAIN PROFILE GRID
      ====================================== */}

      <div className="trainer-profile-grid">


        {/* =================================
            PERSONAL INFORMATION
        ================================== */}

        <div className="trainer-profile-card">

          <div className="trainer-card-title">

            <div className="trainer-title-icon blue-icon">

              <span className="material-icons">
                person
              </span>

            </div>

            <div>

              <h4>
                Personal Information
              </h4>

              <p>
                Your basic trainer information
              </p>

            </div>

          </div>


          <div className="trainer-info-list">

            <div className="trainer-info-item">

              <span className="material-icons">
                person
              </span>

              <div>

                <label>
                  Full Name
                </label>

                <strong>
                  {profile.name}
                </strong>

              </div>

            </div>


            <div className="trainer-info-item">

              <span className="material-icons">
                work
              </span>

              <div>

                <label>
                  Job / Designation
                </label>

                <strong>
                  {trainer.job}
                </strong>

              </div>

            </div>


            <div className="trainer-info-item">

              <span className="material-icons">
                email
              </span>

              <div>

                <label>
                  Email
                </label>

                <strong>
                  {profile.email}
                </strong>

              </div>

            </div>


            <div className="trainer-info-item">

              <span className="material-icons">
                phone
              </span>

              <div>

                <label>
                  Phone
                </label>

                <strong>
                  {profile.phone}
                </strong>

              </div>

            </div>


            <div className="trainer-info-item">

              <span className="material-icons">
                code
              </span>

              <div>

                <label>
                  Specialization
                </label>

                <strong>
                  {profile.specialization}
                </strong>

              </div>

            </div>


            <div className="trainer-info-item">

              <span className="material-icons">
                event
              </span>

              <div>

                <label>
                  Joining Date
                </label>

                <strong>
                  {trainer.joiningDate}
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =================================
            ACCOUNT INFORMATION
        ================================== */}

        <div className="trainer-profile-card">

          <div className="trainer-card-title">

            <div className="trainer-title-icon green-icon">

              <span className="material-icons">
                verified_user
              </span>

            </div>

            <div>

              <h4>
                Account Information
              </h4>

              <p>
                Trainer account details
              </p>

            </div>

          </div>


          <div className="trainer-account-list">


            <div className="trainer-account-row">

              <div>

                <span className="account-label">
                  Account Status
                </span>

                <strong>
                  Active
                </strong>

              </div>

              <span className="account-status active-account">
                Active
              </span>

            </div>


            <div className="trainer-account-row">

              <div>

                <span className="account-label">
                  Employee ID
                </span>

                <strong>
                  {trainer.employeeId}
                </strong>

              </div>

              <span className="material-icons">
                badge
              </span>

            </div>


            <div className="trainer-account-row">

              <div>

                <span className="account-label">
                  Role
                </span>

                <strong>
                  Trainer
                </strong>

              </div>

              <span className="material-icons">
                school
              </span>

            </div>


            <div className="trainer-account-row">

              <div>

                <span className="account-label">
                  Experience
                </span>

                <strong>
                  {trainer.experience}
                </strong>

              </div>

              <span className="material-icons">
                workspace_premium
              </span>

            </div>


            <div className="trainer-account-row">

              <div>

                <span className="account-label">
                  Location
                </span>

                <strong>
                  {trainer.location}
                </strong>

              </div>

              <span className="material-icons">
                location_on
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================
          ASSIGNED BATCHES
      ====================================== */}

      <div className="trainer-profile-card assigned-batches-card">

        <div className="trainer-card-title">

          <div className="trainer-title-icon purple-icon">

            <span className="material-icons">
              class
            </span>

          </div>

          <div>

            <h4>
              Assigned Batches
            </h4>

            <p>
              Batches currently assigned to you
            </p>

          </div>

        </div>


        <div className="assigned-batches-list">

          {batches.map((batch) => (

            <div
              className="assigned-batch-item"
              key={batch.id}
            >

              <div className="assigned-batch-main">

                <div className="assigned-batch-icon">

                  <span className="material-icons">
                    class
                  </span>

                </div>


                <div>

                  <h5>
                    {batch.name}
                  </h5>

                  <p>
                    {batch.course}
                  </p>

                </div>

              </div>


              <div className="assigned-batch-details">

                <div>

                  <span>
                    Students
                  </span>

                  <strong>
                    {batch.students.length}
                  </strong>

                </div>


                <div>

                  <span>
                    Start Date
                  </span>

                  <strong>
                    {batch.startDate}
                  </strong>

                </div>


                <span
                  className={`assigned-batch-status ${
                    batch.status === "Active"
                      ? "assigned-active"
                      : "assigned-completed"
                  }`}
                >
                  {batch.status}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =====================================
          BATCH STUDENTS
      ====================================== */}

      <div className="trainer-profile-card batch-students-card">

        <div className="trainer-card-title">

          <div className="trainer-title-icon orange-icon">

            <span className="material-icons">
              groups
            </span>

          </div>

          <div>

            <h4>
              Batch Student List
            </h4>

            <p>
              Students belonging to your assigned batches
            </p>

          </div>

        </div>


        <div className="batch-students-grid">

          {batches.map((batch) => (

            <div
              className="batch-student-group"
              key={batch.id}
            >

              <div className="batch-student-group-header">

                <div>

                  <h5>
                    {batch.name}
                  </h5>

                  <span>
                    {batch.course}
                  </span>

                </div>

                <strong>
                  {batch.students.length} Students
                </strong>

              </div>


              <div className="student-mini-list">

                {batch.students.map(
                  (student, index) => (

                    <div
                      className="student-mini-item"
                      key={index}
                    >

                      <div className="student-mini-avatar">
                        {student.charAt(0).toUpperCase()}
                      </div>

                      <span>
                        {student}
                      </span>

                    </div>

                  )
                )}

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =====================================
          EDIT PROFILE FORM
      ====================================== */}

      {showEditForm && (

        <div className="trainer-profile-card profile-form-card">

          <div className="trainer-card-title">

            <div className="trainer-title-icon blue-icon">

              <span className="material-icons">
                edit
              </span>

            </div>

            <div>

              <h4>
                Edit Profile
              </h4>

              <p>
                Update your personal information
              </p>

            </div>

          </div>


          <form
            className="trainer-profile-form"
            onSubmit={handleProfileSubmit}
          >

            <div className="profile-form-grid">

              <div className="profile-form-group">

                <label>
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleProfileChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Phone
                </label>

                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Specialization
                </label>

                <input
                  type="text"
                  name="specialization"
                  value={profile.specialization}
                  onChange={handleProfileChange}
                />

              </div>

            </div>


            <div className="profile-form-actions">

              <button
                type="button"
                className="profile-cancel-button"
                onClick={() =>
                  setShowEditForm(false)
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="profile-save-button"
              >

                <span className="material-icons">
                  save
                </span>

                Save Changes

              </button>

            </div>

          </form>

        </div>

      )}


      {/* =====================================
          SECURITY
      ====================================== */}

      <div className="trainer-profile-card security-card">

        <div className="trainer-card-title">

          <div className="trainer-title-icon red-icon">

            <span className="material-icons">
              lock
            </span>

          </div>

          <div>

            <h4>
              Security
            </h4>

            <p>
              Manage your account password
            </p>

          </div>

        </div>


        {!showPasswordForm ? (

          <div className="security-content">

            <div>

              <strong>
                Password
              </strong>

              <p>
                Keep your password secure and updated regularly.
              </p>

            </div>

            <button
              type="button"
              className="change-password-button"
              onClick={() =>
                setShowPasswordForm(true)
              }
            >

              <span className="material-icons">
                lock_reset
              </span>

              Change Password

            </button>

          </div>

        ) : (

          <form
            className="password-form"
            onSubmit={handlePasswordSubmit}
          >

            <div className="profile-form-grid">

              <div className="profile-form-group">

                <label>
                  Current Password
                </label>

                <input
                  type="password"
                  name="currentPassword"
                  value={passwordData.currentPassword}
                  onChange={handlePasswordChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  New Password
                </label>

                <input
                  type="password"
                  name="newPassword"
                  value={passwordData.newPassword}
                  onChange={handlePasswordChange}
                />

              </div>


              <div className="profile-form-group">

                <label>
                  Confirm New Password
                </label>

                <input
                  type="password"
                  name="confirmPassword"
                  value={passwordData.confirmPassword}
                  onChange={handlePasswordChange}
                />

              </div>

            </div>


            <div className="profile-form-actions">

              <button
                type="button"
                className="profile-cancel-button"
                onClick={() =>
                  setShowPasswordForm(false)
                }
              >
                Cancel
              </button>

              <button
                type="submit"
                className="profile-save-button"
              >

                <span className="material-icons">
                  lock
                </span>

                Update Password

              </button>

            </div>

          </form>

        )}

      </div>

    </div>
  );
}

export default TrainerProfile;