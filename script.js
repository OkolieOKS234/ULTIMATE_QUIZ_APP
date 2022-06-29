// storing the quiz answers and submit button in a variable
const Mainquiz = document.querySelector(".quiz");
const answers_container = document.querySelector(".answers");
const submit_conatiner = document.querySelector(".submit");

// function for starting the quiz

function startQuiz() {}

// show the results of the quiz
function showResults() {}

const Questions = [
  // first question
  {
    question: "What is the full meaning of JSON",
    answers: {
      a: "Javascript String Object Notation",
      b: "Javascript Object Notation",
      c: "Javascript Oriented Notation",
    },
    correctAnswer: "b",
  },
  // second question
  {
    question: "________ Javascript is also called client-side",
    answers: {
      a: "Native",
      b: "Microsoft",
      c: "LiveWire",
      d: "Navigator",
    },
    correctAnswer: "d",
  },

  {
    question: "What should appear at the very end of your Javascript?",
    answers: {
      a: "the </script>",
      b: "the <script>",
      c: "The End Statement",
      d: "None of the Above",
    },
    correctAnswer: "a",
  },
  // third question
  {
    question: "Which of the following can't be done with a Client side",
    answers: {
      a: "Validating a form",
      b: "Sending a form's contents by email",
      c: "Storing the form's content to a database file on the server",
      d: "None of the above",
    },
    correctAnswer: "c",
  },
  //   fourth question
  {},
];

// start the quiz immediately
startQuiz();
submit_conatiner.addEventListener("click", showResults);

// Questions in the quiz
