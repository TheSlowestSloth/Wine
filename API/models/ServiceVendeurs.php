<?php

class ServiceVendeurs{

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

    public function createNewVendeur(){

        $params = $this->getParams();

        $vendeurs = new ClassVendeurs($params);
        $bdd = new BddManager();
        $vendeur = $vendeurs->insertVendeur($bdd);

        return $vendeur;

    }

    public function checkLogin(){

        $params = $this->getParams();

        $vendeurs = new ClassVendeurs($params);
        $bdd = new BddManager();
        $result = $vendeurs->checkVendeur($bdd);
        return $result;

    }

}