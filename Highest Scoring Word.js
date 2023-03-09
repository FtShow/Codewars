// Given a string of words, you need to find the highest scoring word.
// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
// For example, the score of abad is 8 (1 + 2 + 1 + 4).
// You need to return the highest scoring word as a string.
// If two words score the same, return the word that appears earliest in the original string.
// All letters will be lowercase and all inputs will be valid.

function high(x){
  let arr = x.split(' ')
  let result = '';
  let maxValue = 0;
  for(let elem of arr){
    let temp = 0;
    let wordValue = elem.split('').reduce((acc, sym )=> acc+=sym.charCodeAt(0) - 96, 0);
    if(wordValue>maxValue){
      maxValue = wordValue
      result = elem;
    }
  }
  return result;
}

