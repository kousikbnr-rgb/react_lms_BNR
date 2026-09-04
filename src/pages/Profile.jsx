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

            <h4>Full Stack Developer Student</h4>

            <p>
              Passionate about Web Development, React.js, JavaScript and
              building modern web applications.
            </p>
          </div>

          <button type="button" className="profile-edit-btn">
            <i className="fa fa-edit"></i>
            &nbsp; Edit Profile
          </button>
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
                <div className="personal-item">
                  <span className="personal-label">Full Name</span>

                  <span className="personal-value">Manjunathan M</span>
                </div>

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

                <div className="personal-item">
                  <span className="personal-label">Location</span>

                  <span className="personal-value">Tamil Nadu, India</span>
                </div>
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

              <button type="button" className="update-profile-btn">
                Update Profile
              </button>
            </div>
          </div>
        </div>

        {/* =====================================================
            TECHNICAL SKILLS + LEARNING OVERVIEW
        ===================================================== */}

        <div className="profile-row profile-row-equal">
          {/* TECHNICAL SKILLS */}

          <div className="profile-card">
            <div className="profile-card-header">
              <h3>Technical Skills</h3>
            </div>

            <div className="profile-card-body">
              <div className="skills-list">
                {/* HTML */}

                <div className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">HTML5</span>

                    <span className="skill-percent">95%</span>
                  </div>

                  <div className="skill-progress">
                    <div className="skill-progress-bar skill-html"></div>
                  </div>
                </div>

                {/* CSS */}

                <div className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">CSS3</span>

                    <span className="skill-percent">90%</span>
                  </div>

                  <div className="skill-progress">
                    <div className="skill-progress-bar skill-css"></div>
                  </div>
                </div>

                {/* JAVASCRIPT */}

                <div className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">JavaScript</span>

                    <span className="skill-percent">82%</span>
                  </div>

                  <div className="skill-progress">
                    <div className="skill-progress-bar skill-js"></div>
                  </div>
                </div>

                {/* REACT */}

                <div className="skill-item">
                  <div className="skill-top">
                    <span className="skill-name">React.js</span>

                    <span className="skill-percent">75%</span>
                  </div>

                  <div className="skill-progress">
                    <div className="skill-progress-bar skill-react"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEARNING OVERVIEW */}

          <div className="profile-card">
            <div className="profile-card-header">
              <h3>Learning Overview</h3>
            </div>

            <div className="profile-card-body">
              <div className="learning-overview-grid">
                {/* ENROLLED COURSES */}

                <div className="overview-item">
                  <div className="overview-icon purple">
                    <i className="fa fa-book text-primary mb-2"></i>
                  </div>

                  <div className="overview-number">12</div>

                  <div className="overview-label">Enrolled Courses</div>
                </div>

                {/* COMPLETED */}

                <div className="overview-item">
                  <div className="overview-icon green">
                    <i className="fa fa-check-circle"></i>
                  </div>

                  <div className="overview-number">8</div>

                  <div className="overview-label">Completed</div>
                </div>

                {/* MCQ TESTS */}

                <div className="overview-item">
                  <div className="overview-icon purple">
                    <i className="fa fa-pencil-square-o"></i>
                  </div>

                  <div className="overview-number">15</div>

                  <div className="overview-label">MCQ Tests</div>
                </div>

                {/* AVERAGE SCORE */}

                <div className="overview-item">
                  <div className="overview-icon red">
                    <i className="fa fa-trophy"></i>
                  </div>

                  <div className="overview-number">88%</div>

                  <div className="overview-label">Average Score</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            LEARNING GOALS + RECENT ACTIVITY
        ===================================================== */}

        <div className="profile-row profile-row-equal">
          {/* LEARNING GOALS */}

          <div className="profile-card">
            <div className="profile-card-header">
              <h3>Learning Goals</h3>
            </div>

            <div className="profile-card-body">
              <div className="goals-list">
                {/* REACT */}

                <div className="goal-item">
                  <div className="goal-top">
                    <span className="goal-name">Complete React.js Course</span>

                    <span className="goal-percent">75%</span>
                  </div>

                  <div className="goal-progress">
                    <div className="goal-progress-bar goal-react"></div>
                  </div>
                </div>

                {/* NODE */}

                <div className="goal-item">
                  <div className="goal-top">
                    <span className="goal-name">Finish Node.js Basics</span>

                    <span className="goal-percent">45%</span>
                  </div>

                  <div className="goal-progress">
                    <div className="goal-progress-bar goal-node"></div>
                  </div>
                </div>

                {/* FINAL YEAR PROJECT */}

                <div className="goal-item">
                  <div className="goal-top">
                    <span className="goal-name">
                      Complete Final Year Project
                    </span>

                    <span className="goal-percent">60%</span>
                  </div>

                  <div className="goal-progress">
                    <div className="goal-progress-bar goal-project"></div>
                  </div>
                </div>
              </div>

              {/* TODAY'S GOAL */}

              <div className="today-goal">
                <strong>Today's Goal</strong>

                <span>Watch one lesson and complete one MCQ test.</span>
              </div>
            </div>
          </div>

          {/* RECENT ACTIVITY */}

          <div className="profile-card">
            <div className="profile-card-header">
              <h3>Recent Activity</h3>
            </div>

            <div className="profile-card-body">
              <div className="activity-list">
                {/* ACTIVITY 1 */}

                <div className="activity-item">
                  <div>
                    <p className="activity-title">Completed HTML Module</p>

                    <span className="activity-time">Today • 10:30 AM</span>
                  </div>

                  <div className="activity-icon activity-success">
                    <i className="fa fa-check-circle"></i>
                  </div>
                </div>

                {/* ACTIVITY 2 */}

                <div className="activity-item">
                  <div>
                    <p className="activity-title">Passed JavaScript MCQ</p>

                    <span className="activity-time">Yesterday • 5:00 PM</span>
                  </div>

                  <div className="activity-icon activity-success">
                    <i className="fa fa-check-circle"></i>
                  </div>
                </div>

                {/* ACTIVITY 3 */}

                <div className="activity-item">
                  <div>
                    <p className="activity-title">Started React Course</p>

                    <span className="activity-time">2 Days Ago</span>
                  </div>

                  <div className="activity-icon activity-play">
                    <i className="fa fa-play-circle"></i>
                  </div>
                </div>

                {/* ACTIVITY 4 */}

                <div className="activity-item">
                  <div>
                    <p className="activity-title">Profile Updated</p>

                    <span className="activity-time">Last Week</span>
                  </div>

                  <div className="activity-icon activity-profile">
                    <i className="fa fa-user"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RECENT CERTIFICATES
        ===================================================== */}

        <div className="profile-card certificates-card">
          <div className="profile-card-header certificates-header">
            <h3>Recent Certificates</h3>

            <button type="button" className="view-all-btn">
              View All
            </button>
          </div>

          <div className="profile-card-body">
            <div className="certificates-grid">
              {/* HTML & CSS */}

              <div className="certificate-item">
                <div className="certificate-badge badge-yellow">
                  <i className="fa fa-certificate"></i>
                </div>

                <h4 className="certificate-name">HTML &amp; CSS</h4>

                <span className="certificate-status">
                  Completed Successfully
                </span>
              </div>

              {/* JAVASCRIPT */}

              <div className="certificate-item">
                <div className="certificate-badge badge-green">
                  <i className="fa fa-certificate"></i>
                </div>

                <h4 className="certificate-name">JavaScript</h4>

                <span className="certificate-status">Certified</span>
              </div>

              {/* BOOTSTRAP */}

              <div className="certificate-item">
                <div className="certificate-badge badge-purple">
                  <i className="fa fa-certificate"></i>
                </div>

                <h4 className="certificate-name">Bootstrap</h4>

                <span className="certificate-status">Completed</span>
              </div>

              {/* REACT */}

              <div className="certificate-item">
                <div className="certificate-badge badge-red">
                  <i className="fa fa-certificate"></i>
                </div>

                <h4 className="certificate-name">React.js</h4>

                <span className="certificate-status">In Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
