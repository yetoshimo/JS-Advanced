function previousDay(year, month, day) {

    let givenDate = new Date(year, month - 1, day);

    givenDate.setDate(givenDate.getDate() - 1);

    console.log(`${givenDate.getFullYear()}-${givenDate.getMonth() + 1}-${givenDate.getDate()}`);
    
}

previousDay(2016, 9, 30)

previousDay(2016, 10, 1)