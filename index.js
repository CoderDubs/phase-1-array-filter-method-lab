// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, strings){
    return drivers.filter(driver => driver.slice(0, strings.length).toLowerCase() === strings.toLowerCase());
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}