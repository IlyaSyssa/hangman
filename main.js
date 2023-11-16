function getRandomWord(){
    const max = words.length; 
    const index = Math.floor(Math.random() * max);
    return words[index];
}

const word = getRandomWord();
const arrayLetters = [];
let lives = 9;

function getWordMask(word, arrayLetters){
    let result = '';
    for (let index = 0; index < word.length; index++) {
        if (arrayLetters.includes(word[index])) { 
            result = result + word[index];
        } else {
            result = result + '*';
        }
    }
    return result;
}
document.getElementsByClassName("word")[0].innerText = getWordMask(word, arrayLetters);
let playerLives = 9;

function onClick() {
  const text = document.getElementsByClassName("word-input")[0].value.toLowerCase();
  if (word.split("").includes(text)) {
    arrayLetters.push(text);
    document.getElementsByClassName("word")[0].innerText = getWordMask(word, arrayLetters);
  } else {
   lives = lives - 1; 
   document.getElementsByClassName("lives")[0].innerText = `${lives} Lives`;
  }
 
}
function displayResult(isWinner) {
    const resultMessage = isWinner ? 'You win!' : 'You lose. Try again.';
    document.getElementsByClassName("result")[0].innerText = resultMessage;
    document.getElementsByClassName("word-input")[0].disabled = true; // Запретить ввод после окончания игры
}

function updateUI() {
    document.getElementsByClassName("word")[0].innerText = getWordMask(word, arrayLetters);
    document.getElementsByClassName("lives")[0].innerText = `${lives} Lives`;

    if (getWordMask(word, arrayLetters) === word) {
        displayResult(true); // Игрок угадал слово
    } else if (lives <= 0) {
        displayResult(false); // Игрок закончил жизни
    }
}

function onClick() {
    if (lives > 0 && getWordMask(word, arrayLetters) !== word) {
        const text = document.getElementsByClassName("word-input")[0].value.toLowerCase();
        if (word.split("").includes(text)) {
            arrayLetters.push(text);
        } else {
            lives = lives - 1;
        }
        updateUI();
    }
}


