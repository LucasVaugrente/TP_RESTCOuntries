
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
    return res;
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
//moreLanguages();

/** Question 5
 * Pays ayant au moins un voisin parlant l’une de ses langues. Affichez aussi les pays voisins et les langues en question.
 */
function withCommonLanguage() {
    let listeCountrieWithCommonLanguage = [];
    for (let codeAlpha3 in all_countries) {
        let countrie = all_countries[codeAlpha3];
        let languagesCountrie = countrie.langues;
        let borders = countrie.getBorders();
        for (const borderCountrie of borders) {
            let languagesBorderCountrie = borderCountrie.langues;
            for (const Borderlangues of languagesBorderCountrie) {
                for (const langues of languagesCountrie) {
                    if(langues.iso639_2 == Borderlangues.iso639_2){
                        if(listeCountrieWithCommonLanguage.indexOf([borderCountrie,countrie])== -1 && listeCountrieWithCommonLanguage.indexOf([countrie,borderCountrie])== -1){
                            listeCountrieWithCommonLanguage.push([borderCountrie,countrie]);
                        }
                    } 
                }
            }
        }
    }
    
    for (const countrieWithCommonLanguage of listeCountrieWithCommonLanguage){
        let listeCommonLanguage = [];
        for (const langue1 of countrieWithCommonLanguage[0].langues) {
            for (const langues2 of countrieWithCommonLanguage[1].langues) {
                if(langue1.iso639_2 == langues2.iso639_2){
                    listeCommonLanguage.push(langue1.name);
                }
            }
        }
        console.log(`"${countrieWithCommonLanguage[0].nom}" et "${countrieWithCommonLanguage[1].nom}" sont voisins et parlent en commun ${listeCommonLanguage}`);
        console.log(" ");
        console.log("--------------------------------");
        console.log(" ");
    }

}
//withCommonLanguage();


/** Question 6
 *
 * Pays sans aucun voisin ayant au moins une de ses
monnaies.
 */
function withoutCommonCurrency() {
    let res = [];

    for (const country in all_countries) {

        let doublon = false;
        let pays_v = all_countries[country].paysFrontaliers;
        
        // On étudie que les pays qui ont des voisins
        if (all_countries[country].getBorders().length !== 0) {

            // Pour tous les pays voisins de country
            for (let i = 0; i < all_countries[country].paysFrontaliers.length; i++) {

                // console.log(all_countries[pays_v[i]]);
                // Pour toutes les monnaies du pays voisins
                for (let j = 0; j < all_countries[country].monnaies.length; j++) {

                    // Pour toutes les monnaies du pays qu'on étudie
                    for (let k = 0; k < all_countries[pays_v[i]].getCurrencies().length; k++) {

                        // Si les 2 monnaies sont identiques, on signale qu'il y a un doublon détecté
                        if ((all_countries[pays_v[i]].getCurrencies()[k].code == all_countries[country].monnaies[j].code) ) {
                            doublon = true;
                        }
                    }
                }
            }
        }
        if (!doublon) {
            res.push(all_countries[country]);
        }
    }
    for (let i = 0; i < res.length; i++) {
        console.log(res[i].toString());        
    }
}
//withoutCommonCurrency();


// Question 7
/**
 * Pays triés par ordre décroissant de densité de
population.
 */
function sortingDecreasingDensity() {

    // res = all_countries;
    // res2 = [];

    // let cpt = 0;
    // for (const country in res) {
    //     cpt++;
    // }

    // for (let i = 0; i < cpt; i++) {
    //     let country_max = null;
    //     for (const country in res) {
    //         let max = 0;
    //         // console.log(res[country].getPopDensity());
    //         if (res[country].getPopDensity() > max) {
    //             country_max = res[country];
    //             max = res[country].getPopDensity();
    //         }
    //     }
    //     console.log(country_max.getPopDensity());
    //     res2.push(res[country_max]);
    //     res.splice(res[country_max], null, null);
    // }

    // console.log(res2);

}
// sortingDecreasingDensity();

// Question 8
function moreTopLevelDomains() {
    for (const country in all_countries) {
        if (all_countries[country]._topLevelDomains.length > 1) {
            console.log(all_countries[country]);
        } 
    }
}
moreTopLevelDomains();

// Question 9
function veryLongTrip(nom_pays) {}