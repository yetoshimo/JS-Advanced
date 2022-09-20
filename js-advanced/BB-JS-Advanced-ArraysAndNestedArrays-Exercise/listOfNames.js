function listOfNames(givenArray) {
    let counter = 1;
    givenArray.sort((a, b) => a.localeCompare(b)).forEach(element => {
        console.log(`${counter}.${element}`);
        counter++;
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"])