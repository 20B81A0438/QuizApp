const quizData = [
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "Hyperlinking Textual Marking Language",
        correct: "a",
    },
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which property is used to change the background color?",
        a: "color",
        b: "bgcolor",
        c: "background-color",
        d: "background",
        correct: "c",

    },
    {
        question: "Which company developed JavaScript?",
        a: "Microsoft",
        b: "Netscape",
        c: "Google",
        d: "Apple",
        correct: "b",

    },
    {
        question: "Which framework is maintained by Facebook and used for building user interfaces?",
        a: "Angular",
        b: "Vue",
        c: "React",
        d: "Ember",
        correct: "c",

    },
    {
        question: "In JavaScript, which method is used to select an element by its ID?",
        a: "getElementById()",
        b: "querySelector()",
        c: "getElementsByClass()",
        d: "querySelectById()",
        correct: "a",
    },
    {
        question: "Which CSS property controls the text size?",
        a: "font-style",
        b: "text-size",
        c: "font-size",
        d: "text-style",
        correct: "c",

    },
    {

        question: "Which HTML element is used to define important text?",
        a: "<strong>",
        b: "<important>",
        c: "<b>",
        d: "<em>",
    },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});



