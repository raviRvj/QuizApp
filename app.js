const quizQuestions = [
  {
    question: "Javascript is an _______ language?",
    a: "Object-oriented",
    b: "Object-based",
    c: "Procedural",
    d: "None of these",
    ans: "ans1",
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    a: "var",
    b: "let",
    c: "Both a and b",
    d: "None of these",
    ans: "ans3",
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementByID()",
    b: "getElementsByClassName()",
    c: "Both a and b",
    d: "None of these",
    ans: "ans3",
  },
  {
    question:
      "Upon encountering empty statements, what does the Javascript Interpreter do?",
    a: "Throws an error",
    b: "Ignores the statements",
    c: "Gives a warning",
    d: "None of the above",
    ans: "ans2",
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    ans: "ans4",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const scoreArea = document.querySelector(".scoreArea");

let questionCount = 0;
let score = 0;

const loadQuestion =() => {
    question.innerText = quizQuestions[questionCount].question;
    option1.innerText = quizQuestions[questionCount].a;
    option2.innerText = quizQuestions[questionCount].b;
    option3.innerText = quizQuestions[questionCount].c;
    option4.innerText = quizQuestions[questionCount].d;
};

loadQuestion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((currentElement)=>{
        if(currentElement.checked) {
            answer = currentElement.id;
        }
    });
    return answer;
};

const deselectQuestion = () => {
    answers.forEach((currentElement)=>{
        currentElement.checked = false;
    });
};


submitButton.addEventListener("click", () => {
    const checkedAnswer = getCheckedAnswer();
    if (questionCount >= quizQuestions.length) {
        window.alert("Please play again");
        questionCount = quizQuestions.length - 1;
    }
    if (checkedAnswer === quizQuestions[questionCount].ans) {
        // Increase Score
        score++;
    }
    questionCount ++;
    deselectQuestion();

    if (questionCount < quizQuestions.length) {
        loadQuestion();
    }
    else {
        scoreArea.innerHTML = `
            <h3>You have scored ${score}/${quizQuestions.length}</h3>
            <button onclick="location.reload()">Play Again</button>
        `
    }
});