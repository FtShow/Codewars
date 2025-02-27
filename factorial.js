const getFactorial = (number) => {
    return number? number * getFactorial(number-1): 1
}
console.log(getFactorial(5))


