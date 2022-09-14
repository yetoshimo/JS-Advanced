function roadRadar(speed, area) {
    let limit = Number();
    
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;
    }

    if (speed <= limit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else {
        let difference = speed - limit;
        if (difference <= 20) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`);
            return;
        }
        else if (difference <= 40) {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`);
            return;
        } else {
            console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`);
            return;
        }
    }

}


roadRadar(150, 'motorway')