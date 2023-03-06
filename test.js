// Question 1


/**
 * Pays dont au moins un pays frontalier n’est pas dans le même continent
 */
function outsideTheContinent() {
    for (let codeAlpha3 in all_countries) {
        console.log(all_countries[codeAlpha3].getBorders());
    }
}

// Question 2
function moreNeighbors() {}

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


outsideTheContinent();