
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
//outsideTheContinent();


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
//moreNeighbors();

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
//neighborless();

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
    res = all_countries;
    res2 = [];

    let cpt = 0;
    for (const country in res) {
        cpt++;
    }
    
    for (let i = 0; i < cpt; i++) {
        let country_max = null;
        let max = 0;
        
        // Recherche du Maximum
        for (const codeAlpha3 in res) {
            if (res[codeAlpha3].getPopDensity() > max && !res2.includes(res[codeAlpha3])) {
                country_max = res[codeAlpha3];
                max = res[codeAlpha3].getPopDensity();
            }
        }
        if(country_max != null){
            res2.push(res[country_max.codeAlpha3]);
        }
    }

    cpt = 1;
    
    for (const countrie of res2) {
        console.log(`N°${cpt} : ${countrie.nom} (${countrie.getPopDensity()})`);
        cpt++;
    }
    
}
sortingDecreasingDensity();

// Question 8
function moreTopLevelDomains() {
    for (const country in all_countries) {
        if (all_countries[country]._topLevelDomains.length > 1) {
            console.log(`${all_countries[country].nom} possède ${all_countries[country].topLevelDomains.length} Top Level Domains Internet : `);
            for (const topLevelDomains of all_countries[country].topLevelDomains) {
                console.log(`${topLevelDomains}`);
            }
            console.log("");
        } 
    }
}
//moreTopLevelDomains();

// Question 9
function veryLongTrip(nom_pays){
    var LongTrip = new Set();
    
    function StartCountrie_search(nom_pays) {
        var StartCountrie;
        for (const codeAlpha3 in all_countries) {
            if(all_countries[codeAlpha3].nom == nom_pays){
                StartCountrie = all_countries[codeAlpha3];
                break;
            }
        }
        return StartCountrie;
    }

    let StartCountrie = StartCountrie_search(nom_pays);
    for (const BorderCountrie of StartCountrie.getBorders()) {
        LongTrip.add(BorderCountrie.nom);
    }

    let i = 0;
    let CountrieList = LongTrip;
    let trouve = true;
    while(trouve){
        trouve = false;
        let LongTrip_temp = new Set();
        for (const Countrie of CountrieList){
            StartCountrie = StartCountrie_search(Countrie);
            for (const BorderCountrie of StartCountrie.getBorders()) {
                if(!LongTrip.has(BorderCountrie.nom)){
                    LongTrip_temp.add(BorderCountrie.nom);
                    trouve = true;
                }
            }
        }
        CountrieList = LongTrip;
        i++;
        LongTrip_temp.forEach(LongTrip.add, LongTrip);
    }
    console.log(`Liste des pays visitable en partant de ${nom_pays} : (${LongTrip.size} pays)`);
    for (const Countrie of LongTrip) {
        console.log(`- ${Countrie}`);
    }
}
//veryLongTrip("France");