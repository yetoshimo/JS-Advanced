function subtract() {
    let number1 = document.getElementById('firstNumber').value;
    let number2 = document.getElementById('secondNumber').value;
   
    let result = number1 - number2;

    document.getElementById('result').innerText = result;
}