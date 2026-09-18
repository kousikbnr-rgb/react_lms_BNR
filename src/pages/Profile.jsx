import Layout from "../components/Layout";
import profileImage from "../assets/images/profile/profile.png";
import "../css/profile.css";
import "../css/theme.css";
function Profile() {
  return (
    <Layout>
      <div className="profile-page">
        {/* =====================================================
            PROFILE HERO
        ===================================================== */}

        <div className="profile-hero">
          <img
            src={profileImage}
            alt="Profile"
            className="profile-hero-image"
          />

          <div className="profile-hero-content">
            <h1>Manjunathan M</h1>

            {/* <h4>Full Stack Developer Student</h4>

            <p>
              Passionate about Web Development, React.js, JavaScript and
              building modern web applications.
            </p> */}
          </div>

          {/* <button type="button" className="profile-edit-btn">
            <i className="fa fa-edit"></i>
            &nbsp; Edit Profile
          </button> */}
        </div>

        {/* =====================================================
            PERSONAL INFORMATION + QUICK PROFILE
        ===================================================== */}

        <div className="profile-row profile-row-two">
          {/* PERSONAL INFORMATION */}

          <div className="profile-card personal-information">
            <div className="profile-card-header">
              <h3>Personal Information</h3>
            </div>

            <div className="profile-card-body">
              <div className="personal-grid">
                {/* <div className="personal-item">
                  <span className="personal-label">Full Name</span>

                  <span className="personal-value">Manjunathan M</span>
                </div> */}

                <div className="personal-item">
                  <span className="personal-label">Email</span>

                  <span className="personal-value">manjunathan@email.com</span>
                </div>

                <div className="personal-item">
                  <span className="personal-label">Phone Number</span>

                  <span className="personal-value">+91 9876543210</span>
                </div>

                <div className="personal-item">
                  <span className="personal-label">College</span>

                  <span className="personal-value">Your College Name</span>
                </div>

                <div className="personal-item">
                  <span className="personal-label">Department</span>

                  <span className="personal-value">B.Sc Computer Science</span>
                </div>

                {/* <div className="personal-item">
                  <span className="personal-label">Location</span>

                  <span className="personal-value">Tamil Nadu, India</span>
                </div> */}
              </div>
            </div>
          </div>

          {/* QUICK PROFILE */}

          <div className="profile-card quick-profile">
            <div className="profile-card-header">
              <h3>Quick Profile</h3>
            </div>

            <div className="quick-profile-body">
              <div className="quick-profile-icon">
                <i className="fa fa-user"></i>
              </div>

              <h3 className="quick-profile-title">Profile Completion</h3>

              <div className="profile-progress">
                <div className="profile-progress-bar">85%</div>
              </div>

              <p className="quick-profile-text">
                Complete your profile to unlock all learning features.
              </p>

              {/* <button type="button" className="update-profile-btn">
                Update Profile
              </button> */}
            </div>
          </div>
        </div>

      
      </div>
    </Layout>
  );
}

export default Profile;
