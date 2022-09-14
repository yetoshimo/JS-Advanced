function fruit(fruitName, fruitWeight, fruitPrice) {
    let weightInKg = fruitWeight / 1000;
    let totalPrice = weightInKg * fruitPrice;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitName}.`)
}

fruit('orange', 2500, 1.80)

fruit('apple', 1563, 2.35)