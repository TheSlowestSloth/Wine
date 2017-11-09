<?php

class ClassVendeurs extends ClassModel{

    private $id;
    private $name;
    private $produits;
    private $password;

    public function getId(){
        return $this->id;
    }

    public function setParams($id){
        $this->id = $id;
    }

    public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function getProduits(){
        return $this->produits;
    }

    public function setProduits($produits){
        $this->produit = $produit;
    }

    public function getPassword(){
		return $this->password;
	}

	public function setPassword($password){
		$this->password = $password;
	}

    public function insertVendeur(BddManager $bddmanager){
        return $bddmanager->getVendeursRepository()->insertVend($this);
    }

    public function selectAllVendeurs(BddManager $bddmanager){
        return $bddmanager->getVendeursRepository()->selectVendeurs($this);
    }

    public function updateVendeurs(BddManager $bddmanager){
        return $bddmanager->getVendeursRepository()->update($this);
    }

    public function insertVProduits(BddManager $bddmanager){
        return $bddmanager->getVendeursRepository()->insertVProduct($this);
    }

    public function checkVendeur(BddManager $bddmanager){
        return $bddmanager->getVendeursRepository()->login($this);
    }

}