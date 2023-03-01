<?php
    // $countries = file_get_contents("countries.json");

    // $countriesJson = json_decode($countries);

    // $all_currencies = [];
    
    // for ($i=0; $i <count($countriesJson); $i++) { 
    //     // Si le champ "currencies" existe dans le cas $i
    //     if(isset($countriesJson[$i]->currencies)) {
    //         // On ajoute dans le tableau all_currencies en clés la vauleur du champ code
    //         $code = $countriesJson[$i]->currencies[0]->code;
    //         $all_currencies[$code] = true;
    //     }
    // }

    // echo "<pre>";
    // print_r($all_currencies);
    // echo "</pre>";

    class Currency {

        // Properties
        public $currency;

        static public $all_currencies = array(); // tableau associatif d'objets Country

        // Constructor
        public function __construct($currency) {
            $this->currency = $currency;
        }

        // Methods
        function toString() {
            return "Monnaie du pays : " + $this->currency;
        }

        public function addCurrency($currency) {
            array_psuh($this.$all_currencies, $currency);
        }
    
        // Methods GETTER & SETTER
        function set_currency($currency) {
            $this->currency = $currency;
        }

        function get_currency() {
            return $this->currency;
        }
    }

?>