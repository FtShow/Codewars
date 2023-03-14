// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let result = s.split(' ').map((elem)=>elem.length);
   return Math.min.apply(null, result)
   }