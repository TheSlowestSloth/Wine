<?php

class ClassProduits extends ClassModel{

    private $id;
    private $name;
    private $image;
    private $description;
    private $year;
    private $categorieId;
    private $vendeurId;

    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getName(){
        return $this->name;
    }

    public function setName($name){
        $this->name = $name;
    }

    public function getCategorieId(){
		return $this->categorieId;
	}

	public function setCategorieId($categorieId){
		$this->categorieId = $categorieId;
    }
    
    public function getVendeurId(){
		return $this->vendeurId;
	}

	public function setVendeurId($vendeurId){
		$this->vendeurId = $vendeurId;
    }
    
    public function getImage(){
		return $this->image;
	}

	public function setImage($image){
		$this->image = $image;
	}

	public function getDescription(){
		return $this->descirption;
	}

	public function setDescription($descirption){
		$this->descirption = $descirption;
	}

	public function getYear(){
		return $this->year;
	}

	public function setYear($year){
		$this->year = $year;
	}

    public function insertProduit(BddManager $bddmanager){
        return $bddmanager->getProduitsRepository()->insertNewProduit($this);
    }

    public function selectAllProduits(BddManager $bddmanager){
        return $bddmanager->getProduitsRepository()->selectProducts($this);
    }

    public function insertVProduits(BddManager $bddmanager){
        return $bddmanager->getProduitsRepository()->insertVProduct($this);
    }

    public function selectProductById(BddManager $bddmanager){
        return $bddmanager->getProduitsRepository()->selectVProduct($this);
    }

    public function insertProductById(BddManager $bddmanager){
        $bddmanager->getProduitsRepository()->insertVProduct($this);
    }

    public function deleteVProduit(BddManager $bddmanager){
        $bddmanager->getProduitsRepository()->removeVProduct($this);
    }

    public function deleteProduit(BddManager $bddmanager){
        $bddmanager->getProduitsRepository()->removeProduct($this);
    }

}