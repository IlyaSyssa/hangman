function getRandomWord(){
    const max = words.length; 
    const index = Math.floor(Math.random() * max);
    return words[index];
}

const word = getRandomWord();
const mask = getWordMask(word);

function getWordMask(word){
    let result = '';
    for (let index = 0; index < word.length; index++) {
        result = result + '*'; 
    }
    return result;
}
document.getElementsByClassName("word")[0].innerText = mask;
let playerLives = 9;

function onClick() {
  alert('test');
}
document.getElementsByClassName("word")[0].


