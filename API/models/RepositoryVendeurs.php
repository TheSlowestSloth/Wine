<?php

class RepositoryVendeurs{

    private $connexion;

    public function __construct($connexion){
        $this->connexion = $connexion;
    }

    public function insertVend(ClassVendeurs $vendeurs){

        $object = $this->connexion->prepare("INSERT INTO vendeurs SET name=:name");
        $object->execute(array(
            "name" => $vendeurs->getName()
        ));

        return $this->selectVendeurId($vendeurs);

    }

    public function selectVendeurId(ClassVendeurs $vendeurs){

        $object = $this->connexion->prepare("SELECT id FROM vendeurs WHERE name=:name");
        $object->execute(array(
            "name" => $vendeurs->getName()
        ));
        $result = $object->fetch(PDO::FETCH_ASSOC);
        return $result;

    }

    public function selectVendeurs(ClassVendeurs $vendeurs){ 

        $object = $this->connexion->prepare("SELECT * FROM vendeurs ");
        $object->execute(array(
        ));
        $result = $object->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function update(ClassVendeurs $vendeurs){

        $object = $this->connexion->prepare("UPDATE note SET produits=:produits WHERE id=:id");
        $object->execute(array(
            'id' => $vendeurs->getId(),
            'produits' => $vendeurs->getProduits()
        ));

    }

    public function login(ClassVendeurs $vendeurs){

        $object = $this->connexion->prepare("SELECT * FROM vendeurs WHERE name=:name");
        $object->execute(array(
            'name' => $vendeurs->getName()
        ));
        $result = $object->fetch(PDO::FETCH_ASSOC);

        if($result['password'] == $vendeurs->getPassword()){

            return $result;

        }
        else{

            return false;

        }

    }

}