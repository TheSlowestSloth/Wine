<?php

class RepositoryProduits{

    private $connexion;

    public function __construct($connexion){
        $this->connexion = $connexion;
    }

    public function insertNewProduit(ClassProduits $produits){

        $object = $this->connexion->prepare("INSERT INTO produits SET name=:name, categorieId=:categorieId, year=:year, description=:description, image=:image");
        $object->execute(array(
            "name" => $produits->getName(),
            "categorieId" => $produits->getCategorieId(),
            "year" => $produits->getYear(),
            "description" => $produits->getDescription(),
            "image" => $produits->getImage()
        ));

        $object = $this->connexion->prepare("SELECT id FROM produits WHERE name=:name AND categorieId=:categorieId");
        $object->execute(array(
            "name" => $produits->getName(),
            "categorieId" => $produits->getCategorieId()
        ));

        $result = $object->fetch(PDO::FETCH_ASSOC);
        return $result["id"];

    }

    public function selectProduitsId(ClassProduits $produits){

        $object = $this->connexion->prepare("SELECT id FROM produits WHERE name=:name");
        $object->execute(array(
            "name" => $produits->getName()
        ));
        $result = $object->fetch(PDO::FETCH_ASSOC);
        return $result;

    }

    public function selectProducts(ClassProduits $produits){ 

        $object = $this->connexion->prepare("SELECT * FROM produits ");
        $object->execute(array(
        ));
        $result = $object->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    public function selectVProduct(ClassProduits $produits){ 

        $object = $this->connexion->prepare("SELECT produitId FROM vProduits WHERE vendeurId=:id ");
        $object->execute(array(
            "id" => $produits->getId()
        ));
        $result = $object->fetchAll(PDO::FETCH_ASSOC);

        $array = array();

        foreach($result as $res){

            $object = $this->connexion->prepare("SELECT * FROM produits WHERE id=:id ");
            $object->execute(array(
                "id" => $res["produitId"]
            ));
            $produit = $object->fetch(PDO::FETCH_ASSOC);
            array_push($array, $produit);

        }

        return $array;

    }

    public function insertVProduct(ClassProduits $produits){

        $object = $this->connexion->prepare("INSERT INTO vProduits SET vendeurId=:vendeurId, produitId=:produitId");
        $object->execute(array(
            "vendeurId" => $produits->getVendeurId(),
            "produitId" => $produits->getId()
        ));

    }

    public function removeVProduct(ClassProduits $produits){

        $object = $this->connexion->prepare("DELETE FROM VProduits WHERE vendeurId=:vendeurId AND produitId=:produitId");
        $object->execute(array(
            "vendeurId" => $produits->getVendeurId(),
            "produitId" => $produits->getId()
        ));

    }

    public function removeProduct(ClassProduits $produits){

        $object = $this->connexion->prepare("DELETE FROM VProduits WHERE produitId=:produitId");
        $object->execute(array(
            "produitId" => $produits->getId()
        ));

        $object = $this->connexion->prepare("DELETE FROM Produits WHERE id=:id");
        $object->execute(array(
            "id" => $produits->getId()
        ));

    }

}