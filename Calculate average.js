// Write a function which calculates the average of the numbers in a given list.
// Note: Empty arrays should return 0.
function findAverage(array) {
    if(array.length !== 0){
      let result = 0
       for(let elem of array){
         result+=elem;
       }
      return result/array.length
    }
    return 0;
  }