<?php
    class Language {
        
        // Instances
        private static $all_languages;

        // Constructeur
        public function __construct($language) {
            $this->language = $language;
        }

        public function addCurrency($language) {
            $this.$all_languages.push($language);
        }
    }
?>