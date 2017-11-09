<?php

class ClassCategorie extends ClassModel{

    private $id;
    private $name;

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
    
    public function selectAllCategorie(BddManager $bddmanager){
        return $bddmanager->getCategorieRepository()->selectCategorie($this);
    }

}

?>