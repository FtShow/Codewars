function removeEveryOther(arr){
    return arr.filter((elem, index)=>(index + 1) % 2 !== 0 )
  }