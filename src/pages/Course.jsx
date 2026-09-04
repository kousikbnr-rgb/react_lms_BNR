import { Link } from "react-router-dom";
import Layout from "../components/Layout";

import htmlImage from "../assets/images/coures/Hello.jpeg";
import cssImage from "../assets/images/coures/newcss.jpeg";
import jsImage from "../assets/images/coures/js.jpeg";
import reactImage from "../assets/images/coures/react.jpeg";

import "../css/course.css";
import "../css/theme.css";
function Course() {

  const courses = [
    {
      name: "HTML",
      image: htmlImage,
      description: "Learn the fundamentals of HTML and build web pages.",
      level: "Beginner",
      questions: "20 MCQ Questions",
      time: "15 Minutes",
      link: "/mcq/html",
    },

    {
      name: "CSS",
      image: cssImage,
      description: "Learn styling, layouts and responsive web design.",
      level: "Beginner",
      questions: "20 MCQ Questions",
      time: "15 Minutes",
      link: "/mcq/css",
    },

    {
      name: "JavaScript",
      image: jsImage,
      description: "Learn JavaScript and build interactive web applications.",
      level: "Intermediate",
      questions: "20 MCQ Questions",
      time: "20 Minutes",
      link: "/mcq/javascript",
    },

    {
      name: "React",
      image: reactImage,
      description: "Build modern single-page applications using React.",
      level: "Intermediate",
      questions: "20 MCQ Questions",
      time: "20 Minutes",
      link: "/mcq/react",
    },
  ];

  return (
    <Layout>

      <div className="course-page">

        {/* Welcome Section */}

        <div className="course-welcome">

          <h2 className="course-welcome-title">
            Welcome, Learner 👋
          </h2>

          <p className="course-welcome-text">
            Choose a course below and start your learning journey.
          </p>

        </div>


        {/* Course Grid */}

        <div className="course-grid">

          {courses.map((course) => (

            <div
              className="course-card"
              key={course.name}
            >

              {/* Image */}

              <img
                src={course.image}
                alt={course.name}
                className="course-card-image"
              />


              {/* Content */}

              <div className="course-card-content">

                <h3 className="course-card-title">
                  {course.name}
                </h3>


                <p className="course-card-description">
                  {course.description}
                </p>


                {/* Rating */}

                <div className="course-card-rating">
                  ⭐⭐⭐⭐⭐
                </div>


                {/* Details */}

                <div className="course-card-details">

                  <p className="course-card-detail">
                    📘 {course.level}
                  </p>

                  <p className="course-card-detail">
                    📝 {course.questions}
                  </p>

                  <p className="course-card-detail">
                    ⏱ {course.time}
                  </p>

                </div>


                {/* Start Learning */}

                <Link
                  to={course.link}
                  className="course-card-button"
                >
                  Start Learning →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Layout>
  );
}

export default Course;