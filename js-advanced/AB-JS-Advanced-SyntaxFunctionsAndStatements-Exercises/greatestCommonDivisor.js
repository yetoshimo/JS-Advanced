function gcd(firstNumber, secondNumber) {
    firstNumber = Math.abs(firstNumber);
    secondNumber = Math.abs(secondNumber);
    while (secondNumber) {
        let temp = secondNumber;
        secondNumber = firstNumber % secondNumber;
        firstNumber = temp;
    }
    console.log(firstNumber);
}


// gcd(15, 5)

gcd(2154, 458)