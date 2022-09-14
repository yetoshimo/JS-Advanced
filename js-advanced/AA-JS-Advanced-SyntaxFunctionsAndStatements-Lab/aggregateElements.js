function aggregateElements(givenArray) {
    let sumElements = givenArray.reduce((a, b) => a + b, 0);
    let sumInverse = givenArray.reduce((a, b) => a + 1/b, 0);
    let concatElements = givenArray.join('');

    console.log(sumElements);
    console.log(sumInverse);
    console.log(concatElements);
}

aggregateElements([1, 2, 3]);