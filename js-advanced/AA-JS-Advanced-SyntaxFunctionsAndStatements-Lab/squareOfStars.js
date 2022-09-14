function squareOfStars(givenSize) {
    if (givenSize) {
        for (let i = 0; i < givenSize; i++) {
            console.log('* '.repeat(givenSize));
        }
    } else {
        givenSize = 5;
        for (let i = 0; i < givenSize; i++) {
            console.log('* '.repeat(givenSize));
        }
    }
}

// squareOfStars(7)
squareOfStars()