// Questions for the quiz
const Questions = [
  // first question
  {
    question: "Who developed Python Programming Language?",
    a: "Wick van Rossum",
    b: "Rasmus Lerdorf",
    c: "Guido van Rossum",
    d: "Niene Stom",
    correct: "c",
  },
  // second question
  {
    question:
      "Which of the following functions can help us to find the version of python that we are currently working on?",
    a: "sys.version(1)",
    b: "sys.version(0)",
    c: "sys.version()",
    d: "sys.version",
    correct: "a",
  },
  {},
];

// storing the quiz answers and submit button in a variable
const quizcontainer = document.querySelector(".quiz");
const optiona = document.querySelector("#a_text");
const optionb = document.querySelector("#b_text");
const optionc = document.querySelector("#c_text");
const optiond = document.querySelector("#d_text");
const questionE = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const submit_button = document.querySelector("#submit");

// function for starting the quiz

let currentQuiz = Math.floor(Math.random() * Questions.length);
let scoreUpdate = 0;
startQuiz();
function startQuiz() {
  deselectAnswers();
  const currentQuizData = Questions[currentQuiz];

  questionE.textContent = currentQuizData.question;
  optiona.textContent = currentQuizData.a;
  optionb.textContent = currentQuizData.b;
  optionc.textContent = currentQuizData.c;
  optiond.textContent = currentQuizData.d;
}

// making the options to be default
function deselectAnswers() {
  answersEls.forEach((answersEl) => answersEl.checked == false);
}

function selectedAnswer() {
  let answer;
  answersEls.forEach((answersEl) => {
    if (answersEl.checked) {
      answer = answersEl.id;
    }
  });
  return answer;
}

// show the results of the quiz
submit_button.addEventListener("click", function () {
  const answer = selectedAnswer();
  if (answer) {
    if (answer === Questions[currentQuiz].correct) {
      scoreUpdate++;
    }
    currentQuiz++;
    // this statement makes it go next so long it meets the requirement of remaining number of questions
    if (currentQuiz < Questions.length) {
      startQuiz();
    }
    if (currentQuiz === Questions.length - 1) {
      submit_button.textContent = "Show Score";
    } else {
      console.log("Done");
    }
  }
});

// Questions in the quiz
