import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import questions from "../data/questions";
import "../css/theme.css";
import "../css/mcq.css";

function MCQ() {
  const { course } = useParams();

  const currentQuestions = questions[course];

  // Current question number
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // Store answers for ALL questions
  const [answers, setAnswers] = useState({});

  // Whether quiz has been submitted
  const [submitted, setSubmitted] = useState(false);

  // Final score
  const [score, setScore] = useState(0);

  // ---------------------------------------------------------
  // SAFETY CHECK
  // ---------------------------------------------------------

  if (!currentQuestions) {
    return (
      <Layout>
        <div className="mcq-page">
          <div className="mcq-card">
            <h2>Quiz Not Found</h2>

            <p>No questions are available for this course.</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Current question
  const q = currentQuestions[currentQuestion];

  // ---------------------------------------------------------
  // SELECT ANSWER
  // ---------------------------------------------------------

  const handleAnswerSelect = (index) => {
    setAnswers({
      ...answers,
      [currentQuestion]: index,
    });
  };

  // ---------------------------------------------------------
  // NEXT QUESTION
  // ---------------------------------------------------------

  const handleNext = () => {
    if (answers[currentQuestion] === undefined) {
      alert("Please select an answer.");

      return;
    }

    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // ---------------------------------------------------------
  // PREVIOUS QUESTION
  // ---------------------------------------------------------

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // ---------------------------------------------------------
  // SUBMIT QUIZ
  // ---------------------------------------------------------

  const handleSubmit = () => {
    // Check if all questions are answered

    if (Object.keys(answers).length !== currentQuestions.length) {
      alert("Please answer all questions before submitting the quiz.");

      return;
    }

    let correctAnswers = 0;

    // Check every answer

    currentQuestions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers++;
      }
    });

    // Calculate percentage

    const percentage = Math.round(
      (correctAnswers / currentQuestions.length) * 100,
    );

    setScore(percentage);

    setSubmitted(true);
  };

  // ---------------------------------------------------------
  // RETAKE QUIZ
  // ---------------------------------------------------------

  const handleRetake = () => {
    setCurrentQuestion(0);

    setAnswers({});

    setScore(0);

    setSubmitted(false);
  };

  // =========================================================
  // RESULT PAGE
  // =========================================================

  if (submitted) {
    const passed = score >= 80;

    return (
      <Layout>
        <div className="mcq-page">
          <div className="mcq-header">
            <h2>
              {course.charAt(0).toUpperCase() + course.slice(1)} Quiz Result
            </h2>

            <p>Your quiz has been submitted.</p>
          </div>

          <div className="mcq-result-card">
            <div className="mcq-result-icon">{passed ? "✓" : "✕"}</div>

            <h2>{passed ? "Congratulations!" : "Quiz Not Passed"}</h2>

            <p className="mcq-result-course">
              {course.charAt(0).toUpperCase() + course.slice(1)} Quiz
            </p>

            <div className="mcq-score">
              <span className="mcq-score-number">{score}%</span>

              <span className="mcq-score-label">Your Score</span>
            </div>

            <div className="mcq-result-message">
              {passed ? (
                <p>You scored 80% or above. You have passed the quiz.</p>
              ) : (
                <p>
                  You need at least 80% to pass. Please review the course and
                  try again.
                </p>
              )}
            </div>

            <div className="mcq-result-actions">
              <button className="mcq-retake-btn" onClick={handleRetake}>
                Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // =========================================================
  // QUIZ PAGE
  // =========================================================

  return (
    <Layout>
      <div className="mcq-page">
        {/* =================================================
                    HEADER
                ================================================= */}

        <div className="mcq-header">
          <h2>{course.charAt(0).toUpperCase() + course.slice(1)} Quiz</h2>

          <p>Read every question carefully before selecting your answer.</p>
        </div>

        {/* =================================================
                    QUIZ CARD
                ================================================= */}

        <div className="mcq-card">
          {/* TOP ROW */}

          <div className="mcq-top-row">
            <h5>
              Question {currentQuestion + 1} of {currentQuestions.length}
            </h5>

            <span className="mcq-timer">20:00</span>
          </div>

          {/* PROGRESS */}

          <div className="mcq-progress">
            <div
              className="mcq-progress-bar"
              style={{
                width: `${
                  ((currentQuestion + 1) / currentQuestions.length) * 100
                }%`,
              }}
            ></div>
          </div>

          {/* QUESTION */}

          <div className="mcq-question">
            <h4>{q.question}</h4>
          </div>

          {/* OPTIONS */}

          <div className="mcq-options">
            {q.options.map((option, index) => (
              <div
                key={index}
                className={`mcq-option ${
                  answers[currentQuestion] === index
                    ? "mcq-option-selected"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  id={`option-${index}`}
                  checked={answers[currentQuestion] === index}
                  onChange={() => handleAnswerSelect(index)}
                />

                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>

          {/* NAVIGATION */}

          <div className="mcq-navigation">
            {/* PREVIOUS */}

            <button
              className="mcq-prev-btn"
              disabled={currentQuestion === 0}
              onClick={handlePrevious}
            >
              ← Previous
            </button>

            {/* NEXT */}

            {currentQuestion < currentQuestions.length - 1 ? (
              <button className="mcq-next-btn" onClick={handleNext}>
                Next →
              </button>
            ) : (
              <button className="mcq-next-btn" onClick={handleSubmit}>
                Submit Quiz
              </button>
            )}
          </div>

          {/* ANSWER COUNT */}

          <div className="mcq-answer-status">
            {Object.keys(answers).length} / {currentQuestions.length} Questions
            Answered
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MCQ;
