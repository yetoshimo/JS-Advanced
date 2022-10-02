function heroicInventory(givenHeroes) {
    let result = [];

    for (let hero of givenHeroes) {
        let [heroName, heroLevel, heroItems] = hero.split(' / ');

        let newHero = {};

        newHero.name = heroName;
        newHero.level = Number(heroLevel);
        newHero.items = heroItems ? heroItems.split(', ') : [];

        result.push(newHero);
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)