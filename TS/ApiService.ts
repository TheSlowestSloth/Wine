import { App } from "App";

export class ApiService{

    private static instance: ApiService = null;

    static getService(): ApiService{
        if(!ApiService.instance){
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    private constructor() {}

    private url: string = "http://192.168.110.31:8888/Jerome/DragAndDropExo/API/";

    checkUser(username: string, password: string): Promise<string[]>{

        var promise: Promise<string[]> = new Promise(( resolve: any, reject: any ) => {

            $.ajax({
                url: this.url + "check",
                method: "get",
                dataType: "json",
                data:{
                    username: username,
                    password: password
                },
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });

        return promise;

    }

    connexion(){

        $("#login").css("display", "none");
        $("#accueil").css("display", "block");

    }

    getProducts(){
        var promise: Promise<string[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "produits",
                method: "post",
                dataType: "json",
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });

        return promise;

    }

    getCategories(){
        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "categorie",
                method: "post",
                dataType: "json",
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });

        return promise;

    }

    getVendeurs(){
        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "vendeurs",
                method: "get",
                dataType: "json",
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }

    getVProduct(id: string){

        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "vProduct/" + id,
                method: "get",
                dataType: "json",
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }

    saveVProduct(id: string, vendeurId: string){

        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "svProduct",
                method: "post",
                dataType: "json",
                data:{
                    id: id,
                    vendeurId: vendeurId
                },
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }

    addProduct(name: string, categorie: string, year: string, description: string, image: string){

        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "addProduct",
                method: "post",
                dataType: "json",
                data:{
                    name: name,
                    categorie: categorie,
                    year: year,
                    description: description,
                    image: image
                },
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }

    remove(id: string, vendeurId: string){

        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "remove",
                method: "post",
                dataType: "json",
                data:{
                    id: id,
                    vendeurId: vendeurId
                },
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }

    removeIt(id: string){

        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "removeIt",
                method: "post",
                dataType: "json",
                data:{
                    id: id
                },
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }

    addNewVendeur(name: string){

        var promise: Promise<object[]> = new Promise(( resolve: any, reject: any ) => {
            
            $.ajax({
                url: this.url + "newVendeur",
                method: "post",
                dataType: "json",
                data:{
                    name: name
                },
                success: function(data){

                    resolve(data);

                },
                error: function(error){

                    reject(error);

                }
            })
            
            
        });
            
        return promise;

    }
    
}