// Question 1


/**
 * Pays dont au moins un pays frontalier n’est pas dans le même continent
 */
function outsideTheContinent() {
    
    

    for (const countries in all_countries) {
        console.log(countries.getPopDensity());
    }
}

// Question 2
/**
 * Pays (possibilité de plusieurs) ayant le plus grand nombre de
voisins. Achez aussi les voisins
 */
function moreNeighbors() {
    let max = 0;
    for (const country in all_countries) {
        console.log(all_countries[country].getBorders());
    }
}

// Question 3
function neighborless() {}

// Question 4
function moreLanguages() {}

// Question 5
function withCommonLanguage() {}

// Question 6
function withoutCommonCurrency() {}

// Question 7
function sortingDecreasingDensity() {}

// Question 8
function moreTopLevelDomains() {}

// Question 9
function veryLongTrip(nom_pays) {}


moreNeighbors();