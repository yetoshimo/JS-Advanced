function wordsUpperCase(givenText) {
    let wordRegex = /(\w+)/g;
    let matches = [];
    givenText.match(wordRegex).forEach(element => {
        matches.push(element.toUpperCase());
    });

    console.log(matches.join(', '))
}

wordsUpperCase('Hi, how are you?')