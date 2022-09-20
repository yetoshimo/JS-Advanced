function sortingNumbers(givenArray) {
    let sortedArray = [];
    
    givenArray = givenArray.sort((a, b) => a - b);
    
    let counter = givenArray.length;

    for (let i = 0; i < counter; i++) {
        if (i % 2 === 0) {
            sortedArray.push(givenArray.shift());
        } else {
            sortedArray.push(givenArray.pop());
        }
    }

    return sortedArray
}


console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]))