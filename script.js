//an array contains questions and answers
const data = [
    {
        id: 1,
        question: "Who is the first Avenger introduced in the MCU?",
        answers: [
            { answer: "Iron Man", isCorrect: false },
            { answer: "Thor", isCorrect: false },
            { answer: "Caption America", isCorrect: true },
            { answer: " Black Widow ", isCorrect: false },
        ],
    },

    {
        id: 2,
        question: "What is the name of Tony Stark's AI assistant?",
        answers: [
            { answer: " J.A.R.V.I.S.", isCorrect: true },
            { answer: "F.R.I.D.A.Y.", isCorrect: false },
            { answer: " H.E.L.E.N.", isCorrect: true },
            { answer: " S.I.R.I.", isCorrect: false },
        ],
    },

    {
        id: 3,
        question: "What is the name of Thor's enchanted hammer?",
        answers: [
            { answer: "Mjolnir", isCorrect: true },
            { answer: "Gungnir", isCorrect: false },
            { answer: "Stormbreaker", isCorrect: false },
            { answer: " Ragnarok", isCorrect: false },
        ],
    },

    {
        id: 4,
        question: "Which film marks the first appearance of the character Black Panther in the MCU?",
        answers: [
            { answer: " Captain America: Civil War", isCorrect: true },
            { answer: " Black Panther", isCorrect: false },
            { answer: "Avengers: Age of Ultron", isCorrect: false },
            { answer: " Spider-Man: Homecoming ", isCorrect: false },
        ],
    },
    {
        id: 5,
        question: "What is the name of the planet where the Guardians of the Galaxy first meet?",
        answers: [
            { answer: "Xandar", isCorrect: true },
            { answer: "Knowhere", isCorrect: false },
            { answer: "Titan ", isCorrect: false },
            { answer: " Morag  ", isCorrect: false },
        ],
    },

    {
        id: 6,
        question: "In which movie does the character Doctor Strange make his debut in the MCU?",
        answers: [
            { answer: "Doctor Strange ", isCorrect: true },
            { answer: " Thor: Ragnarok", isCorrect: false },
            { answer: "Guardians of the Galaxy Vol. 2", isCorrect: false },
            { answer: "  Avengers: Infinity War ", isCorrect: false },
        ],
    },
];




//targeting the game screen and their components and the adding events to them;
const gameScreen = document.querySelector('.game');
//submit button
const submit = document.querySelector('.submit');
//answer container
const answersContainer = document.querySelector('.answers');
//question
const questions = document.querySelector('.mainQuestion');
//result container
const result = document.querySelector('.result');
//play again button;
const play = document.querySelector('.play');


//index number will be strored in an variable where index = 0 indicates question no. 1(as we are using array);
let questionIndex = 0;
//variable storing number of correct answers;
let correctAnsers = 0;
//variable storing number of wrong answers;
let wrongAnswers = 0;
//score will be stored here;
let finalScore = 0;
//answers selected by the user;
let selectedAnswers; //either true or false thats why we do not assign 0 or any other value in it;

const playAgain = () => {
    questionIndex = 0;
    correctAnsers = 0;
    wrongAnswers = 0;
    finalScore = 0;
    selectedAnswers; //either true or false thats why we do not assign 0 or any other value in it;

}

play.addEventListener('click', () => {
    result.style.display = 'none';
    gameScreen.style.display = 'block';
    playAgain();
})

const showResult = () => {
    result.style.display = 'block';
    gameScreen.style.display = 'none';

    result.querySelector('.correct').textContent =
        `Correct Answers: ${correctAnsers}`

    result.querySelector('.wrong').textContent =
        `Wrong Answers: ${wrongAnswers}`

    result.querySelector('.score').textContent =
        `Scores: ${(correctAnsers - wrongAnswers) * 10}`;

}

//fucntion which shows question;
const showQuestion = (qNumber) => { //qnumber is the questionIndex(qnumber is just an argument passed);
    selectedAnswers = null;

    if (questionIndex === data.length) return showResult();
    questions.textContent = data[qNumber].question; //for questions

    //for answers;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
        `
        <div class="answer">
            <input type="radio" name="answers" value="${item.isCorrect}" id="${index}">
            <label for="${index}">${item.answer}</label>
        </div>

        `
    ).join(' ');

    selectAnswer();
}

//This function is called inside the above function;
const selectAnswer = () => {
    answersContainer.querySelectorAll('input').forEach((el) => {
        el.addEventListener('click', (e) => {
            selectedAnswers = e.target.value;
        })
    })
}


//function for submit button;
const submitAnswer = () => {
    submit.addEventListener('click', () => {
        if (selectedAnswers !== null) {
            selectedAnswers === 'true' ? correctAnsers++ : wrongAnswers++;
            questionIndex++;
            showQuestion(questionIndex);
        } else alert("Bakchodi mat kar laude!");
    })
}
showQuestion(questionIndex);
submitAnswer();