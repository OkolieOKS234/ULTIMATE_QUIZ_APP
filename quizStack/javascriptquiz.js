// Questions for the quiz
const Questions = [
  // first question
  {
    question: "What is the full meaning of JSON",
    a: "Javascript String Object Notation",
    b: "Javascript Object Notation",
    c: "Javascript Oriented Notation",
    d: "Javascript Object Native",
    correctAnswer: "b",
  },
  // second question
  {
    question: "________ Javascript is also called client-side",

    a: "Native",
    b: "Microsoft",
    c: "LiveWire",
    d: "Navigator",
    correctAnswer: "d",
  },

  {
    question: "What should appear at the very end of your Javascript?",
    a: "the </script>",
    b: "the <script>",
    c: "The End Statement",
    d: "None of the Above",

    correctAnswer: "a",
  },
  // third question
  {
    question: "Which of the following can't be done with a Client side",

    a: "Validating a form",
    b: "Sending a form's contents by email",
    c: "Storing the form's content to a database file on the server",
    d: "None of the above",
    correctAnswer: "c",
  },

  //   fourth question
  {},
];

// storing the quiz answers and submit button in a variable
const quizcontainer = document.querySelector(".quiz");
const optiona = document.querySelector("#a_text");
const optionb = document.querySelector("#b_text");
const optionc = document.querySelector("#c_text");
const optiond = document.querySelector("#d_text");
const questionE = document.querySelector("#question");
const answersEls = document.querySelectorAll(".answer");
const submit_button = document.querySelector("#submit");

// function for starting the quiz

let currentQuiz = 0;
let scoreUpdate = 0;
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
function showResults() {}

// start the quiz immediately
startQuiz();
submit_conatiner.addEventListener("click", showResults);

// Questions in the quiz
