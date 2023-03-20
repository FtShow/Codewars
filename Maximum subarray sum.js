var maxSequence = function(arr){
  let tempValue = 0;
  let maxValue = 0;
  for(let i = 0; i<arr.length; i++){
    tempValue +=  arr[i];
    tempValue > maxValue ? maxValue = tempValue : maxValue;
    tempValue < 0? tempValue = 0 : tempValue;
    
  }
  return maxValue
}