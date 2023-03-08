// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
function XO(str) {
    let result = 0;
    let counter = str.toLowerCase().split('').map(elem=>{
      if(elem == 'x'){
        result++;
      }
      if(elem == 'o'){
        result --;
      }
    })
      return result == 0? true: false;
    }