import { Vendor } from "./Vendor";
import { Bdd } from "./Bdd";
import { ApiService } from "./ApiService";
import { JsonSerializable } from "./JsonSerializable";

export class App implements JsonSerializable{

    public api: ApiService = ApiService.getService();
    public admin: boolean = false;
    public vendors: string[];
    public vendor: Vendor[];
    public vendorId: number;
    public categories: object[];
    public category: string[];
    public $addNewVin: JQuery = $("#addNewVin");
    public $addNewVendor: JQuery = $("#addNewVendor");
    public $name: JQuery = $("#name");
    public $year: JQuery = $("#year");
    public $description: JQuery = $("#description");
    public $image: JQuery = $("#image");
    public $vname: JQuery = $("#vendeurName");
    public $categorie: JQuery = $("#select");
    public vendorConnected: any = null;
    public vin: string[] = [];

    constructor(){

        this.vendors = [];
        this.vendor = [];

    }

    checkMobile(){
        var isMobile = false; //initiate as false
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

        return isMobile;
    }

    start(){

        this.api.getCategories()
        .then(( data ) => {

            this.getCategorie(data);

        })
        .catch( function(error){
            console.log(error);
        });

        this.api.getProducts()
        .then(( data ) => {

            this.getProduct(data);

        })
        .catch( function(error){
            console.log(error);
        });

        this.api.getVendeurs()
        .then(( data ) => {

            this.getVendor(data);

        })
        .catch( function(error){
            console.log(error);
        });

    }

    getCategorie(category: any){

        this.categories = category;

        category.forEach(function(cat: any){

            let dom2: string = "<div class='buttonCat " + cat.name + "' data_id='" + cat.id + "' id='cat" + cat.name + "'>" + cat.name + "</div>"
            $("#menu").append(dom2);
            let dom: string = "<div class='container' data_id='" + cat.id + "' id='" + cat.name + "'></div>"
            $("#menu").append(dom);
            $("#select").append("<option value='" + cat.id + "'>" + cat.name + "</option>");
            
        })

    }

    addVendor(){

        let name: string = this.$vname.val().toString();

        this.api.addNewVendeur(name)
        .then(( data: any ) => {

            console.log(data);

            let vendeur = ("<div class='vendeur' id='" + data.id + "'>" + name + "</div>");
            this.vendors.push(vendeur);
            let vend: Vendor = new Vendor(data.id);
            this.vendor.push(vend);
            $("#vendeurs").append(vendeur);

        })
        .catch( function(error){
            console.log(error);
        });
        
    }

    addItem(id: string, name: string, categorie: string, year: string, description: string, image: string){

        let array = {
            id: id,
            name: name,
            year: year,
            description: description,
            image: image
        };
        this.categories.forEach(function(cat: any){

            if(categorie == cat.id.toString()){

                let dom = "<div class='item " + cat.name + "' data_id='" + id + "' id='" + cat.name + id + "' name='" + name + "' draggable='true'></div>";
                $("#" + cat.name).append(dom);

            }

        });

    }

    jsonSerialize(): {} {

        return {
        
        };

    }

    getProduct(vins: any){
        
        for(var v of vins){

            this.vin.push(v);

            this.categories.forEach(function(cat: any){

                if(v.categorieId == cat.id){

                    $("#" + cat.name).append("<div class='item " + cat.name + "' data_id='" + v.id + "' id='" + cat.name + v.id + "' name='" + v.name + "' draggable='true'></div>")
                
                }
            });

        }

    }

    getVendor(vendeurs: any){

        let vendo = vendeurs;

        if(this.admin == true){
            for(var vendor of vendo){

                let dom = "<div class='vendeur' id='" + vendor.id + "'>" + vendor.name + "</div>"
                this.vendors.push(dom);
                let vend: Vendor = new Vendor(vendor.id);
                this.vendor.push(vend);
                $("#vendeurs").append(dom);
                this.api.getVProduct(vendor.id)
                .then(( data ) => {
        
                    var vProduct: any[] = data;
                    for(var vpr of vProduct){

                        if(vpr){

                        
                            let vp = vpr.id;

                            this.categories.forEach(function(cat: any){
                            
                                $("#" + cat.name).children().each(function(){

                                    if($(this).attr("data_id") == vp.toString()){
                                        
                                        let $clone = $(this).clone();
                                        $clone.attr("data-cloned", $(this).attr("id"));
                                        $clone.attr("id", $(this).attr("id") + "_cloned");
                                        vend.vin.push($clone);
                    
                                    }
                                    
                                }) 
                                
                            });

                        }

                    }
        
                })
                .catch( function(error){
                    console.log(error);
                });

            }

            $(".buttonCat").css("display", "flex");

        }
        else if(this.vendorConnected){

            $("#addVin").css("display", "none");
            $("#addVendeur").css("display", "none");
            let dom = "<div class='vendeur' id='" + this.vendorConnected.id + "'>" + this.vendorConnected.name + "</div>"
            this.vendors.push(dom);
            let vend: Vendor = new Vendor(this.vendorConnected.id);
            this.vendor.push(vend);
            $("#vendeurs").append(dom);
            $("#vendeurs").css("margin", "25px 0px");

            this.api.getVProduct(this.vendorConnected.id)
            .then(( data ) => {
    
                var vProduct: any[] = data;
                for(var vpr of vProduct){

                    if(vpr){
                        let vp = vpr.id;

                        this.categories.forEach(function(cat: any){
                        
                            $("#" + cat.name).children().each(function(){

                                if($(this).attr("data_id") == vp.toString()){
                                    
                                    let $clone = $(this).clone();
                                    $clone.attr("data-cloned", $(this).attr("id"));
                                    $clone.attr("id", $(this).attr("id") + "_cloned");
                                    vend.vin.push($clone);
                
                                }
                                
                            }) 
                            
                        });

                    }

                }

                $("#delete").css("display", "bock");
    
            })
            .catch( function(error){
                console.log(error);
            });

        }
        else{ 

            for(var vendor of vendo){
                let dom = "<div class='vendeur' id='" + vendor.id + "'>" + vendor.name + "</div>"
                this.vendors.push(dom);
                let vend: Vendor = new Vendor(vendor.id);
                this.vendor.push(vend);
                $("#vendeurs").append(dom);
                this.api.getVProduct(vendor.id)
                .then(( data ) => {
            
                    var vProduct: any[] = data;
                    for(var vpr of vProduct){

                        if(vpr){

                            let vp = vpr.id;

                            this.categories.forEach(function(cat: any){
                                
                                $("#" + cat.name).children().each(function(){

                                    if($(this).attr("data_id") == vp.toString()){
                                            
                                        let $clone = $(this).clone();
                                        $clone.attr("data-cloned", $(this).attr("id"));
                                        $clone.attr("id", $(this).attr("id") + "_cloned");
                                        vend.vin.push($clone);
                        
                                    }
                                        
                                }) 
                                    
                            });

                        }

                    }
            
                })
                .catch( function(error){
                    console.log(error);
                })

            };

            $("#addVin").css("display", "none");
            $("#addVendeur").css("display", "none");
            $("#login").css("display", "none");
            $("#accueil").css("display", "block");
            $(".container").css("display", "none");
            $(".buttonCat").css("display", "flex");
            $("#delete").css("display", "none");

        };

    };

}