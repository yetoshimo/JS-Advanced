function addOrRemove(givenCommands) {
    let counter = 1;

    let elements = [];

    givenCommands.forEach(element => {
        switch (element) {
            case 'add':
                elements.push(counter);
                counter++;
                break;
            case 'remove':
                elements.pop();
                counter++;
                break;
        }
    });

    if (elements.length != 0) {
        console.log(elements.join('\n'));
    } else {
        console.log('Empty');
    }
}

// addOrRemove(['add',
//     'add',
//     'add',
//     'add']
// )

// addOrRemove(['add',
//     'add',
//     'remove',
//     'add',
//     'add']
// )

addOrRemove(['remove',
    'remove',
    'remove']
)