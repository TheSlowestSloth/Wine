<?php

class ServiceProduits{

    private $params;
    private $error;

    public function getParams(){
        return $this->params;
    }

    public function setParams($params){
        $this->params = $params;
    }

    public function getError(){
        return $this->error;
    }

    public function setError($error){
        $this->error = $error;
    }

    public function createNewProduits(){

        $params = $this->getParams();

        $produits = new ClassProduits($params);
        $bdd = new BddManager();
        $id = $produits->insertProduit($bdd);
        $produits->setId($id);
        return $produits->getObject();

    }

}