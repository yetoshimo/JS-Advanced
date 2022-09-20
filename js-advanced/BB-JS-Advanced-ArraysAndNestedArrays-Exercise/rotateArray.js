function rotateArray(givenArray, rotation) {
    let element;

    for (let i = 0; i < rotation; i++) {
        element = givenArray.pop();
        givenArray.unshift(element);
    }

    return givenArray.join(' ');
}


console.log(rotateArray(['1',
    '2',
    '3',
    '4'],
    2
))


console.log(rotateArray(['Banana',
    'Orange',
    'Coconut',
    'Apple'],
    15
))