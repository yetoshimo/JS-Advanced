function constructionCrew(givenInput) {
    let worker = givenInput;

    if (worker.dizziness) {
        worker.dizziness = false;
        worker.levelOfHydrated = worker.levelOfHydrated + worker.weight * worker.experience * 0.1;
    }

    return worker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}
))

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}
))