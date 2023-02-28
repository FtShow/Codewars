// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str) {
  let splitStr = str.split(' ');
  let result = []

  for (let elem of splitStr) {
    result.push(elem.split('').reverse().join(''))
  }
  console.log(result)
  return result.join(' ')
}