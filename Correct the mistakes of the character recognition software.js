function correct(string) {
    return string
        .split('')
        .map((s) => {
            if (s === "0") {
                return "O";
            } else if (s === "5") {
                return "S";
            } else if (s === "1") {
                return "I";
            } else {
                return s;
            }
        })
        .join('');
}