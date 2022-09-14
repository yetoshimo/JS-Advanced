function sumOfNumbers(begin, end) {
    let result = Number();
    let beginning = Number(begin);
    let ending = Number(end);
    for (let i = beginning; i <= ending; i++) {
        result += i;
    }
    console.log(result);
}

sumOfNumbers('-8', '20');