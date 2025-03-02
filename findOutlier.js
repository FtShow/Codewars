function findOutlier(integers){
    let z = 0
    let result
    for(let i = 0; i< integers.length; i++){
        integers[i] % 2 === 0? z++: z--
    }
    let honest = z > 0
    for(let num of integers){
        if ((num % 2 === 0) !== honest){
            return num
        }
    }


}