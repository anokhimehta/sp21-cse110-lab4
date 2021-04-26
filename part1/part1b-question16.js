let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
}

for (let val in statistics) {
    if (val.substring(0,1) == 'r' || statistics[val]%2 != 0) {
        console.log(statistics[val])
    }
}