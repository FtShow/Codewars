// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
// Note: a and b are not ordered!

function getSum(a, b){
  let minValue = a<b? a : b;
   let maxValue = a > b? a : b;
   let result = 0;
    for(let i = minValue; i <= maxValue; i++){
      result+=i;
    }
   return result
 }