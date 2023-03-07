
/** Question 1
 * 
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
// outsideTheContinent();


/**Question 2
 * 
 * Pays (possibilité de plusieurs) ayant le plus grand nombre de voisins. Achez aussi les voisins
 */
function moreNeighbors() {
    let max = 0;
    let voisins = [];
    let res = null;
    for (const country in all_countries) {
        if (all_countries[country].paysFrontaliers != null) {
            if (all_countries[country].getBorders().length > max) {
                max = all_countries[country].getBorders().length;
                voisins = [];
                res = all_countries[country];
                for (let i = 0; i < max; i++) {
                    voisins.push(all_countries[country].getBorders()[i]);
                }
            }
        }
    }
    console.log("Pays ayant le plus de voisins -> " + res.toString());
    console.log("Ses voisins : ");
    for (let i = 0; i < voisins.length; i++) {
        console.log("   " + voisins[i].toString());        
    }
}

// moreNeighbors();

// Question 3
function neighborless() {
    let res = [];
    for (const country in all_countries) {
        if (all_countries[country].paysFrontaliers == null) {
            res.push(all_countries[country]);
        }
    }
    console.log("Pays n'ayant aucun voisin : ");
    for (let i = 0; i < res.length; i++) {
        console.log("   " + res[i].toString());
    }
}

// neighborless();

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