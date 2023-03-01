<?php
class Country {
  
    // Properties

    public $monnaies;
    public $langues;

    static public $all_countries = array(); // tableau associatif d'objets Country
    

    function __construct($codeAlpha3 ,$superficie ,$paysFrontaliers ,$capitale ,$continent ,$gentile ,$drapeau ,$nom ,$population ,$topLevelDomains){
        $this->codeAlpha3 = $codeAlpha3;
        $this->superficie = $superficie;
        $this->paysFrontaliers = $paysFrontaliers;
        $this->capitale = $capitale;
        $this->continent = $continent;
        $this->gentile = $gentile;
        $this->drapeau = $drapeau;
        $this->nom = $nom;
        $this->population = $population;
        $this->topLevelDomains = $topLevelDomains;
        $this->monnaies = null;
        $this->langues = null;
    }


    // Methods 
    function toString(){
        return "Pays : $this->nom";
    }

    static function fill_db($source){
        $data = file_get_contents($source);
        $data_decode = json_decode($data);
        foreach ($data_decode as $key => $value){
            
            if(isset( $value->area)){
                $superficie =  $value->area;
            }else{
                $superficie = null;
            }
            

            if(isset($value->borders)){
                $paysFrontaliers = $value->borders;
            }else{
                $paysFrontaliers = null;
            }

            if(isset($value->capital)){
                $capitale = $value->capital;
            }else{
                $capitale = null;
            }
            
            if(isset($value->continent)){
                $continent =  $value->continent;
            }else{
                $continent = null;
            }
           
            if(isset($value->languages[0]->nativeName)){
                $gentile =  $value->languages[0]->nativeName;
            }else{
                $gentile = null;
            }
            
            $codeAlpha3 = $value->alpha3Code;
            $drapeau = $value->flags[0];
            $nom = $value->name;
            $population = $value->population;
            $topLevelDomains = $value->topLevelDomain;
            
            new Country($codeAlpha3 ,$superficie ,$paysFrontaliers ,$capitale ,$continent ,$gentile ,$drapeau ,$nom ,$population ,$topLevelDomains);   
        }
            
        return;
    }

    // -------------------- METHODS --------------------
    static function add_country($country) {
        Country::$all_countries[$country->get_codeAlpha3()] = $country;
    }

    static function remove_country() {
        // TODO
    }

    function getPopDensity(){
        return $this->population / $this->superficie;
    }

    function getBorders(){
        $bordersObject = array();
        foreach ($this->paysFrontaliers as $key => $value) {
            array_push($bordersObject,Country::$all_countries[$value]);
        }
        return $bordersObject;
    }

    // -------------------- GETTER & SETTER --------------------
    function set_codeAlpha3($codeAlpha3) {
        $this->codeAlpha3 = $codeAlpha3;
    }

    function get_codeAlpha3() {
        return $this->codeAlpha3;
    }

    function set_superficie($superficie) {
        $this->superficie = $superficie;
    }

    function get_superficie() {
        return $this->superficie;
    }

    function set_paysFrontaliers($paysFrontaliers) {
        $this->paysFrontaliers = $paysFrontaliers;
    }

    function get_paysFrontaliers() {
        return $this->paysFrontaliers;
    }
    
    function set_capitale($capitale) {
        $this->capitale = $capitale;
    }

    function get_capitale() {
        return $this->capitale;
    }

    function set_continent($continent) {
        $this->continent = $continent;
    }

    function get_continent() {
        return $this->continent;
    }

    function set_gentile($gentile) {
        $this->gentile = $gentile;
    }

    function get_gentile() {
        return $this->gentile;
    }

    function set_drapeau($drapeau) {
        $this->drapeau = $drapeau;
    }

    function get_drapeau() {
        return $this->drapeau;
    }

    function set_nom($nom) {
        $this->nom = $nom;
    }

    function get_nom() {
        return $this->nom;
    }

    function set_population($population) {
        $this->population = $population;
    }

    function get_population() {
        return $this->population;
    }

    function set_topLevelDomains($topLevelDomains) {
        $this->topLevelDomains = $topLevelDomains;
    }

    function get_topLevelDomains() {
        return $this->topLevelDomains;
    }

    function set_monnaies($monnaies) {
        $this->monnaies = $monnaies;
    }

    function get_monnaies() {
        return $this->monnaies;
    }

    function set_langues($langues) {
        $this->langues = $langues;
    }

    function get_langues() {
        return $this->langues;
    }
}



//$test = new Country($codeAlpha3 ,$superficie ,$paysFrontaliers ,$capitale ,$continent ,$gentile ,$drapeau ,$nom ,$population ,$topLevelDomains);
//echo $test->toString();
Country::fill_db("countries.json");
/*echo '<pre>',
print_r(Country::$all_countries);
echo '</pre>';*/
echo Country::$all_countries['FRA']->getPopDensity();
echo '<pre>',
print_r(Country::$all_countries['FRA']->getBorders());
echo '</pre>';  
?>