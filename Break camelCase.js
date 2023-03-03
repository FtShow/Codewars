// Complete the solution so that the function will break up camel casing, using a space between words.

// complete the function
function solution(string) {
  let result = []
    let arrStr = string.split('');
  for(let i = 0; i<arrStr.length; i++){
    if(arrStr[i]==arrStr[i].toUpperCase()){
      result.push(' ');
      result.push(arrStr[i]);
    }
    else{
      result.push(arrStr[i]);
    }
  }
  return result.join('')
}
