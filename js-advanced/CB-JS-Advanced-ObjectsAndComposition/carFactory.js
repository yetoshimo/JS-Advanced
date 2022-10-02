function carFactory(carInput) {
    let requestedCar = carInput;

    let car = {};

    const smallEngine = { power: 90, volume: 1800 };
    const normalEngine = { power: 120, volume: 2400 };
    const monsterEngine = { power: 200, volume: 3500 };

    car.model = requestedCar.model;
    if (requestedCar.power <= smallEngine.power) {
        car.engine = smallEngine;
    } else if (requestedCar.power > smallEngine.power && requestedCar.power <= normalEngine.power) {
        car.engine = normalEngine;
    } else if (requestedCar.power >= monsterEngine.power) {
        car.engine = monsterEngine;
    }
    car.carriage = { type: requestedCar.carriage, color: requestedCar.color };
    if (requestedCar.wheelsize % 2 == 0) {
        car.wheels = Array(4).fill(requestedCar.wheelsize - 1);
    } else {
        car.wheels = Array(4).fill(requestedCar.wheelsize, 0, 4);
    }

    return car;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}))