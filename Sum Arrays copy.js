// Regex validate PIN code

function validatePIN(pin) {
    let arrOfPin = pin.split('');
    console.log(arrOfPin)

    let filterArr = arrOfPin.filter(elem => !Number.isInteger(Number(elem)) || elem == '\n');

    if (filterArr.length == 0 && (arrOfPin.length == 4 || arrOfPin.length == 6)) {
        return true
    } else {
        return false;
    }
}
