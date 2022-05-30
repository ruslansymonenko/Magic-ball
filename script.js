const question = document.querySelector('#question');
const questionBtn = document.querySelector('#questionBtn');
const answerText = document.querySelector('#answerText');
const body = document.body;
const circle1 = document.querySelector('#circle1');
const circle2 = document.querySelector('#circle2');
const circle3 = document.querySelector('#circle3');
const circle4 = document.querySelector('#circle4');
const circle5 = document.querySelector('#circle5');
const circle6 = document.querySelector('#circle6');
const circle7 = document.querySelector('#circle7');


const circles = [circle1, circle2, circle3, circle4, circle5, circle6, circle7];

const colors = ['#55efc4', '#81ecec', '#74b9ff', '#a29bfe', '#00b894', '#00cec9', '#0984e3', '#6c5ce7', '#ffeaa7', '#fab1a0', '#ff7675', '#fd79a8', '#fdcb6e', '#e17055', '#d63031', '#e84393'];

let bgColorInactive = '#dfe6e9';
let bgCOlorActive = '#353b48';

const answers = ['Да', 'Нет', 'Купи пива!', 'Купи коньяк!', 'Это бред какой-то', 'Честно я хз', '42', 'Задай другой вопрос','Скорее дам, чм нет', 'Это не точно', 'Все будет хорошо', 'Ты крутой!', 'Спроси кого то другого', 'Сложный вопрос', 'Зачем тебе это', 'Иди покури', 'Магия не поможет', '2 литра пива', 'Это все компьютер виноват', 'Почему?', 'Этого никто не знает', 'В гугле есть ответ']

function cleanQuestionArea(text) {
    let questionValue = text.value;
    questionValue = '';
    return questionValue;
}

function randomAnswer (answersArray) {
    let randomElement = Math.floor(Math.random() * answersArray.length);
    return answersArray[randomElement];
}

function showAnswer (text, textElement) {
    textElement.innerHTML = text;
    textElement.style.opacity = '1';
}

function cleanAnswerArea(element) {
    element.innerHTML = '';
    element.style.opacity = '0';
}

function changeBgColor (el, active, inAvtive) {
    el.style.setProperty('--bg-color-active', active);

    setTimeout(function() {
        el.style.setProperty('--bg-color-active', inAvtive);
    }, 3000)
}

function randomColor (colorsArray) {
    let randomElement = Math.floor(Math.random() * colorsArray.length);
    return colorsArray[randomElement];;
}

function changeColorOfCircle (obj) {
    let bgColor;
    obj.forEach((el) => {
        bgColor =  randomColor(colors);
        el.style.setProperty('--random-color', bgColor);
    })

    setTimeout(function() {
        obj.forEach((el) => {
            bgColor = randomColor(colors);
            el.style.setProperty('--random-color', bgColor);
        })
    }, 500)

    setTimeout(function() {
        obj.forEach((el) => {
            bgColor = randomColor(colors);
            el.style.setProperty('--random-color', bgColor);
        })
    }, 1000)

    setTimeout(function() {
        obj.forEach((el) => {
            bgColor = randomColor(colors);
            el.style.setProperty('--random-color', bgColor);
        })
    }, 1500)


    setTimeout(function() {
        obj.forEach((el) => {
            bgColor = randomColor(colors);
            el.style.setProperty('--random-color', bgColor);
        })
    }, 2000)

    setTimeout(function() {
        obj.forEach((el) => {
            bgColor = randomColor(colors);
            el.style.setProperty('--random-color', bgColor);
        })
    }, 2500)

    setTimeout(function() {
        obj.forEach((el) => {
            bgColor = '#c8d6e5';
            el.style.setProperty('--random-color', bgColor);
        })
    }, 3000)
}


questionBtn.addEventListener('click', () => {
    question.value = cleanQuestionArea(question);
    let newAnswer = randomAnswer(answers);
    cleanAnswerArea(answerText);

    setTimeout(function() {
        showAnswer(newAnswer, answerText);
    }, 3000)
})

questionBtn.addEventListener('click', () => {
    changeBgColor(body, bgCOlorActive, bgColorInactive);
    changeColorOfCircle(circles);
})