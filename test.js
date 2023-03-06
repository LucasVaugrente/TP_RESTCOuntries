// Question 1

console.log(all_countries['CHN']);
/**
 * Pays dont au moins un pays frontalier n’est pas dans le même continent
 */
function outsideTheContinent() {
    for (let codeAlpha3 in all_countries) {
        let countrie = all_countries[codeAlpha3];
        let continent = countrie.continent;
        let borders = countrie.getBorders();
        for (const borderCountrie of borders) {
            if(borderCountrie.continent != continent){
                console.log(`${borderCountrie.nom} (${borderCountrie.continent}) est  frontalié avec ${countrie.nom} (${continent})`);

                
            }
            
        }
        
    }
}
outsideTheContinent();
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


//moreNeighbors();