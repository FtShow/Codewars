// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

function alphabetPosition(text) {
  let textS = text.toLowerCase().split('');
let result = textS.map(elem=>elem.charCodeAt(0) - 96).filter(elem=> elem>0 && elem < 27)
return result.join(' ');
}