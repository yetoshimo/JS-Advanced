function circleArea(givenRadius) {

    function calculateArea(radius) {
        return (Math.pow(radius, 2) * Math.PI).toFixed(2);
    }

    let typeOfGivenRadius = typeof(givenRadius);

    if (typeOfGivenRadius === 'number') {
        console.log(calculateArea(givenRadius));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfGivenRadius}.`)
    }
}

circleArea(5);

circleArea('name');