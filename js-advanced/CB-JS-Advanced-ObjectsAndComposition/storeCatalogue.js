function storeCatalogue(givenInput) {
    let result = {}

    for (let item of givenInput) {
        let [productName, productPrice] = item.split(' : ');
        result[productName] = Number(productPrice);
    }

    let groupLetter = '';

    let sorted = Object.keys(result).sort((a, b) => a.localeCompare(b))
    
    for (let product of sorted) {
        if (groupLetter != product[0]) {
            groupLetter = product[0];
            console.log(groupLetter);
        }
        console.log(`  ${product}: ${result[product]}`)
    }
}

storeCatalogue(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']
)