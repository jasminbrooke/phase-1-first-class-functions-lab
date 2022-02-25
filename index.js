// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2, 4)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(fareMultiplier) {
    return function(fare) {
        return fare * fareMultiplier
    }
}

const fareDoubler = function(fare) {
   let doubler = createFareMultiplier(2)
    return doubler(fare)
}

const fareTripler = function(fare) {
    let tripler = createFareMultiplier(3)
     return tripler(fare)
 }

 const selectDifferentDrivers = function(arrayOfDrivers, either){
    return either(arrayOfDrivers)
 }