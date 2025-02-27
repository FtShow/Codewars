const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
const getMaxValue = (numbers) => {

    let result = numbers[0]
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] > result){
            result = numbers[i]
        }
    }
    return result
}

console.log(getMaxValue(numbers))