function townsToJSON(givenInput) {

    let towns = [];

    class Town {
        constructor(Town, Latitude, Longitude) {
            this.Town = Town;
            this.Latitude = Number(Latitude);
            this.Longitude = Number(Longitude);
        }
    }

    givenInput.shift();

    for (let town of givenInput) {

        let townName = town.split('|')[1].trim();
        let townLatitude = Number(town.split('|')[2].trim()).toFixed(2);
        let townLongitude = Number(town.split('|')[3].trim()).toFixed(2);

        towns.push(new Town(townName, townLatitude, townLongitude))
    }

    console.log(JSON.stringify(towns))
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)