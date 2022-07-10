// Questions for the quiz
const Questions = [
  // first question
  {
    question: "What is the full meaning of JSON",
    a: "Javascript String Object Notation",
    b: "Javascript Object Notation",
    c: "Javascript Oriented Notation",
    d: "Javascript Object Native",
    correct: "b",
  },
  // second question
  {
    question: "________ Javascript is also called client-side",

    a: "Native",
    b: "Microsoft",
    c: "LiveWire",
    d: "Navigator",
    correct: "d",
  },

  {
    question: "What should appear at the very end of your Javascript?",
    a: "the </script>",
    b: "the <script>",
    c: "The End Statement",
    d: "None of the Above",

    correct: "a",
  },
  // third question
  {
    question: "Which of the following can't be done with a Client side",

    a: "Validating a form",
    b: "Sending a form's contents by email",
    c: "Storing the form's content to a database file on the server",
    d: "None of the above",
    correct: "c",
  },

  //   fourth question
  {
    question:
      "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    a: "User’s machine running a Web browser",
    b: "The Web server",
    c: " A central machine deep within Netscape’s corporate offices",
    d: "None of the above",
    correct: "a",
  },
  // fifth question
  {
    question: "Which among this is a feature of Javascript functions",
    a: "Return a value",
    b: "Accept parameters and Return a value",
    c: "Accept parameters",
    d: "None of the above",
    correct: "c",
  },
  {
    question: "Which of the following is not a correct naming convention",
    a: "_names_of_dog",
    b: "names_of-dog",
    c: "2namesofdog",
    d: "None of the above",
    correct: "c",
  },
  {
    question:
      "What is used to display plain text in the console of the Chrome Developer tools",
    a: "console.log()",
    b: "console.table()",
    c: "alert()",
    d: "console.error()",
    correct: "a",
  },
  {
    question: "What is JavaScript?",
    a: "JavaScript is a scripting language used to make the website interactive",
    b: "JavaScript is an assembly language used to make the website interactive",
    c: "JavaScript is a compiled language used to make the website interactive",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "var js = (function(x) {return x*x;}(10));",
    a: "Exception will be thrown",
    b: "Memory leak",
    c: "Error",
    d: "Yes",
    correct: "d",
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

let currentQuiz = Math.floor(Math.random() * 10);
let score = 0;

// start the Quiz
startQuiz();

function startQuiz() {
  // deselectAnswers();
  const currentQuizData = Questions[currentQuiz];
  console.log(currentQuizData);

  questionE.textContent = currentQuizData.question;
  optiona.textContent = currentQuizData.a;
  optionb.textContent = currentQuizData.b;
  optionc.textContent = currentQuizData.c;
  optiond.textContent = currentQuizData.d;
}

// Making sure each answer is deselected
deselectAnswers = () => {
  answersEls.forEach((answerEl) => (answerEl.checked = false));
};

// for each option that get selected
function getSelected() {
  let answer;
  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// submitting each answer

submit_button.addEventListener("click", () => {
  const answer = getSelected();
  let scoreCalculated = (score / Questions.length) * 100;
  if (answer) {
    if (answer === Questions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < Questions.length) {
      startQuiz();
    } else {
      quizcontainer.textContent = `You scored  ${scoreCalculated}%`;
    }
  }
});
