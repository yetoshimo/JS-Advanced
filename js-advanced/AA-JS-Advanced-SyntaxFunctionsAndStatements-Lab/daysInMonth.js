function daysInMonth(givenMonth, givenYear) {
    let result = new Date(givenYear, givenMonth, 0).getDate();
    console.log(result);
}


daysInMonth(2, 2021);