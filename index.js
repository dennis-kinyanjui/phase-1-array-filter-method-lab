// Code your solution here

function findMatching(drivers,query){
    return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());

}

// find the names that begin with the given letters
function fuzzyMatch (drivers,query){
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));


}
// find matching names with the given strings
function matchName(drivers, query){
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
    
}