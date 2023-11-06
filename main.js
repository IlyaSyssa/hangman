const words = require('./words.json');

function getRandomWord(){
    const max = words.length; 
    const index = Math.floor(Math.random() * max);
    return words[index];
}

console.log(getRandomWord());