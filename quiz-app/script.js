const quizData = [
    {
        question: 'How old are I?',
        answer1: {
            data: '10',
            correct: false
        },
        answer2: {
            data: '17',
            correct: false
        },
        answer3: {
            data: '25',
            correct: false
        },
        answer4: {
            data: '300',
            correct: true
        }
    },
    {
        question: 'What is the most used programming language in 2019?',
        answer1: {
            data: 'Java',
            correct: true
        },
        answer2: {
            data: 'C',
            correct: false
        },
        answer3: {
            data: 'Python',
            correct: false
        },
        answer4: {
            data: 'JavaScript',
            correct: false
        }
    },
    {
        question: 'Who is the Prime Minister of India?',
        answer1: {
            data: 'Arvind Kejriwal',
            correct: false
        },
        answer2: {
            data: 'Sonia Gandhi',
            correct: false
        },
        answer3: {
            data: 'Rahul Gandhi',
            correct: false
        },
        answer4: {
            data: 'Narendra Modi',
            correct: true
        }
    },
    {
        question: 'What does HTML stand for?',
        answer1: {
            data: 'Cascading Style Sheets',
            correct: false
        },
        answer2: {
            data: 'HyperText Markup Language',
            correct: true
        },
        answer3: {
            data: 'JavaScript Object Notation',
            correct: false
        },
        answer4: {
            data: 'Application Programming Interface',
            correct: false
        }
    },
    {
        question: 'What year was JavaScript launched?',
        answer1: {
            data: '1980',
            correct: false
        },
        answer2: {
            data: '1999',
            correct: false
        },
        answer3: {
            data: '1995',
            correct: true
        },
        answer4: {
            data: '1972',
            correct: false
        }
    }
];

const quizElement = document.getElementById('quiz');

const questionElement  = document.getElementById('question');

const answer1_text = document.getElementById('answer1_text');
const answer2_text = document.getElementById('answer2_text');
const answer3_text = document.getElementById('answer3_text');
const answer4_text = document.getElementById('answer4_text');

const submitButton = document.getElementById('submit');

let currentQuestionIndex = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    answer1_text.innerText = currentQuestion.answer1.data;
    answer2_text.innerText = currentQuestion.answer2.data;
    answer3_text.innerText = currentQuestion.answer3.data;
    answer4_text.innerText = currentQuestion.answer4.data;

    const answerElements = document.querySelectorAll('.answer');
    answerElements.forEach(answerElement => {
        answerElement.checked = false;
    });

    document.getElementById('submit').blur();
}

function getSelection() {
    const answerElements = document.querySelectorAll('.answer');
    let answer = undefined; 
    answerElements.forEach(answerElement => {
        if (answerElement.checked ) {
            answer = answerElement.id;
        }
    });

    return answer;
}

submitButton.addEventListener('click', () => {
    const answer = getSelection();

    if (answer) {
        if (quizData[currentQuestionIndex][`${answer}`].correct) {
            score++;
        }

        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuiz();
        }
        else {
            quizElement.innerHTML = `
                <h2>
                    Your answered ${score}/${quizData.length} questions correctly.
                </h2>
                <button onclick="location.reload()">
                    Reload
                </button>
            `
        }
    }
    
})