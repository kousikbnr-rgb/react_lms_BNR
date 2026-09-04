// ======================================
// quiz.js
// PART 1
// ======================================

// Read URL
const params = new URLSearchParams(window.location.search);
const selectedCourse = params.get("course") || "html";

// Get questions of selected course
const currentQuestions = questions[selectedCourse];

// Current question index
let currentQuestion = 0;

// Store selected answers
let userAnswers = new Array(currentQuestions.length).fill(null);

// Timer (20 Minutes)
let totalSeconds = 20 * 60;

// Elements
const courseTitle = document.getElementById("courseTitle");
const questionNumber = document.getElementById("questionNumber");
const question = document.getElementById("question");

const timer = document.getElementById("timer");

const progressBar = document.getElementById("progressBar");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

const radios = [
  document.getElementById("option1"),
  document.getElementById("option2"),
  document.getElementById("option3"),
  document.getElementById("option4"),
];

const labels = [
  document.getElementById("label1"),
  document.getElementById("label2"),
  document.getElementById("label3"),
  document.getElementById("label4"),
];

// Course Title
courseTitle.innerText =
  selectedCourse.charAt(0).toUpperCase() + selectedCourse.slice(1) + " Quiz";

// Load Question
function loadQuestion() {
  const q = currentQuestions[currentQuestion];

  questionNumber.innerText = `Question ${currentQuestion + 1} of ${currentQuestions.length}`;

  question.innerText = q.question;

  for (let i = 0; i < 4; i++) {
    labels[i].innerText = q.options[i];

    radios[i].checked = userAnswers[currentQuestion] === i;
  }

  // Progress Bar
  progressBar.style.width = `${((currentQuestion + 1) / currentQuestions.length) * 100}%`;

  // Previous Button

  if (currentQuestion === 0) {
    prevBtn.disabled = true;
  } else {
    prevBtn.disabled = false;
  }

  // Last Question

  if (currentQuestion === currentQuestions.length - 1) {
    nextBtn.style.display = "none";

    submitBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "inline-block";

    submitBtn.style.display = "none";
  }
}

// Save Selected Answer

radios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    userAnswers[currentQuestion] = index;
  });
});

// Load First Question

loadQuestion();
// ======================================
// PART 2
// Next, Previous, Timer & Submit
// ======================================

// ------------------------------
// Next Button
// ------------------------------
nextBtn.addEventListener("click",()=>{

if(userAnswers[currentQuestion]===null){

alert("Please select an answer.");

return;

}

if(currentQuestion<currentQuestions.length-1){

currentQuestion++;

loadQuestion();

}

});

// ------------------------------
// Previous Button
// ------------------------------
prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;

    loadQuestion();
  }
});

// ------------------------------
// Timer
// ------------------------------

function startTimer() {
  const interval = setInterval(() => {
    let minutes = Math.floor(totalSeconds / 60);

    let seconds = totalSeconds % 60;

    timer.innerText = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (totalSeconds <= 0) {
      clearInterval(interval);

      submitQuiz();
    }

    totalSeconds--;
  }, 1000);
}

startTimer();

// ------------------------------
// Submit Button
// ------------------------------

submitBtn.addEventListener("click", () => {
  submitQuiz();
});

// ------------------------------
// Submit Function
// ------------------------------

function submitQuiz() {
  let score = 0;

  currentQuestions.forEach((q, index) => {
    if (userAnswers[index] === q.answer) {
      score++;
    }
  });

  showResult(score);
}

// ------------------------------
// Result Function
// ------------------------------

function showResult(score) {
  let percentage = Math.round((score / currentQuestions.length) * 100);

  let message = "";

  if (percentage >= 90) {
    message = "🏆 Excellent";
  } else if (percentage >= 75) {
    message = "🎉 Very Good";
  } else if (percentage >= 60) {
    message = "👍 Good";
  } else {
    message = "📚 Keep Practicing";
  }

  document.querySelector(".card-body").innerHTML = `

<div class="text-center">

<h2 class="mb-4">${courseTitle.innerText}</h2>

<h1 class="display-4 text-primary">

${score} / ${currentQuestions.length}

</h1>

<h3 class="mt-3">

${percentage}%

</h3>

<h2 class="mt-4">

${message}

</h2>

<div class="mt-5">

<button
class="btn btn-primary me-3"
onclick="location.reload()">

Restart Quiz

</button>

<button
class="btn btn-success"
onclick="window.location.href='course.html'">

Back To Courses

</button>

</div>

</div>

`;
}
// ======================================
// PART 3
// Professional Features
// ======================================

// Highlight selected option
function highlightSelected() {
  radios.forEach((radio, index) => {
    const box = radio.parentElement;

    box.classList.remove("border-primary", "bg-light");

    if (radio.checked) {
      box.classList.add("border-primary", "bg-light");
    }
  });
}

radios.forEach((radio) => {
  radio.addEventListener("change", highlightSelected);
});

// Update loadQuestion()

const oldLoadQuestion = loadQuestion;

loadQuestion = function () {
  oldLoadQuestion();

  highlightSelected();
};

// Prevent Next without selecting answer


// Prevent Submit without last answer

submitBtn.addEventListener("click", (e) => {
  if (userAnswers[currentQuestion] == null) {
    alert("Please select an answer.");

    e.stopImmediatePropagation();

    return;
  }
});

// Keyboard Navigation

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    if (nextBtn.style.display != "none") nextBtn.click();
  }

  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});

// Restart Quiz

function restartQuiz() {
  currentQuestion = 0;

  userAnswers = new Array(currentQuestions.length).fill(null);

  totalSeconds = 20 * 60;

  location.reload();
}

// Back To Courses

function backToCourses() {
  window.location.href = "course.html";
}

// Disable buttons after submit

function disableQuiz() {
  radios.forEach((r) => {
    r.disabled = true;
  });

  prevBtn.disabled = true;

  nextBtn.disabled = true;

  submitBtn.disabled = true;
}

// Update showResult()

const oldShowResult = showResult;

showResult = function (score) {
  disableQuiz();

  oldShowResult(score);
};

// Progress Percentage

function updateProgress() {
  const percent = Math.round(
    ((currentQuestion + 1) / currentQuestions.length) * 100,
  );

  progressBar.style.width = percent + "%";

  progressBar.innerText = percent + "%";
}

// Update loadQuestion again

const originalLoad = loadQuestion;

loadQuestion = function () {
  originalLoad();

  highlightSelected();

  updateProgress();
};

// Start

loadQuestion();

console.log("Quiz Loaded Successfully");
