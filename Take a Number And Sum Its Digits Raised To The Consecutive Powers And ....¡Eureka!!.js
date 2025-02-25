function sumDigPow(a, b) {
    const result = []
    for(let i = a; i <= b; i++){
        let arr = i.toString().split('').reduce((acc, el, idx)=> acc + Math.pow(Number(el), idx+1), 0)

        if(i == arr){
            result.push(i)
        }
    }
    return result
}