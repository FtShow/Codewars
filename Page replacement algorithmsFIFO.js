function fifo(n, referenceList) {
	let arr = new Array(n).fill(-1);
  let index = 0;
  for(let elem of referenceList){
    if(!arr.includes(elem)){
      arr[index] = elem;
      index = index==n-1? 0: index +1;  
    }
  }
  return arr;
}