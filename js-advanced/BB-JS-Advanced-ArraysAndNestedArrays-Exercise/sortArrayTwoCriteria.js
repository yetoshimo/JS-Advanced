function sortWithTwoCriteria(givenArray) {
    givenArray = givenArray.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(givenArray.join('\n'));
}

sortWithTwoCriteria(['alpha',
    'beta',
    'gamma','muhmut', 'mehmut']
)

// sortWithTwoCriteria(['Isacc',
//     'Theodor',
//     'Jack',
//     'Harrison',
//     'George']
// )