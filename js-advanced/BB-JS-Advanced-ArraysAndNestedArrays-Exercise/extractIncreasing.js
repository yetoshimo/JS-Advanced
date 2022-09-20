function extractIncreasing(givenArray) {
    let biggest = givenArray[0];
    let result = givenArray.reduce((acc, current) => {
        if (biggest <= current) {
            acc.push(current);
            biggest = current;
        }
        return acc;
    }, []);

    return result;
}

console.log(extractIncreasing([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))