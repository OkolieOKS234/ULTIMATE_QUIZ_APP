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

let currentQuiz = 0;
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
