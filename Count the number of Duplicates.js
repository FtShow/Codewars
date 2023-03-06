// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text){
  let textArr = text.toLowerCase().split('');
  textArr.sort();
  let result = [];
  let counter = 0
  for(let i = 0; i<textArr.length; i++){
    if(textArr[i]==textArr[i+1] && !result.includes(textArr[i])){
      counter++;
      result.push(textArr[i])
    }
  }
  console.log(textArr, result, counter)

  return counter;
}