function lowestPrice(givenInput) {
    let result = {};
    for (let town of givenInput) {
        let [townName, productName, productPrice] = town.split(' | ');
        if (!result.hasOwnProperty(productName)) {
            result[productName] = { town: townName, price: Number(productPrice) };
        } else if (result[productName].price > Number(productPrice)) {
            result[productName].price = Number(productPrice);
            result[productName].town = townName;
        }
    }

    for (let [k, v] of Object.entries(result)) {
        console.log(`${k} -> ${v.price} (${v.town})`)
    }
}

lowestPrice(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']
)