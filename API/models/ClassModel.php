<?php

class ClassModel{

    public function __construct($params = null){

        if($params != null){
            $this->hydrate($params);
        }

    }

    public function hydrate(array $donnees){

        foreach ($donnees as $key => $value){
        
            $method = 'set'.ucfirst($key);
                
        
            if (method_exists($this, $method)){

            $this->$method($value);

            }
        
        }
    
    }

    public function getObject(){
        
        return get_object_vars($this);
        
    }

}