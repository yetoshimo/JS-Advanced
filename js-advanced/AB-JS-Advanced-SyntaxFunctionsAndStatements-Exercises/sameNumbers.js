function sameNumbers(givenNumber) {
    let digits = ('' + givenNumber).split('');
    const isEqual = digits.every(e => e === digits[0])
    
    console.log(isEqual);
    console.log(digits.reduce((a, b) => Number(a) + Number(b), 0))
}

sameNumbers(2222222)

sameNumbers(1234)