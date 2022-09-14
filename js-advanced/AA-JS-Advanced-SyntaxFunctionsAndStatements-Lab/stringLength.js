function stringLength(firstInput, secondInput, thirdInput) {
    let firstLength = firstInput.length 
    let secondLength = secondInput.length
    let thirdLength = thirdInput.length;
    let averageLength = Math.floor((firstLength + secondLength + thirdLength) / 3);
    console.log(firstLength + secondLength + thirdLength);
    console.log(averageLength);
}


stringLength('chocolate', 'ice cream', 'cake')