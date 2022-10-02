function calorieObject(givenArray) {
    
    let calories = {}
    
    for (let i = 0; i < givenArray.length; i++) {
        calories[givenArray[i]] = Number(givenArray[i + 1]);
        i++;
    }

    console.log(calories);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])