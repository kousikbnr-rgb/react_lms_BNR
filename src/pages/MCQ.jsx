import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import "../css/mcq.css";
import questions from "../data/questions";
import "../css/theme.css";
function MCQ() {
    const { course } = useParams();

    const currentQuestions = questions[course];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    // const q = currentQuestions[currentQuestion];

    return (
        <Layout>

            <div className="mcq-page">

                <div className="mcq-header">

                    
                    <h2>{course.charAt(0).toUpperCase() + course.slice(1)} Quiz </h2>

                    <p>
                        Read every question carefully before selecting your answer.
                    </p>

                </div>

                <div className="mcq-card">

                    <div className="mcq-top-row">

                        <h5>
                            Question {currentQuestion + 1} of {currentQuestions.length}
                        </h5>

                        <span className="mcq-timer">
                            20:00
                        </span>

                    </div>

                    <div className="mcq-progress">

                        <div
                            className="mcq-progress-bar"
                            style={{
                                width: `${((currentQuestion + 1) / currentQuestions.length) * 100}%`
                            }}
                        ></div>

                    </div>

                    <div className="mcq-question">

                        <h4>
                            {q.question}
                        </h4>

                    </div>

                    <div className="mcq-options">

                        {q.options.map((option, index) => (

                            <div
                                key={index}
                                className={`mcq-option ${
                                    selectedAnswer === index
                                        ? "mcq-option-selected"
                                        : ""
                                }`}
                            >

                                <input
                                    type="radio"
                                    name="answer"
                                    id={`option-${index}`}
                                    checked={selectedAnswer === index}
                                    onChange={() => setSelectedAnswer(index)}
                                />

                                <label htmlFor={`option-${index}`}>
                                    {option}
                                </label>

                            </div>

                        ))}

                    </div>

                    <div className="mcq-navigation">

                        <button
                            className="mcq-prev-btn"
                            disabled={currentQuestion === 0}
                            onClick={() => {
                                setCurrentQuestion(currentQuestion - 1);
                                setSelectedAnswer(null);
                            }}
                        >
                            ← Previous
                        </button>

                        <button
                            className="mcq-next-btn"
                            onClick={() => {

                                if (selectedAnswer === null) {
                                    alert("Please select an answer.");
                                    return;
                                }

                                if (currentQuestion < currentQuestions.length - 1) {
                                    setCurrentQuestion(currentQuestion + 1);
                                    setSelectedAnswer(null);
                                }

                            }}
                        >
                            Next →
                        </button>

                    </div>

                    <div className="mcq-submit">

                        <button className="mcq-submit-btn">
                            Submit Quiz
                        </button>

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default MCQ;