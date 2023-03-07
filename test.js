
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

/** Question 3
 * 
 * Pays n’ayant aucun voisin.
 */
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

/** Question 4
 * 
 * Pays (possibilité de plusieurs) parlant le plus de langues.  Affichez aussi les langues.
 **/ 
function moreLanguages() {
    let listCountrieMoreLanguages= [];
    
    for (let codeAlpha3 in all_countries) {
        let countrie = all_countries[codeAlpha3];
        let languagesCountrie = countrie.langues;
        if(listCountrieMoreLanguages.length < 1){
            listCountrieMoreLanguages.push(countrie);
        }else{
            if(listCountrieMoreLanguages[0].langues.length == languagesCountrie.length){
                listCountrieMoreLanguages.push(countrie);
            }else{
                if(listCountrieMoreLanguages[0].langues.length < languagesCountrie.length){
                    listCountrieMoreLanguages = [countrie];
                }
            }
        }
    }

    // AFFICHAGE
    for (const countrieMoreLanguages of listCountrieMoreLanguages) {
        console.log(`${countrieMoreLanguages.nom} possède ${countrieMoreLanguages.langues.length} langues différentes: `);
        for (const language of countrieMoreLanguages.langues) {
            console.log(`- ${language.name} (${language.iso639_2})`);
        }
        console.log("");
        console.log("------");
        console.log("");
    }
}
moreLanguages();

/** Question 5
 * Pays ayant au moins un voisin parlant l’une de ses langues. Affichez aussi les pays voisins et les langues en question.
 */
function withCommonLanguage() {
    for (let codeAlpha3 in all_countries) {
        let countrie = all_countries[codeAlpha3];
        let languagesCountrie = countrie.langues;
        let borders = countrie.getBorders();
        for (const borderCountrie of borders) {
            let languagesBorderCountrie = borderCountrie.langues;
            for (const Borderlangues of languagesBorderCountrie) {
                for (const langues of languagesCountrie) {
                    
                }
    
            }
        }
        if(languagesCountrie.length >1){
            console.log(`${countrie.nom} parle les langues suivantes : `);
            for (const language of languagesCountrie) {
                console.log(`- ${language.name} (${language.iso639_2})`);
            }
            console.log("");
            console.log("------");
            console.log("");
        }
    }
}

// Question 6
function withoutCommonCurrency() {}

// Question 7
function sortingDecreasingDensity() {}

// Question 8
function moreTopLevelDomains() {}

// Question 9
function veryLongTrip(nom_pays) {}