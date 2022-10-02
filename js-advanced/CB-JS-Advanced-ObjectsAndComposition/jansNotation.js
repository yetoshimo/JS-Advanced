function jansNotation(givenArray) {
    let numbers = [];
    let operators = [];
    let results = [];
    let result = [];

    let operatorEnumaration = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    }

    for (let item of givenArray) {
        if (typeof (item) === 'number') {
            numbers.push(Number(item));
        } else {
            operators.push(item);
        }
    }

    if (operators.length < numbers.length - 1) {
        console.log('Error: too many operands!');
        return;
    } else if (operators.length === numbers.length || numbers.length === 0) {
        console.log('Error: not enough operands!');
        return;
    }

    for (let el of givenArray) {
        if (typeof (el) === 'number') {
            results.push(el);
            continue;
        }
        let numberA = results.pop();
        let numberB = results.pop();

        let result = operatorEnumaration[el](numberB, numberA);

        results.push(result);
    }

    console.log(results[0]);
}


jansNotation([3,
    4,
    '+']
)

jansNotation([5,
    3,
    4,
    '*',
    '-']
)

jansNotation([7,
    33,
    8,
    '-']
)

jansNotation([15,
    '/']
)