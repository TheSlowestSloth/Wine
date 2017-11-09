<?php

class BddManager{

    private $connexion;
    private $vendeursRepository;
    private $produitsRepository;
    private $categorieRepository;

    public function setVendeursRepository($vendeursRepository){
        $this->vendeursRepository = $vendeursRepository;
    }

    public function getVendeursRepository(){
        return $this->vendeursRepository;
    }

    public function getProduitsRepository(){
		return $this->produitsRepository;
	}

	public function setProduitsRepository($produitsRepository){
		$this->produitsRepository = $produitsRepository;
    }
    
    public function getCategorieRepository(){
		return $this->categorieRepository;
	}

	public function setCategorieRepository($categorieRepository){
		$this->categorieRepository = $categorieRepository;
	}

    public function __construct(){
        
        $this->connexion = ClassConnexion::getConnexion();
        
        $this->setVendeursRepository(new RepositoryVendeurs($this->connexion));
        $this->setProduitsRepository(new RepositoryProduits($this->connexion));
        $this->setCategorieRepository(new RepositoryCategorie($this->connexion));
        
    }
        
}
        
?>