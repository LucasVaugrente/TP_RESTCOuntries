<?php
    class Language {
        
        // Instances
        private $all_languages;

        // Constructeur
        public function __construct($language) {
            $this->language = $language;
        }

        public function addCurrency($language) {
            $this.$all_languages.push($language);
        }
    }
?>