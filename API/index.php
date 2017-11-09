<?php
header("Access-Control-Allow-Origin: *");

require 'flight/Flight.php';
require 'autoloader.php';

session_start();

Flight::route('/', function(){

    

});

Flight::route('GET /check', function(){

    $name = Flight::request()->query["username"];
    $password = Flight::request()->query["password"];

    $params = array(
        "name" => $name,
        "password" => $password
    );

    $serviceVendeurs = new ServiceVendeurs();
    $serviceVendeurs->setParams($params);
    $vendeurs = $serviceVendeurs->checkLogin();

    echo json_encode($vendeurs);

});

Flight::route('/newVendeur', function(){

    $params = [
        "name" => Flight::request()->data["name"]
    ];

    $serviceVendeurs = new ServiceVendeurs();
    $serviceVendeurs->setParams($params);
    $vendeurs = $serviceVendeurs->createNewVendeur();

    echo json_encode($vendeurs);

});

Flight::route('/vendeurs', function(){

    $vendeurs = new ClassVendeurs();
    $bdd = new BddManager();
    $tab = $vendeurs->selectAllVendeurs($bdd);

    echo json_encode($tab);

});

Flight::route('/produits', function(){

    $produits = new ClassProduits();
    $bdd = new BddManager();
    $tab = $produits->selectAllProduits($bdd);

    echo json_encode($tab);

});

Flight::route('/categorie', function(){

    $categorie = new ClassCategorie();
    $bdd = new BddManager();
    $tab = $categorie->selectAllCategorie($bdd);

    echo json_encode($tab);

});

Flight::route('/vProduct/@id', function($id){

    $produit = new ClassProduits(array(
        "id" => $id
    ));
    $bdd = new BddManager();
    $tab = $produit->selectProductById($bdd);

    echo json_encode($tab);

});

Flight::route('POST /svProduct', function(){

    $array = array(
        "id" => Flight::request()->data["id"],
        "vendeurId" => Flight::request()->data["vendeurId"],
    );
    $produit = new ClassProduits($array);
    $bdd = new BddManager();
    $produit->insertProductById($bdd);

});

Flight::route('POST /addProduct', function(){

    $array = array(
        "categorieId" => Flight::request()->data["categorie"],
        "name" => Flight::request()->data["name"],
        "year" => Flight::request()->data["year"],
        "description" => Flight::request()->data["description"],
        "image" => Flight::request()->data["image"],
    );
    $produit = new ClassProduits($array);
    $bdd = new BddManager();
    $id = $produit->insertProduit($bdd);

    echo json_encode($id);

});

Flight::route('POST /remove', function(){

    $array = array(
        "id" => Flight::request()->data["id"],
        "vendeurId" => Flight::request()->data["vendeurId"]
    );
    $produit = new ClassProduits($array);
    $bdd = new BddManager();
    $id = $produit->deleteVProduit($bdd);

    echo json_encode($id);

});

Flight::route('POST /removeIt', function(){

    $array = array(
        "id" => Flight::request()->data["id"]
    );
    $produit = new ClassProduits($array);
    $bdd = new BddManager();
    $id = $produit->deleteProduit($bdd);

    echo json_encode($id);

});

Flight::start();
?>
