function cooking(givenNumber, operation1, operation2, operation3, operation4, operation5) {
    function action(num, op) {
        switch (op) {
            case 'chop': return num / 2;
            case 'dice': return Math.sqrt(num);
            case 'spice': return num + 1;
            case 'bake': return num * 3;
            case 'fillet': return num * 0.8;
        }
    }

    givenNumber = action(givenNumber, operation1);
    console.log(givenNumber);
    givenNumber = action(givenNumber, operation2);
    console.log(givenNumber);
    givenNumber = action(givenNumber, operation3);
    console.log(givenNumber);
    givenNumber = action(givenNumber, operation4);
    console.log(givenNumber);
    givenNumber = action(givenNumber, operation5);
    console.log(givenNumber);
}

// cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')

cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')