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
/**
 * Pays (possibilité de plusieurs) ayant le plus grand nombre de
voisins.
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
    return voisins;
}

// Question 3
/**
 *  Pays n’ayant aucun voisin.
 */
function neighborless() {
    let res = [];
    for (const country in all_countries) {
        if (all_countries[country].paysFrontaliers == null) {
            res.push(all_countries[country]);
        }
    }
    return res;
}

// Question 4
function moreLanguages() { }

// Question 5
function withCommonLanguage() { }

// Question 6
function withoutCommonCurrency() { }

// Question 7
function sortingDecreasingDensity() { }

// Question 8
function moreTopLevelDomains() { }

// Question 9
function veryLongTrip(nom_pays) { }


console.log("Voisins du pays -> { " + moreNeighbors() + " }");
// console.log("Pays n’ayant aucun voisin : \n" + neighborless());