import { App } from "App";
import { ApiService } from "ApiService";
import { Vendor } from "Vendor";
import { JsonSerializable } from "JsonSerializable";

var app: App = new App();
var api: ApiService = ApiService.getService();
var flag = app.checkMobile();
if(flag == true){
    app.start();
}

$(".container, #vContent, #delete").on("dragover", function(event){

    event.preventDefault();
    
})

$(document).on("click", "#loginbutton", (event) => {

    event.preventDefault();

    var username: string = $("#username").val().toString();
    var password: string = $("#password").val().toString();
    api.checkUser(username, password)
        .then(( data: any ) => {
            
            if(data){
                $("#login").css("display", "none");
                $("#accueil").css("display", "block");
                app.vendorConnected = data;
                app.vendorId = data.id;
                if(data.admin === "true"){
                    app.admin = true;
                }
                app.start();

            }
            else{

                console.log("error");

            }

        })
        .catch( function(error: any){

            console.log(error);

        });;
    
})

$(document).on("click", "#noaccount", (event: any) => {

    event.preventDefault();

    app.start();
    
})

$(document).on("dragstart", ".item", function(event){

    let dragEvent: DragEvent = event.originalEvent as DragEvent;
    dragEvent.dataTransfer.setData("id", $(this).attr("id"));

})

$(document).on("drop", "#vContent", function(event){


    let dragEvent: DragEvent = event.originalEvent as DragEvent;
    let getId: string = dragEvent.dataTransfer.getData("id");
    let $element: JQuery = $("#" + getId);
    let attr = $element.attr("data-cloned");
    let flag = false;

    if(!$element.attr("data-cloned") && $("[data-cloned=" + getId + "]").length == 0){

        let $clone = $element.clone();
        $clone.attr("data-cloned", getId);
        $clone.attr("id", getId + "_cloned");
        $(this).append($clone);
        var attri = $clone.attr('data_id');

        api.saveVProduct(attri, app.vendorId.toString())
        .then(( data ) => {

            console.log("ok");

        })
        .catch( function(error){
            console.log(error);
        });

        for(let vend of app.vendor){

            if(vend.id == app.vendorId){

                vend.vin = []
                vend.vin.push($(this).children());

            }
        }

    }
    
    
})

$(document).on("click", "#addNewVendor", function(){

    event.preventDefault();

    app.addVendor();

})

$(document).on("click", ".vendeur", function(){

    let id = $(this).attr("id");
    app.vendorId = parseInt(id);
    $(".vendeur").css("border", "0px solid black");
    $(".buttonCat").css("border", "0px solid black");
    $("#vContent").children().css("display", "block");
    $(this).css("border", "2px solid rgb(240, 229, 216)");
    $("#vContent").css("display", "flex");
    $("#vContent").children().remove();
    
    for(let vend of app.vendor){

        if(vend.id == app.vendorId){

            for(let v of vend.vin){

                $("#vContent").append(v);

            }

        }
    }

})

$(document).on("click", "#addNewVin", function(){

    event.preventDefault();

    var category: any = app.$categorie.val();
    var name: any = app.$name.val();
    var year: any = app.$year.val();
    var description: any = app.$description.val();
    var image: any = app.$image.val();

    console.log(name);

    api.addProduct(name, category, year, description, image)
    .then(( data: any ) => {

        console.log(data);

        app.addItem(data, name, category, year, description, image);

    })
    .catch( function(error){
        console.log(error);
    });

})

$(document).on("drop", "#delete", function(event){

    let dragEvent: DragEvent = event.originalEvent as DragEvent;
    let getId: string = dragEvent.dataTransfer.getData("id");
    let $element: JQuery = $("#" + getId);

    if(app.vendorConnected){

        if( $element.attr("data-cloned") ){

            api.remove($element.attr("data_id"), app.vendorConnected.id)
            .then(( data ) => {

            })
            .catch( function(error){
                console.log(error);
            });

            $element.remove();

        }
        else{

            if(app.admin == true){
                var attr = $element.attr("data_id");
                api.removeIt(attr)
                .then(( data ) => {
    
                })
                .catch( function(error){
                    console.log(error);
                });
                $("[data_id=" + attr + "]").remove();
            }
        }

        for(let vend of app.vendor){

            if(vend.id == app.vendorId){

                vend.vin = []
                vend.vin.push($("#vContent").children());

            }
        }

    }
    
})

$(document).on("click", ".item", function(event: any) {

    $("#info").css("display", "block");
    let attr = $(this).attr('class').split(' ')[1];
    let id = $(this).attr("data_id");

    let dom = "<div>";
    dom += "<p> Nom: " + $(this).attr("name") + "</p>";
    dom += "<p> Catégorie: " + attr + "</p>";

    app.vin.forEach(function(v: any){

        if(v.id == id){
            dom += "<p> Année: " + v.year + "</p>";
            dom += "<p> Description: " + v.description + "</p>";
            dom += "<img class='imageInfo' src='" + v.image + "'/>";
            
        }

    })

    dom += "</div>";

    $(".item").css("border", "0px solid rgb(240, 229, 216)");
    $(this).css("border", "2px solid rgb(240, 229, 216)");

    $("#info").html(dom);

});

$(document).on("click", ".buttonCat", function(){

    var attr = ($(this).attr('data_id'));

    if(app.vendorConnected || app.admin == true){
        
        $(".container").css("display", "none");
        $(".container[data_id='" + attr + "']").css("display", "flex");

    }
    else{

        var name: string = null;

        app.categories.forEach((cat: any) => {

            if(cat.id == attr){

                name = cat.name;

            }
        
        })

        $("#vContent").children().css("display", "none");
        $("#vContent").children().each(function() {
            
            if($(this).hasClass(name) == true){

                $(this).css("display", "block")

            }

        });

        $(".buttonCat").css("border", "0px");
        $(this).css("border", "2px solid rgb(240, 229, 216)")
        
    }


});

