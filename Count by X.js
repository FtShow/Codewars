// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let result = [];
  let start = 0;
  for(let i = 0; i < n; i++){
    result.push(start += x)
  }
  return result  
}