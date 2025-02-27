// 4 = 1 1 2 3 5 8 13 21
const fibonacci = (numbers) =>{
    return numbers <= 1 ? numbers :  fibonacci(numbers -1) +  fibonacci(numbers-2)
}

console.log(fibonacci(7))


