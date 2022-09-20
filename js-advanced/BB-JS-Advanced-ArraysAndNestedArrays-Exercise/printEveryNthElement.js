function printNthElement(givenArray, step) {
    let elements = [];
    for (let i = 0; i < givenArray.length; i += step) {
        elements.push(givenArray[i]);
    }

    return elements;
}


console.log(printNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
))