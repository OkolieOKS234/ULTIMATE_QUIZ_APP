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
  {
    question: "Is Python case sensitive when dealing with identifiers?",
    a: "no",
    b: "yes",
    c: "machine dependent",
    d: "none of the mentioned",
    correct: "a",
  },
  {
    question:
      "What will be the value of the following Python expression? 4 + 3 % 5",
    a: "no",
    b: "yes",
    c: "machine dependent",
    d: "none of the mentioned",
    correct: "a",
  },
  {
    question: "Which keyword is used for function in Python language?",
    a: "Function",
    b: "Fun",
    c: "Def",
    d: "none of the mentioned",
    correct: "c",
  },
];

// storing the quiz answers and submit button in a variable
const quizcontainer = document.getElementById("quiz");
const optiona = document.getElementById("a_text");
const optionb = document.getElementById("b_text");
const optionc = document.getElementById("c_text");
const optiond = document.getElementById("d_text");
const questionE = document.getElementById("question");
const answersEls = document.querySelectorAll(".answer");
const submit_button = document.getElementById("submit");

// function for starting the quiz

let currentQuiz = 0;
let score = 0;
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
  let scoreCalculated = (score / Questions.length) * 100;
  if (answer) {
    if (answer === Questions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    // this statement makes it go next so long it meets the requirement of remaining number of questions
    if (currentQuiz < Questions.length) {
      startQuiz();
    } else {
      quizcontainer.textContent = `You scored ${scoreCalculated}%`;
    }
  }
});

// Questions in the quiz
