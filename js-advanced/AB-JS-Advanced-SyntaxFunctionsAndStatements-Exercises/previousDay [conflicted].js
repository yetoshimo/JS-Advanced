function previousDay(year, month, day) {
    let givenDate = new Date(year, month, day).getTime();

    let yesterday = givenDate.getDate() - 1;
    
    console.log(yesterday);
}

previousDay(2016, 9, 30)