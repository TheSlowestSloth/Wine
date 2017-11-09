<?php

class RepositoryCategorie{

    private $connexion;

    public function __construct($connexion){
        $this->connexion = $connexion;
    }



    public function selectCategorie(ClassCategorie $categorie){

        $object = $this->connexion->prepare("SELECT * FROM categories");
        $object->execute(array(
        ));
        $result = $object->fetchAll(PDO::FETCH_ASSOC);
        return $result;

    }
    
}

?>