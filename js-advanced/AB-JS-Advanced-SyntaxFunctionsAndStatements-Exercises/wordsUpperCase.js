function wordsUpperCase(givenText) {
    let wordRegex = /(\w+)/g;
    // let matches = [];
    // givenText.match(wordRegex).forEach(element => {
    //     matches.push(element.toUpperCase());
    // });

    console.log(givenText.match(wordRegex).join(', ').toUpperCase())
}

wordsUpperCase('Hi, how are you?')