
import { useState } from "react";
import Layout from "../components/Layout";
import "../css/mcq.css";
import "../css/theme.css";

function MCQ() {

    const questions = [
        {
            question: "What is the output of 2 + 2?",
            options: ["3", "4", "5", "6"],
            answer: 1
        },
        {
            question: "Which language is primarily used for web page structure?",
            options: ["Python", "Java", "HTML", "C++"],
            answer: 2
        },
        {
            question: "Which keyword is used to declare a constant in JavaScript?",
            options: ["var", "let", "const", "static"],
            answer: 2
        },
        {
            question: "Which of the following is a JavaScript framework?",
            options: ["React", "MySQL", "MongoDB", "HTML"],
            answer: 0
        },
        {
            question: "Which HTTP method is commonly used to submit data?",
            options: ["GET", "POST", "DELETE", "HEAD"],
            answer: 1
        }
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const q = questions[currentQuestion];

    const handleNext = () => {

        if (selectedAnswer === null) {
            alert("Please select an answer.");
            return;
        }

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswer(null);
        }
    };

    const handlePrevious = () => {

        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
            setSelectedAnswer(null);
        }
    };

    return (
        <Layout>

            <div className="mcq-page">

                <div className="mcq-header">

                    <h2>Aptitude Test</h2>

                    <p>
                        Read every question carefully before selecting your answer.
                    </p>

                </div>

                <div className="mcq-card">

                    <div className="mcq-top-row">

                        <h5>
                            Question {currentQuestion + 1} of {questions.length}
                        </h5>

                        <span className="mcq-timer">
                            20:00
                        </span>

                    </div>

                    <div className="mcq-progress">

                        <div
                            className="mcq-progress-bar"
                            style={{
                                width: `${((currentQuestion + 1) / questions.length) * 100}%`
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
                            onClick={handlePrevious}
                        >
                            ← Previous
                        </button>

                        <button
                            className="mcq-next-btn"
                            onClick={handleNext}
                        >
                            {currentQuestion === questions.length - 1
                                ? "Finish"
                                : "Next →"}
                        </button>

                    </div>

                    <div className="mcq-submit">

                        <button
                            className="mcq-submit-btn"
                            onClick={() => {
                                if (selectedAnswer === null) {
                                    alert("Please select an answer.");
                                    return;
                                }

                                alert("Quiz submitted successfully!");
                            }}
                        >
                            Submit Quiz
                        </button>

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default MCQ;
