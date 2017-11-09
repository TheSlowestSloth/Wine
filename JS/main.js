System.register("JsonSerializable", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
        }
    };
});
System.register("Vendor", [], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var Vendor;
    return {
        setters: [],
        execute: function () {
            Vendor = class Vendor {
                constructor(id) {
                    this.id = id;
                    this.vin = [];
                }
                jsonSerialize() {
                    throw new Error("Method not implemented.");
                }
            };
            exports_2("Vendor", Vendor);
        }
    };
});
System.register("Bdd", [], function (exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var Bdd;
    return {
        setters: [],
        execute: function () {
            exports_3("Bdd", Bdd = {
                categories: [
                    {
                        id: 1,
                        name: "rouge"
                    },
                    {
                        id: 2,
                        name: "rose"
                    },
                    {
                        id: 3,
                        name: "blanc"
                    },
                    {
                        id: 4,
                        name: "blouge"
                    },
                ],
                vins: [
                    {
                        id: 1,
                        name: "bordeaux",
                        categorieId: 1
                    },
                    {
                        id: 2,
                        name: "rivesalte",
                        categorieId: 3
                    }
                ],
                vendeurs: [
                    {
                        id: 1,
                        name: "Paul",
                        products: [1, 2]
                    },
                    {
                        id: 2,
                        name: "Jeremy",
                        products: [1]
                    },
                    {
                        id: 3,
                        name: "Stephane",
                        products: [2]
                    }
                ]
            });
        }
    };
});
System.register("App", ["Vendor", "ApiService"], function (exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    var Vendor_1, ApiService_1, App;
    return {
        setters: [
            function (Vendor_1_1) {
                Vendor_1 = Vendor_1_1;
            },
            function (ApiService_1_1) {
                ApiService_1 = ApiService_1_1;
            }
        ],
        execute: function () {
            App = class App {
                constructor() {
                    this.api = ApiService_1.ApiService.getService();
                    this.admin = false;
                    this.$addNewVin = $("#addNewVin");
                    this.$addNewVendor = $("#addNewVendor");
                    this.$name = $("#name");
                    this.$year = $("#year");
                    this.$description = $("#description");
                    this.$image = $("#image");
                    this.$vname = $("#vendeurName");
                    this.$categorie = $("#select");
                    this.vendorConnected = null;
                    this.vin = [];
                    this.vendors = [];
                    this.vendor = [];
                }
                checkMobile() {
                    var isMobile = false; //initiate as false
                    // device detection
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4)))
                        isMobile = true;
                    return isMobile;
                }
                start() {
                    this.api.getCategories()
                        .then((data) => {
                        this.getCategorie(data);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    this.api.getProducts()
                        .then((data) => {
                        this.getProduct(data);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    this.api.getVendeurs()
                        .then((data) => {
                        this.getVendor(data);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                getCategorie(category) {
                    this.categories = category;
                    category.forEach(function (cat) {
                        let dom2 = "<div class='buttonCat " + cat.name + "' data_id='" + cat.id + "' id='cat" + cat.name + "'>" + cat.name + "</div>";
                        $("#menu").append(dom2);
                        let dom = "<div class='container' data_id='" + cat.id + "' id='" + cat.name + "'></div>";
                        $("#menu").append(dom);
                        $("#select").append("<option value='" + cat.id + "'>" + cat.name + "</option>");
                    });
                }
                addVendor() {
                    let name = this.$vname.val().toString();
                    this.api.addNewVendeur(name)
                        .then((data) => {
                        console.log(data);
                        let vendeur = ("<div class='vendeur' id='" + data.id + "'>" + name + "</div>");
                        this.vendors.push(vendeur);
                        let vend = new Vendor_1.Vendor(data.id);
                        this.vendor.push(vend);
                        $("#vendeurs").append(vendeur);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
                addItem(id, name, categorie, year, description, image) {
                    let array = {
                        id: id,
                        name: name,
                        year: year,
                        description: description,
                        image: image
                    };
                    this.categories.forEach(function (cat) {
                        if (categorie == cat.id.toString()) {
                            let dom = "<div class='item " + cat.name + "' data_id='" + id + "' id='" + cat.name + id + "' name='" + name + "' draggable='true'></div>";
                            $("#" + cat.name).append(dom);
                        }
                    });
                }
                jsonSerialize() {
                    return {};
                }
                getProduct(vins) {
                    for (var v of vins) {
                        this.vin.push(v);
                        this.categories.forEach(function (cat) {
                            if (v.categorieId == cat.id) {
                                $("#" + cat.name).append("<div class='item " + cat.name + "' data_id='" + v.id + "' id='" + cat.name + v.id + "' name='" + v.name + "' draggable='true'></div>");
                            }
                        });
                    }
                }
                getVendor(vendeurs) {
                    let vendo = vendeurs;
                    if (this.admin == true) {
                        for (var vendor of vendo) {
                            let dom = "<div class='vendeur' id='" + vendor.id + "'>" + vendor.name + "</div>";
                            this.vendors.push(dom);
                            let vend = new Vendor_1.Vendor(vendor.id);
                            this.vendor.push(vend);
                            $("#vendeurs").append(dom);
                            this.api.getVProduct(vendor.id)
                                .then((data) => {
                                var vProduct = data;
                                for (var vpr of vProduct) {
                                    if (vpr) {
                                        let vp = vpr.id;
                                        this.categories.forEach(function (cat) {
                                            $("#" + cat.name).children().each(function () {
                                                if ($(this).attr("data_id") == vp.toString()) {
                                                    let $clone = $(this).clone();
                                                    $clone.attr("data-cloned", $(this).attr("id"));
                                                    $clone.attr("id", $(this).attr("id") + "_cloned");
                                                    vend.vin.push($clone);
                                                }
                                            });
                                        });
                                    }
                                }
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        }
                        $(".buttonCat").css("display", "flex");
                    }
                    else if (this.vendorConnected) {
                        $("#addVin").css("display", "none");
                        $("#addVendeur").css("display", "none");
                        let dom = "<div class='vendeur' id='" + this.vendorConnected.id + "'>" + this.vendorConnected.name + "</div>";
                        this.vendors.push(dom);
                        let vend = new Vendor_1.Vendor(this.vendorConnected.id);
                        this.vendor.push(vend);
                        $("#vendeurs").append(dom);
                        $("#vendeurs").css("margin", "25px 0px");
                        this.api.getVProduct(this.vendorConnected.id)
                            .then((data) => {
                            var vProduct = data;
                            for (var vpr of vProduct) {
                                if (vpr) {
                                    let vp = vpr.id;
                                    this.categories.forEach(function (cat) {
                                        $("#" + cat.name).children().each(function () {
                                            if ($(this).attr("data_id") == vp.toString()) {
                                                let $clone = $(this).clone();
                                                $clone.attr("data-cloned", $(this).attr("id"));
                                                $clone.attr("id", $(this).attr("id") + "_cloned");
                                                vend.vin.push($clone);
                                            }
                                        });
                                    });
                                }
                            }
                            $("#delete").css("display", "bock");
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                    }
                    else {
                        for (var vendor of vendo) {
                            let dom = "<div class='vendeur' id='" + vendor.id + "'>" + vendor.name + "</div>";
                            this.vendors.push(dom);
                            let vend = new Vendor_1.Vendor(vendor.id);
                            this.vendor.push(vend);
                            $("#vendeurs").append(dom);
                            this.api.getVProduct(vendor.id)
                                .then((data) => {
                                var vProduct = data;
                                for (var vpr of vProduct) {
                                    if (vpr) {
                                        let vp = vpr.id;
                                        this.categories.forEach(function (cat) {
                                            $("#" + cat.name).children().each(function () {
                                                if ($(this).attr("data_id") == vp.toString()) {
                                                    let $clone = $(this).clone();
                                                    $clone.attr("data-cloned", $(this).attr("id"));
                                                    $clone.attr("id", $(this).attr("id") + "_cloned");
                                                    vend.vin.push($clone);
                                                }
                                            });
                                        });
                                    }
                                }
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                        }
                        ;
                        $("#addVin").css("display", "none");
                        $("#addVendeur").css("display", "none");
                        $("#login").css("display", "none");
                        $("#accueil").css("display", "block");
                        $(".container").css("display", "none");
                        $(".buttonCat").css("display", "flex");
                        $("#delete").css("display", "none");
                    }
                    ;
                }
                ;
            };
            exports_4("App", App);
        }
    };
});
System.register("ApiService", [], function (exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var ApiService;
    return {
        setters: [],
        execute: function () {
            ApiService = class ApiService {
                constructor() {
                    this.url = "http://192.168.110.31:8888/Jerome/DragAndDropExo/API/";
                }
                static getService() {
                    if (!ApiService.instance) {
                        ApiService.instance = new ApiService();
                    }
                    return ApiService.instance;
                }
                checkUser(username, password) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "check",
                            method: "get",
                            dataType: "json",
                            data: {
                                username: username,
                                password: password
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                connexion() {
                    $("#login").css("display", "none");
                    $("#accueil").css("display", "block");
                }
                getProducts() {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "produits",
                            method: "post",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                getCategories() {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "categorie",
                            method: "post",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                getVendeurs() {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "vendeurs",
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                getVProduct(id) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "vProduct/" + id,
                            method: "get",
                            dataType: "json",
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                saveVProduct(id, vendeurId) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "svProduct",
                            method: "post",
                            dataType: "json",
                            data: {
                                id: id,
                                vendeurId: vendeurId
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                addProduct(name, categorie, year, description, image) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "addProduct",
                            method: "post",
                            dataType: "json",
                            data: {
                                name: name,
                                categorie: categorie,
                                year: year,
                                description: description,
                                image: image
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                remove(id, vendeurId) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "remove",
                            method: "post",
                            dataType: "json",
                            data: {
                                id: id,
                                vendeurId: vendeurId
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                removeIt(id) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "removeIt",
                            method: "post",
                            dataType: "json",
                            data: {
                                id: id
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
                addNewVendeur(name) {
                    var promise = new Promise((resolve, reject) => {
                        $.ajax({
                            url: this.url + "newVendeur",
                            method: "post",
                            dataType: "json",
                            data: {
                                name: name
                            },
                            success: function (data) {
                                resolve(data);
                            },
                            error: function (error) {
                                reject(error);
                            }
                        });
                    });
                    return promise;
                }
            };
            ApiService.instance = null;
            exports_5("ApiService", ApiService);
        }
    };
});
System.register("main", ["App", "ApiService"], function (exports_6, context_6) {
    "use strict";
    var __moduleName = context_6 && context_6.id;
    var App_1, ApiService_2, app, api, flag;
    return {
        setters: [
            function (App_1_1) {
                App_1 = App_1_1;
            },
            function (ApiService_2_1) {
                ApiService_2 = ApiService_2_1;
            }
        ],
        execute: function () {
            app = new App_1.App();
            api = ApiService_2.ApiService.getService();
            flag = app.checkMobile();
            if (flag == true) {
                app.start();
            }
            $(".container, #vContent, #delete").on("dragover", function (event) {
                event.preventDefault();
            });
            $(document).on("click", "#loginbutton", (event) => {
                event.preventDefault();
                var username = $("#username").val().toString();
                var password = $("#password").val().toString();
                api.checkUser(username, password)
                    .then((data) => {
                    if (data) {
                        $("#login").css("display", "none");
                        $("#accueil").css("display", "block");
                        app.vendorConnected = data;
                        app.vendorId = data.id;
                        if (data.admin === "true") {
                            app.admin = true;
                        }
                        app.start();
                    }
                    else {
                        console.log("error");
                    }
                })
                    .catch(function (error) {
                    console.log(error);
                });
                ;
            });
            $(document).on("click", "#noaccount", (event) => {
                event.preventDefault();
                app.start();
            });
            $(document).on("dragstart", ".item", function (event) {
                let dragEvent = event.originalEvent;
                dragEvent.dataTransfer.setData("id", $(this).attr("id"));
            });
            $(document).on("drop", "#vContent", function (event) {
                let dragEvent = event.originalEvent;
                let getId = dragEvent.dataTransfer.getData("id");
                let $element = $("#" + getId);
                let attr = $element.attr("data-cloned");
                let flag = false;
                if (!$element.attr("data-cloned") && $("[data-cloned=" + getId + "]").length == 0) {
                    let $clone = $element.clone();
                    $clone.attr("data-cloned", getId);
                    $clone.attr("id", getId + "_cloned");
                    $(this).append($clone);
                    var attri = $clone.attr('data_id');
                    api.saveVProduct(attri, app.vendorId.toString())
                        .then((data) => {
                        console.log("ok");
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                    for (let vend of app.vendor) {
                        if (vend.id == app.vendorId) {
                            vend.vin = [];
                            vend.vin.push($(this).children());
                        }
                    }
                }
            });
            $(document).on("click", "#addNewVendor", function () {
                event.preventDefault();
                app.addVendor();
            });
            $(document).on("click", ".vendeur", function () {
                let id = $(this).attr("id");
                app.vendorId = parseInt(id);
                $(".vendeur").css("border", "0px solid black");
                $(".buttonCat").css("border", "0px solid black");
                $("#vContent").children().css("display", "block");
                $(this).css("border", "2px solid rgb(240, 229, 216)");
                $("#vContent").css("display", "flex");
                $("#vContent").children().remove();
                for (let vend of app.vendor) {
                    if (vend.id == app.vendorId) {
                        for (let v of vend.vin) {
                            $("#vContent").append(v);
                        }
                    }
                }
            });
            $(document).on("click", "#addNewVin", function () {
                event.preventDefault();
                var category = app.$categorie.val();
                var name = app.$name.val();
                var year = app.$year.val();
                var description = app.$description.val();
                var image = app.$image.val();
                console.log(name);
                api.addProduct(name, category, year, description, image)
                    .then((data) => {
                    console.log(data);
                    app.addItem(data, name, category, year, description, image);
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
            $(document).on("drop", "#delete", function (event) {
                let dragEvent = event.originalEvent;
                let getId = dragEvent.dataTransfer.getData("id");
                let $element = $("#" + getId);
                if (app.vendorConnected) {
                    if ($element.attr("data-cloned")) {
                        api.remove($element.attr("data_id"), app.vendorConnected.id)
                            .then((data) => {
                        })
                            .catch(function (error) {
                            console.log(error);
                        });
                        $element.remove();
                    }
                    else {
                        if (app.admin == true) {
                            var attr = $element.attr("data_id");
                            api.removeIt(attr)
                                .then((data) => {
                            })
                                .catch(function (error) {
                                console.log(error);
                            });
                            $("[data_id=" + attr + "]").remove();
                        }
                    }
                    for (let vend of app.vendor) {
                        if (vend.id == app.vendorId) {
                            vend.vin = [];
                            vend.vin.push($("#vContent").children());
                        }
                    }
                }
            });
            $(document).on("click", ".item", function (event) {
                $("#info").css("display", "block");
                let attr = $(this).attr('class').split(' ')[1];
                let id = $(this).attr("data_id");
                let dom = "<div>";
                dom += "<p> Nom: " + $(this).attr("name") + "</p>";
                dom += "<p> Catégorie: " + attr + "</p>";
                app.vin.forEach(function (v) {
                    if (v.id == id) {
                        dom += "<p> Année: " + v.year + "</p>";
                        dom += "<p> Description: " + v.description + "</p>";
                        dom += "<img class='imageInfo' src='" + v.image + "'/>";
                    }
                });
                dom += "</div>";
                $(".item").css("border", "0px solid rgb(240, 229, 216)");
                $(this).css("border", "2px solid rgb(240, 229, 216)");
                $("#info").html(dom);
            });
            $(document).on("click", ".buttonCat", function () {
                var attr = ($(this).attr('data_id'));
                if (app.vendorConnected || app.admin == true) {
                    $(".container").css("display", "none");
                    $(".container[data_id='" + attr + "']").css("display", "flex");
                }
                else {
                    var name = null;
                    app.categories.forEach((cat) => {
                        if (cat.id == attr) {
                            name = cat.name;
                        }
                    });
                    $("#vContent").children().css("display", "none");
                    $("#vContent").children().each(function () {
                        if ($(this).hasClass(name) == true) {
                            $(this).css("display", "block");
                        }
                    });
                    $(".buttonCat").css("border", "0px");
                    $(this).css("border", "2px solid rgb(240, 229, 216)");
                }
            });
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlRTL0pzb25TZXJpYWxpemFibGUudHMiLCJUUy9WZW5kb3IudHMiLCJUUy9CZGQudHMiLCJUUy9BcHAudHMiLCJUUy9BcGlTZXJ2aWNlLnRzIiwiVFMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7UUFNQyxDQUFDOzs7Ozs7Ozs7O1lDSkYsU0FBQTtnQkFLSSxZQUFZLEVBQVU7b0JBRWxCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO29CQUNiLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUVsQixDQUFDO2dCQUVELGFBQWE7b0JBQ1QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2FBRUosQ0FBQTs7UUFBQSxDQUFDOzs7Ozs7Ozs7O1lDbEJGLGlCQUFhLEdBQUcsR0FLVjtnQkFFSCxVQUFVLEVBQUU7b0JBQ1A7d0JBQ0ksRUFBRSxFQUFFLENBQUM7d0JBQ0wsSUFBSSxFQUFFLE9BQU87cUJBQ2hCO29CQUNEO3dCQUNJLEVBQUUsRUFBRSxDQUFDO3dCQUNMLElBQUksRUFBRSxNQUFNO3FCQUNmO29CQUNEO3dCQUNJLEVBQUUsRUFBRSxDQUFDO3dCQUNMLElBQUksRUFBRSxPQUFPO3FCQUNoQjtvQkFDRDt3QkFDSSxFQUFFLEVBQUUsQ0FBQzt3QkFDTCxJQUFJLEVBQUUsUUFBUTtxQkFDakI7aUJBQ0o7Z0JBQ0QsSUFBSSxFQUFHO29CQUNIO3dCQUNJLEVBQUUsRUFBRyxDQUFDO3dCQUNOLElBQUksRUFBRyxVQUFVO3dCQUNqQixXQUFXLEVBQUcsQ0FBQztxQkFDbEI7b0JBQ0Q7d0JBQ0ksRUFBRSxFQUFHLENBQUM7d0JBQ04sSUFBSSxFQUFHLFdBQVc7d0JBQ2xCLFdBQVcsRUFBRyxDQUFDO3FCQUNsQjtpQkFDSjtnQkFDRCxRQUFRLEVBQUc7b0JBQ1A7d0JBQ0ksRUFBRSxFQUFFLENBQUM7d0JBQ0wsSUFBSSxFQUFFLE1BQU07d0JBQ1osUUFBUSxFQUFHLENBQUUs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UUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUUzQixFQUFFLENBQUEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFBLENBQUM7NEJBRS9CLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO3dCQUVuQyxDQUFDO29CQUVMLENBQUMsQ0FBQyxDQUFDO29CQUVILENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUNyQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFBO2dCQUV6RCxDQUFDO1lBR0wsQ0FBQyxDQUFDLENBQUM7UUFFSCxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIEpzb25TZXJpYWxpemFibGV7XG5cbiAgICAvLyBVbmUgaW50ZXJmYWNlIGZvcmNlIGxhIGNsYXNzIGltcGzDqW1lbnTDqWUgw6AgbCd1dGlsaXNlclxuICAgIFxuICAgIGpzb25TZXJpYWxpemUoKToge307XG5cbn0iLCJpbXBvcnQgeyBKc29uU2VyaWFsaXphYmxlIH0gZnJvbSBcIi4vSnNvblNlcmlhbGl6YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgVmVuZG9yIGltcGxlbWVudHMgSnNvblNlcmlhbGl6YWJsZXtcblxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xuICAgIHB1YmxpYyB2aW46IEpRdWVyeVtdO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlcil7XG5cbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnZpbiA9IFtdO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBqc29uU2VyaWFsaXplKCk6IHt9IHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgfVxuXG59IiwiZXhwb3J0IGNvbnN0IEJkZDp7XG4gICAgY2F0ZWdvcmllcyA6IHsgaWQ6bnVtYmVyLCBuYW1lOnN0cmluZ31bXSxcbiAgICB2aW5zIDogeyBpZDpudW1iZXIsIG5hbWU6c3RyaW5nLCBjYXRlZ29yaWVJZDpudW1iZXIgfVtdLFxuICAgIHZlbmRldXJzIDogeyBpZDpudW1iZXIsIG5hbWU6c3RyaW5nLCBwcm9kdWN0czpudW1iZXJbXSB9W11cbiB9XG4gICAgPSB7XG5cbiAgIGNhdGVnb3JpZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiBcInJvdWdlXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiBcInJvc2VcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6IFwiYmxhbmNcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6IFwiYmxvdWdlXCJcbiAgICAgICAgfSxcbiAgICBdLFxuICAgIHZpbnMgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkIDogMSxcbiAgICAgICAgICAgIG5hbWUgOiBcImJvcmRlYXV4XCIsXG4gICAgICAgICAgICBjYXRlZ29yaWVJZCA6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQgOiAyLFxuICAgICAgICAgICAgbmFtZSA6IFwicml2ZXNhbHRlXCIsXG4gICAgICAgICAgICBjYXRlZ29yaWVJZCA6IDNcbiAgICAgICAgfVxuICAgIF0sXG4gICAgdmVuZGV1cnMgOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogXCJQYXVsXCIsXG4gICAgICAgICAgICBwcm9kdWN0cyA6IFsgMSwgMiBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogXCJKZXJlbXlcIixcbiAgICAgICAgICAgIHByb2R1Y3RzIDogWyAxIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiBcIlN0ZXBoYW5lXCIsXG4gICAgICAgICAgICBwcm9kdWN0cyA6IFsgMiBdXG4gICAgICAgIH1cblxuICAgXVxuXG5cbn0iLCJpbXBvcnQgeyBWZW5kb3IgfSBmcm9tIFwiLi9WZW5kb3JcIjtcbmltcG9ydCB7IEJkZCB9IGZyb20gXCIuL0JkZFwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuL0FwaVNlcnZpY2VcIjtcbmltcG9ydCB7IEpzb25TZXJpYWxpemFibGUgfSBmcm9tIFwiLi9Kc29uU2VyaWFsaXphYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBBcHAgaW1wbGVtZW50cyBKc29uU2VyaWFsaXphYmxle1xuXG4gICAgcHVibGljIGFwaTogQXBpU2VydmljZSA9IEFwaVNlcnZpY2UuZ2V0U2VydmljZSgpO1xuICAgIHB1YmxpYyBhZG1pbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHB1YmxpYyB2ZW5kb3JzOiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgdmVuZG9yOiBWZW5kb3JbXTtcbiAgICBwdWJsaWMgdmVuZG9ySWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgY2F0ZWdvcmllczogb2JqZWN0W107XG4gICAgcHVibGljIGNhdGVnb3J5OiBzdHJpbmdbXTtcbiAgICBwdWJsaWMgJGFkZE5ld1ZpbjogSlF1ZXJ5ID0gJChcIiNhZGROZXdWaW5cIik7XG4gICAgcHVibGljICRhZGROZXdWZW5kb3I6IEpRdWVyeSA9ICQoXCIjYWRkTmV3VmVuZG9yXCIpO1xuICAgIHB1YmxpYyAkbmFtZTogSlF1ZXJ5ID0gJChcIiNuYW1lXCIpO1xuICAgIHB1YmxpYyAkeWVhcjogSlF1ZXJ5ID0gJChcIiN5ZWFyXCIpO1xuICAgIHB1YmxpYyAkZGVzY3JpcHRpb246IEpRdWVyeSA9ICQoXCIjZGVzY3JpcHRpb25cIik7XG4gICAgcHVibGljICRpbWFnZTogSlF1ZXJ5ID0gJChcIiNpbWFnZVwiKTtcbiAgICBwdWJsaWMgJHZuYW1lOiBKUXVlcnkgPSAkKFwiI3ZlbmRldXJOYW1lXCIpO1xuICAgIHB1YmxpYyAkY2F0ZWdvcmllOiBKUXVlcnkgPSAkKFwiI3NlbGVjdFwiKTtcbiAgICBwdWJsaWMgdmVuZG9yQ29ubmVjdGVkOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyB2aW46IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdHJ1Y3Rvcigpe1xuXG4gICAgICAgIHRoaXMudmVuZG9ycyA9IFtdO1xuICAgICAgICB0aGlzLnZlbmRvciA9IFtdO1xuXG4gICAgfVxuXG4gICAgY2hlY2tNb2JpbGUoKXtcbiAgICAgICAgdmFyIGlzTW9iaWxlID0gZmFsc2U7IC8vaW5pdGlhdGUgYXMgZmFsc2VcbiAgICAgICAgLy8gZGV2aWNlIGRldGVjdGlvblxuICAgICAgICBpZigvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXBhZHxpcmlzfGtpbmRsZXxBbmRyb2lkfFNpbGt8bGdlIHxtYWVtb3xtaWRwfG1tcHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyAoY2V8cGhvbmUpfHhkYXx4aWluby9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgXG4gICAgICAgICAgICB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQuc3Vic3RyKDAsNCkpKSBpc01vYmlsZSA9IHRydWU7XG5cbiAgICAgICAgcmV0dXJuIGlzTW9iaWxlO1xuICAgIH1cblxuICAgIHN0YXJ0KCl7XG5cbiAgICAgICAgdGhpcy5hcGkuZ2V0Q2F0ZWdvcmllcygpXG4gICAgICAgIC50aGVuKCggZGF0YSApID0+IHtcblxuICAgICAgICAgICAgdGhpcy5nZXRDYXRlZ29yaWUoZGF0YSk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBpLmdldFByb2R1Y3RzKClcbiAgICAgICAgLnRoZW4oKCBkYXRhICkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmdldFByb2R1Y3QoZGF0YSk7XG5cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYXBpLmdldFZlbmRldXJzKClcbiAgICAgICAgLnRoZW4oKCBkYXRhICkgPT4ge1xuXG4gICAgICAgICAgICB0aGlzLmdldFZlbmRvcihkYXRhKTtcblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBnZXRDYXRlZ29yaWUoY2F0ZWdvcnk6IGFueSl7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzID0gY2F0ZWdvcnk7XG5cbiAgICAgICAgY2F0ZWdvcnkuZm9yRWFjaChmdW5jdGlvbihjYXQ6IGFueSl7XG5cbiAgICAgICAgICAgIGxldCBkb20yOiBzdHJpbmcgPSBcIjxkaXYgY2xhc3M9J2J1dHRvbkNhdCBcIiArIGNhdC5uYW1lICsgXCInIGRhdGFfaWQ9J1wiICsgY2F0LmlkICsgXCInIGlkPSdjYXRcIiArIGNhdC5uYW1lICsgXCInPlwiICsgY2F0Lm5hbWUgKyBcIjwvZGl2PlwiXG4gICAgICAgICAgICAkKFwiI21lbnVcIikuYXBwZW5kKGRvbTIpO1xuICAgICAgICAgICAgbGV0IGRvbTogc3RyaW5nID0gXCI8ZGl2IGNsYXNzPSdjb250YWluZXInIGRhdGFfaWQ9J1wiICsgY2F0LmlkICsgXCInIGlkPSdcIiArIGNhdC5uYW1lICsgXCInPjwvZGl2PlwiXG4gICAgICAgICAgICAkKFwiI21lbnVcIikuYXBwZW5kKGRvbSk7XG4gICAgICAgICAgICAkKFwiI3NlbGVjdFwiKS5hcHBlbmQoXCI8b3B0aW9uIHZhbHVlPSdcIiArIGNhdC5pZCArIFwiJz5cIiArIGNhdC5uYW1lICsgXCI8L29wdGlvbj5cIik7XG4gICAgICAgICAgICBcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIGFkZFZlbmRvcigpe1xuXG4gICAgICAgIGxldCBuYW1lOiBzdHJpbmcgPSB0aGlzLiR2bmFtZS52YWwoKS50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuYXBpLmFkZE5ld1ZlbmRldXIobmFtZSlcbiAgICAgICAgLnRoZW4oKCBkYXRhOiBhbnkgKSA9PiB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICBsZXQgdmVuZGV1ciA9IChcIjxkaXYgY2xhc3M9J3ZlbmRldXInIGlkPSdcIiArIGRhdGEuaWQgKyBcIic+XCIgKyBuYW1lICsgXCI8L2Rpdj5cIik7XG4gICAgICAgICAgICB0aGlzLnZlbmRvcnMucHVzaCh2ZW5kZXVyKTtcbiAgICAgICAgICAgIGxldCB2ZW5kOiBWZW5kb3IgPSBuZXcgVmVuZG9yKGRhdGEuaWQpO1xuICAgICAgICAgICAgdGhpcy52ZW5kb3IucHVzaCh2ZW5kKTtcbiAgICAgICAgICAgICQoXCIjdmVuZGV1cnNcIikuYXBwZW5kKHZlbmRldXIpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCggZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYWRkSXRlbShpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGNhdGVnb3JpZTogc3RyaW5nLCB5ZWFyOiBzdHJpbmcsIGRlc2NyaXB0aW9uOiBzdHJpbmcsIGltYWdlOiBzdHJpbmcpe1xuXG4gICAgICAgIGxldCBhcnJheSA9IHtcbiAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB5ZWFyOiB5ZWFyLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgaW1hZ2U6IGltYWdlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGNhdDogYW55KXtcblxuICAgICAgICAgICAgaWYoY2F0ZWdvcmllID09IGNhdC5pZC50b1N0cmluZygpKXtcblxuICAgICAgICAgICAgICAgIGxldCBkb20gPSBcIjxkaXYgY2xhc3M9J2l0ZW0gXCIgKyBjYXQubmFtZSArIFwiJyBkYXRhX2lkPSdcIiArIGlkICsgXCInIGlkPSdcIiArIGNhdC5uYW1lICsgaWQgKyBcIicgbmFtZT0nXCIgKyBuYW1lICsgXCInIGRyYWdnYWJsZT0ndHJ1ZSc+PC9kaXY+XCI7XG4gICAgICAgICAgICAgICAgJChcIiNcIiArIGNhdC5uYW1lKS5hcHBlbmQoZG9tKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAganNvblNlcmlhbGl6ZSgpOiB7fSB7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBnZXRQcm9kdWN0KHZpbnM6IGFueSl7XG4gICAgICAgIFxuICAgICAgICBmb3IodmFyIHYgb2Ygdmlucyl7XG5cbiAgICAgICAgICAgIHRoaXMudmluLnB1c2godik7XG5cbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcmllcy5mb3JFYWNoKGZ1bmN0aW9uKGNhdDogYW55KXtcblxuICAgICAgICAgICAgICAgIGlmKHYuY2F0ZWdvcmllSWQgPT0gY2F0LmlkKXtcblxuICAgICAgICAgICAgICAgICAgICAkKFwiI1wiICsgY2F0Lm5hbWUpLmFwcGVuZChcIjxkaXYgY2xhc3M9J2l0ZW0gXCIgKyBjYXQubmFtZSArIFwiJyBkYXRhX2lkPSdcIiArIHYuaWQgKyBcIicgaWQ9J1wiICsgY2F0Lm5hbWUgKyB2LmlkICsgXCInIG5hbWU9J1wiICsgdi5uYW1lICsgXCInIGRyYWdnYWJsZT0ndHJ1ZSc+PC9kaXY+XCIpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgZ2V0VmVuZG9yKHZlbmRldXJzOiBhbnkpe1xuXG4gICAgICAgIGxldCB2ZW5kbyA9IHZlbmRldXJzO1xuXG4gICAgICAgIGlmKHRoaXMuYWRtaW4gPT0gdHJ1ZSl7XG4gICAgICAgICAgICBmb3IodmFyIHZlbmRvciBvZiB2ZW5kbyl7XG5cbiAgICAgICAgICAgICAgICBsZXQgZG9tID0gXCI8ZGl2IGNsYXNzPSd2ZW5kZXVyJyBpZD0nXCIgKyB2ZW5kb3IuaWQgKyBcIic+XCIgKyB2ZW5kb3IubmFtZSArIFwiPC9kaXY+XCJcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvcnMucHVzaChkb20pO1xuICAgICAgICAgICAgICAgIGxldCB2ZW5kOiBWZW5kb3IgPSBuZXcgVmVuZG9yKHZlbmRvci5pZCk7XG4gICAgICAgICAgICAgICAgdGhpcy52ZW5kb3IucHVzaCh2ZW5kKTtcbiAgICAgICAgICAgICAgICAkKFwiI3ZlbmRldXJzXCIpLmFwcGVuZChkb20pO1xuICAgICAgICAgICAgICAgIHRoaXMuYXBpLmdldFZQcm9kdWN0KHZlbmRvci5pZClcbiAgICAgICAgICAgICAgICAudGhlbigoIGRhdGEgKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgdlByb2R1Y3Q6IGFueVtdID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciB2cHIgb2YgdlByb2R1Y3Qpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2cHIpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdnAgPSB2cHIuaWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMuZm9yRWFjaChmdW5jdGlvbihjYXQ6IGFueSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjXCIgKyBjYXQubmFtZSkuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKCQodGhpcykuYXR0cihcImRhdGFfaWRcIikgPT0gdnAudG9TdHJpbmcoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICRjbG9uZSA9ICQodGhpcykuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2xvbmUuYXR0cihcImRhdGEtY2xvbmVkXCIsICQodGhpcykuYXR0cihcImlkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2xvbmUuYXR0cihcImlkXCIsICQodGhpcykuYXR0cihcImlkXCIpICsgXCJfY2xvbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmQudmluLnB1c2goJGNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChcIi5idXR0b25DYXRcIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHRoaXMudmVuZG9yQ29ubmVjdGVkKXtcblxuICAgICAgICAgICAgJChcIiNhZGRWaW5cIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICAkKFwiI2FkZFZlbmRldXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICAgICBsZXQgZG9tID0gXCI8ZGl2IGNsYXNzPSd2ZW5kZXVyJyBpZD0nXCIgKyB0aGlzLnZlbmRvckNvbm5lY3RlZC5pZCArIFwiJz5cIiArIHRoaXMudmVuZG9yQ29ubmVjdGVkLm5hbWUgKyBcIjwvZGl2PlwiXG4gICAgICAgICAgICB0aGlzLnZlbmRvcnMucHVzaChkb20pO1xuICAgICAgICAgICAgbGV0IHZlbmQ6IFZlbmRvciA9IG5ldyBWZW5kb3IodGhpcy52ZW5kb3JDb25uZWN0ZWQuaWQpO1xuICAgICAgICAgICAgdGhpcy52ZW5kb3IucHVzaCh2ZW5kKTtcbiAgICAgICAgICAgICQoXCIjdmVuZGV1cnNcIikuYXBwZW5kKGRvbSk7XG4gICAgICAgICAgICAkKFwiI3ZlbmRldXJzXCIpLmNzcyhcIm1hcmdpblwiLCBcIjI1cHggMHB4XCIpO1xuXG4gICAgICAgICAgICB0aGlzLmFwaS5nZXRWUHJvZHVjdCh0aGlzLnZlbmRvckNvbm5lY3RlZC5pZClcbiAgICAgICAgICAgIC50aGVuKCggZGF0YSApID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB2YXIgdlByb2R1Y3Q6IGFueVtdID0gZGF0YTtcbiAgICAgICAgICAgICAgICBmb3IodmFyIHZwciBvZiB2UHJvZHVjdCl7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYodnByKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2cCA9IHZwci5pZDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLmZvckVhY2goZnVuY3Rpb24oY2F0OiBhbnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNcIiArIGNhdC5uYW1lKS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZigkKHRoaXMpLmF0dHIoXCJkYXRhX2lkXCIpID09IHZwLnRvU3RyaW5nKCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgJGNsb25lID0gJCh0aGlzKS5jbG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGNsb25lLmF0dHIoXCJkYXRhLWNsb25lZFwiLCAkKHRoaXMpLmF0dHIoXCJpZFwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2xvbmUuYXR0cihcImlkXCIsICQodGhpcykuYXR0cihcImlkXCIpICsgXCJfY2xvbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVuZC52aW4ucHVzaCgkY2xvbmUpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJChcIiNkZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcImJvY2tcIik7XG4gICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNleyBcblxuICAgICAgICAgICAgZm9yKHZhciB2ZW5kb3Igb2YgdmVuZG8pe1xuICAgICAgICAgICAgICAgIGxldCBkb20gPSBcIjxkaXYgY2xhc3M9J3ZlbmRldXInIGlkPSdcIiArIHZlbmRvci5pZCArIFwiJz5cIiArIHZlbmRvci5uYW1lICsgXCI8L2Rpdj5cIlxuICAgICAgICAgICAgICAgIHRoaXMudmVuZG9ycy5wdXNoKGRvbSk7XG4gICAgICAgICAgICAgICAgbGV0IHZlbmQ6IFZlbmRvciA9IG5ldyBWZW5kb3IodmVuZG9yLmlkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnZlbmRvci5wdXNoKHZlbmQpO1xuICAgICAgICAgICAgICAgICQoXCIjdmVuZGV1cnNcIikuYXBwZW5kKGRvbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5hcGkuZ2V0VlByb2R1Y3QodmVuZG9yLmlkKVxuICAgICAgICAgICAgICAgIC50aGVuKCggZGF0YSApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2YXIgdlByb2R1Y3Q6IGFueVtdID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciB2cHIgb2YgdlByb2R1Y3Qpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2cHIpe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZwID0gdnByLmlkO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLmZvckVhY2goZnVuY3Rpb24oY2F0OiBhbnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNcIiArIGNhdC5uYW1lKS5jaGlsZHJlbigpLmVhY2goZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoJCh0aGlzKS5hdHRyKFwiZGF0YV9pZFwiKSA9PSB2cC50b1N0cmluZygpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0ICRjbG9uZSA9ICQodGhpcykuY2xvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2xvbmUuYXR0cihcImRhdGEtY2xvbmVkXCIsICQodGhpcykuYXR0cihcImlkXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY2xvbmUuYXR0cihcImlkXCIsICQodGhpcykuYXR0cihcImlkXCIpICsgXCJfY2xvbmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlbmQudmluLnB1c2goJGNsb25lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goIGZ1bmN0aW9uKGVycm9yKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQoXCIjYWRkVmluXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgJChcIiNhZGRWZW5kZXVyXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAgICAgJChcIiNsb2dpblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICQoXCIjYWNjdWVpbFwiKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICAgICAkKFwiLmNvbnRhaW5lclwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICQoXCIuYnV0dG9uQ2F0XCIpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIpO1xuICAgICAgICAgICAgJChcIiNkZWxldGVcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG5cbiAgICAgICAgfTtcblxuICAgIH07XG5cbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiQXBwXCI7XG5cbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNle1xuXG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U6IEFwaVNlcnZpY2UgPSBudWxsO1xuXG4gICAgc3RhdGljIGdldFNlcnZpY2UoKTogQXBpU2VydmljZXtcbiAgICAgICAgaWYoIUFwaVNlcnZpY2UuaW5zdGFuY2Upe1xuICAgICAgICAgICAgQXBpU2VydmljZS5pbnN0YW5jZSA9IG5ldyBBcGlTZXJ2aWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQXBpU2VydmljZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICAgIHByaXZhdGUgdXJsOiBzdHJpbmcgPSBcImh0dHA6Ly8xOTIuMTY4LjExMC4zMTo4ODg4L0plcm9tZS9EcmFnQW5kRHJvcEV4by9BUEkvXCI7XG5cbiAgICBjaGVja1VzZXIodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nW10+e1xuXG4gICAgICAgIHZhciBwcm9taXNlOiBQcm9taXNlPHN0cmluZ1tdPiA9IG5ldyBQcm9taXNlKCggcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSApID0+IHtcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgXCJjaGVja1wiLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG5cbiAgICB9XG5cbiAgICBjb25uZXhpb24oKXtcblxuICAgICAgICAkKFwiI2xvZ2luXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAkKFwiI2FjY3VlaWxcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuXG4gICAgfVxuXG4gICAgZ2V0UHJvZHVjdHMoKXtcbiAgICAgICAgdmFyIHByb21pc2U6IFByb21pc2U8c3RyaW5nW10+ID0gbmV3IFByb21pc2UoKCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55ICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBcInByb2R1aXRzXCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfVxuXG4gICAgZ2V0Q2F0ZWdvcmllcygpe1xuICAgICAgICB2YXIgcHJvbWlzZTogUHJvbWlzZTxvYmplY3RbXT4gPSBuZXcgUHJvbWlzZSgoIHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkgKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArIFwiY2F0ZWdvcmllXCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfVxuXG4gICAgZ2V0VmVuZGV1cnMoKXtcbiAgICAgICAgdmFyIHByb21pc2U6IFByb21pc2U8b2JqZWN0W10+ID0gbmV3IFByb21pc2UoKCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55ICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBcInZlbmRldXJzXCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG5cbiAgICB9XG5cbiAgICBnZXRWUHJvZHVjdChpZDogc3RyaW5nKXtcblxuICAgICAgICB2YXIgcHJvbWlzZTogUHJvbWlzZTxvYmplY3RbXT4gPSBuZXcgUHJvbWlzZSgoIHJlc29sdmU6IGFueSwgcmVqZWN0OiBhbnkgKSA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLnVybCArIFwidlByb2R1Y3QvXCIgKyBpZCxcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcblxuICAgIH1cblxuICAgIHNhdmVWUHJvZHVjdChpZDogc3RyaW5nLCB2ZW5kZXVySWQ6IHN0cmluZyl7XG5cbiAgICAgICAgdmFyIHByb21pc2U6IFByb21pc2U8b2JqZWN0W10+ID0gbmV3IFByb21pc2UoKCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55ICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBcInN2UHJvZHVjdFwiLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgICAgICAgICAgZGF0YVR5cGU6IFwianNvblwiLFxuICAgICAgICAgICAgICAgIGRhdGE6e1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZlbmRldXJJZDogdmVuZGV1cklkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG5cbiAgICB9XG5cbiAgICBhZGRQcm9kdWN0KG5hbWU6IHN0cmluZywgY2F0ZWdvcmllOiBzdHJpbmcsIHllYXI6IHN0cmluZywgZGVzY3JpcHRpb246IHN0cmluZywgaW1hZ2U6IHN0cmluZyl7XG5cbiAgICAgICAgdmFyIHByb21pc2U6IFByb21pc2U8b2JqZWN0W10+ID0gbmV3IFByb21pc2UoKCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55ICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBcImFkZFByb2R1Y3RcIixcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcmllOiBjYXRlZ29yaWUsXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IHllYXIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKXtcblxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24oZXJyb3Ipe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG5cbiAgICB9XG5cbiAgICByZW1vdmUoaWQ6IHN0cmluZywgdmVuZGV1cklkOiBzdHJpbmcpe1xuXG4gICAgICAgIHZhciBwcm9taXNlOiBQcm9taXNlPG9iamVjdFtdPiA9IG5ldyBQcm9taXNlKCggcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgXCJyZW1vdmVcIixcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBkYXRhOntcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2ZW5kZXVySWQ6IHZlbmRldXJJZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlSXQoaWQ6IHN0cmluZyl7XG5cbiAgICAgICAgdmFyIHByb21pc2U6IFByb21pc2U8b2JqZWN0W10+ID0gbmV3IFByb21pc2UoKCByZXNvbHZlOiBhbnksIHJlamVjdDogYW55ICkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHVybDogdGhpcy51cmwgKyBcInJlbW92ZUl0XCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSl7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkYXRhKTtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uKGVycm9yKXtcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfVxuXG4gICAgYWRkTmV3VmVuZGV1cihuYW1lOiBzdHJpbmcpe1xuXG4gICAgICAgIHZhciBwcm9taXNlOiBQcm9taXNlPG9iamVjdFtdPiA9IG5ldyBQcm9taXNlKCggcmVzb2x2ZTogYW55LCByZWplY3Q6IGFueSApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMudXJsICsgXCJuZXdWZW5kZXVyXCIsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgZGF0YTp7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpe1xuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbihlcnJvcil7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcblxuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgeyBBcHAgfSBmcm9tIFwiQXBwXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIkFwaVNlcnZpY2VcIjtcbmltcG9ydCB7IFZlbmRvciB9IGZyb20gXCJWZW5kb3JcIjtcbmltcG9ydCB7IEpzb25TZXJpYWxpemFibGUgfSBmcm9tIFwiSnNvblNlcmlhbGl6YWJsZVwiO1xuXG52YXIgYXBwOiBBcHAgPSBuZXcgQXBwKCk7XG52YXIgYXBpOiBBcGlTZXJ2aWNlID0gQXBpU2VydmljZS5nZXRTZXJ2aWNlKCk7XG52YXIgZmxhZyA9IGFwcC5jaGVja01vYmlsZSgpO1xuaWYoZmxhZyA9PSB0cnVlKXtcbiAgICBhcHAuc3RhcnQoKTtcbn1cblxuJChcIi5jb250YWluZXIsICN2Q29udGVudCwgI2RlbGV0ZVwiKS5vbihcImRyYWdvdmVyXCIsIGZ1bmN0aW9uKGV2ZW50KXtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG59KVxuXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiI2xvZ2luYnV0dG9uXCIsIChldmVudCkgPT4ge1xuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHZhciB1c2VybmFtZTogc3RyaW5nID0gJChcIiN1c2VybmFtZVwiKS52YWwoKS50b1N0cmluZygpO1xuICAgIHZhciBwYXNzd29yZDogc3RyaW5nID0gJChcIiNwYXNzd29yZFwiKS52YWwoKS50b1N0cmluZygpO1xuICAgIGFwaS5jaGVja1VzZXIodXNlcm5hbWUsIHBhc3N3b3JkKVxuICAgICAgICAudGhlbigoIGRhdGE6IGFueSApID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZGF0YSl7XG4gICAgICAgICAgICAgICAgJChcIiNsb2dpblwiKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiI2FjY3VlaWxcIikuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgICAgIGFwcC52ZW5kb3JDb25uZWN0ZWQgPSBkYXRhO1xuICAgICAgICAgICAgICAgIGFwcC52ZW5kb3JJZCA9IGRhdGEuaWQ7XG4gICAgICAgICAgICAgICAgaWYoZGF0YS5hZG1pbiA9PT0gXCJ0cnVlXCIpe1xuICAgICAgICAgICAgICAgICAgICBhcHAuYWRtaW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcHAuc3RhcnQoKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goIGZ1bmN0aW9uKGVycm9yOiBhbnkpe1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG5cbiAgICAgICAgfSk7O1xuICAgIFxufSlcblxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNub2FjY291bnRcIiwgKGV2ZW50OiBhbnkpID0+IHtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhcHAuc3RhcnQoKTtcbiAgICBcbn0pXG5cbiQoZG9jdW1lbnQpLm9uKFwiZHJhZ3N0YXJ0XCIsIFwiLml0ZW1cIiwgZnVuY3Rpb24oZXZlbnQpe1xuXG4gICAgbGV0IGRyYWdFdmVudDogRHJhZ0V2ZW50ID0gZXZlbnQub3JpZ2luYWxFdmVudCBhcyBEcmFnRXZlbnQ7XG4gICAgZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5zZXREYXRhKFwiaWRcIiwgJCh0aGlzKS5hdHRyKFwiaWRcIikpO1xuXG59KVxuXG4kKGRvY3VtZW50KS5vbihcImRyb3BcIiwgXCIjdkNvbnRlbnRcIiwgZnVuY3Rpb24oZXZlbnQpe1xuXG5cbiAgICBsZXQgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IGFzIERyYWdFdmVudDtcbiAgICBsZXQgZ2V0SWQ6IHN0cmluZyA9IGRyYWdFdmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xuICAgIGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChcIiNcIiArIGdldElkKTtcbiAgICBsZXQgYXR0ciA9ICRlbGVtZW50LmF0dHIoXCJkYXRhLWNsb25lZFwiKTtcbiAgICBsZXQgZmxhZyA9IGZhbHNlO1xuXG4gICAgaWYoISRlbGVtZW50LmF0dHIoXCJkYXRhLWNsb25lZFwiKSAmJiAkKFwiW2RhdGEtY2xvbmVkPVwiICsgZ2V0SWQgKyBcIl1cIikubGVuZ3RoID09IDApe1xuXG4gICAgICAgIGxldCAkY2xvbmUgPSAkZWxlbWVudC5jbG9uZSgpO1xuICAgICAgICAkY2xvbmUuYXR0cihcImRhdGEtY2xvbmVkXCIsIGdldElkKTtcbiAgICAgICAgJGNsb25lLmF0dHIoXCJpZFwiLCBnZXRJZCArIFwiX2Nsb25lZFwiKTtcbiAgICAgICAgJCh0aGlzKS5hcHBlbmQoJGNsb25lKTtcbiAgICAgICAgdmFyIGF0dHJpID0gJGNsb25lLmF0dHIoJ2RhdGFfaWQnKTtcblxuICAgICAgICBhcGkuc2F2ZVZQcm9kdWN0KGF0dHJpLCBhcHAudmVuZG9ySWQudG9TdHJpbmcoKSlcbiAgICAgICAgLnRoZW4oKCBkYXRhICkgPT4ge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCggZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IobGV0IHZlbmQgb2YgYXBwLnZlbmRvcil7XG5cbiAgICAgICAgICAgIGlmKHZlbmQuaWQgPT0gYXBwLnZlbmRvcklkKXtcblxuICAgICAgICAgICAgICAgIHZlbmQudmluID0gW11cbiAgICAgICAgICAgICAgICB2ZW5kLnZpbi5wdXNoKCQodGhpcykuY2hpbGRyZW4oKSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuICAgIFxuICAgIFxufSlcblxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIiNhZGROZXdWZW5kb3JcIiwgZnVuY3Rpb24oKXtcblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBhcHAuYWRkVmVuZG9yKCk7XG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIudmVuZGV1clwiLCBmdW5jdGlvbigpe1xuXG4gICAgbGV0IGlkID0gJCh0aGlzKS5hdHRyKFwiaWRcIik7XG4gICAgYXBwLnZlbmRvcklkID0gcGFyc2VJbnQoaWQpO1xuICAgICQoXCIudmVuZGV1clwiKS5jc3MoXCJib3JkZXJcIiwgXCIwcHggc29saWQgYmxhY2tcIik7XG4gICAgJChcIi5idXR0b25DYXRcIikuY3NzKFwiYm9yZGVyXCIsIFwiMHB4IHNvbGlkIGJsYWNrXCIpO1xuICAgICQoXCIjdkNvbnRlbnRcIikuY2hpbGRyZW4oKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgJCh0aGlzKS5jc3MoXCJib3JkZXJcIiwgXCIycHggc29saWQgcmdiKDI0MCwgMjI5LCAyMTYpXCIpO1xuICAgICQoXCIjdkNvbnRlbnRcIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG4gICAgJChcIiN2Q29udGVudFwiKS5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgIFxuICAgIGZvcihsZXQgdmVuZCBvZiBhcHAudmVuZG9yKXtcblxuICAgICAgICBpZih2ZW5kLmlkID09IGFwcC52ZW5kb3JJZCl7XG5cbiAgICAgICAgICAgIGZvcihsZXQgdiBvZiB2ZW5kLnZpbil7XG5cbiAgICAgICAgICAgICAgICAkKFwiI3ZDb250ZW50XCIpLmFwcGVuZCh2KTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbn0pXG5cbiQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCIjYWRkTmV3VmluXCIsIGZ1bmN0aW9uKCl7XG5cbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgdmFyIGNhdGVnb3J5OiBhbnkgPSBhcHAuJGNhdGVnb3JpZS52YWwoKTtcbiAgICB2YXIgbmFtZTogYW55ID0gYXBwLiRuYW1lLnZhbCgpO1xuICAgIHZhciB5ZWFyOiBhbnkgPSBhcHAuJHllYXIudmFsKCk7XG4gICAgdmFyIGRlc2NyaXB0aW9uOiBhbnkgPSBhcHAuJGRlc2NyaXB0aW9uLnZhbCgpO1xuICAgIHZhciBpbWFnZTogYW55ID0gYXBwLiRpbWFnZS52YWwoKTtcblxuICAgIGNvbnNvbGUubG9nKG5hbWUpO1xuXG4gICAgYXBpLmFkZFByb2R1Y3QobmFtZSwgY2F0ZWdvcnksIHllYXIsIGRlc2NyaXB0aW9uLCBpbWFnZSlcbiAgICAudGhlbigoIGRhdGE6IGFueSApID0+IHtcblxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICAgICAgICBhcHAuYWRkSXRlbShkYXRhLCBuYW1lLCBjYXRlZ29yeSwgeWVhciwgZGVzY3JpcHRpb24sIGltYWdlKTtcblxuICAgIH0pXG4gICAgLmNhdGNoKCBmdW5jdGlvbihlcnJvcil7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9KTtcblxufSlcblxuJChkb2N1bWVudCkub24oXCJkcm9wXCIsIFwiI2RlbGV0ZVwiLCBmdW5jdGlvbihldmVudCl7XG5cbiAgICBsZXQgZHJhZ0V2ZW50OiBEcmFnRXZlbnQgPSBldmVudC5vcmlnaW5hbEV2ZW50IGFzIERyYWdFdmVudDtcbiAgICBsZXQgZ2V0SWQ6IHN0cmluZyA9IGRyYWdFdmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YShcImlkXCIpO1xuICAgIGxldCAkZWxlbWVudDogSlF1ZXJ5ID0gJChcIiNcIiArIGdldElkKTtcblxuICAgIGlmKGFwcC52ZW5kb3JDb25uZWN0ZWQpe1xuXG4gICAgICAgIGlmKCAkZWxlbWVudC5hdHRyKFwiZGF0YS1jbG9uZWRcIikgKXtcblxuICAgICAgICAgICAgYXBpLnJlbW92ZSgkZWxlbWVudC5hdHRyKFwiZGF0YV9pZFwiKSwgYXBwLnZlbmRvckNvbm5lY3RlZC5pZClcbiAgICAgICAgICAgIC50aGVuKCggZGF0YSApID0+IHtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCggZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkZWxlbWVudC5yZW1vdmUoKTtcblxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG5cbiAgICAgICAgICAgIGlmKGFwcC5hZG1pbiA9PSB0cnVlKXtcbiAgICAgICAgICAgICAgICB2YXIgYXR0ciA9ICRlbGVtZW50LmF0dHIoXCJkYXRhX2lkXCIpO1xuICAgICAgICAgICAgICAgIGFwaS5yZW1vdmVJdChhdHRyKVxuICAgICAgICAgICAgICAgIC50aGVuKCggZGF0YSApID0+IHtcbiAgICBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCggZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJChcIltkYXRhX2lkPVwiICsgYXR0ciArIFwiXVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgdmVuZCBvZiBhcHAudmVuZG9yKXtcblxuICAgICAgICAgICAgaWYodmVuZC5pZCA9PSBhcHAudmVuZG9ySWQpe1xuXG4gICAgICAgICAgICAgICAgdmVuZC52aW4gPSBbXVxuICAgICAgICAgICAgICAgIHZlbmQudmluLnB1c2goJChcIiN2Q29udGVudFwiKS5jaGlsZHJlbigpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG4gICAgXG59KVxuXG4kKGRvY3VtZW50KS5vbihcImNsaWNrXCIsIFwiLml0ZW1cIiwgZnVuY3Rpb24oZXZlbnQ6IGFueSkge1xuXG4gICAgJChcIiNpbmZvXCIpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICBsZXQgYXR0ciA9ICQodGhpcykuYXR0cignY2xhc3MnKS5zcGxpdCgnICcpWzFdO1xuICAgIGxldCBpZCA9ICQodGhpcykuYXR0cihcImRhdGFfaWRcIik7XG5cbiAgICBsZXQgZG9tID0gXCI8ZGl2PlwiO1xuICAgIGRvbSArPSBcIjxwPiBOb206IFwiICsgJCh0aGlzKS5hdHRyKFwibmFtZVwiKSArIFwiPC9wPlwiO1xuICAgIGRvbSArPSBcIjxwPiBDYXTDqWdvcmllOiBcIiArIGF0dHIgKyBcIjwvcD5cIjtcblxuICAgIGFwcC52aW4uZm9yRWFjaChmdW5jdGlvbih2OiBhbnkpe1xuXG4gICAgICAgIGlmKHYuaWQgPT0gaWQpe1xuICAgICAgICAgICAgZG9tICs9IFwiPHA+IEFubsOpZTogXCIgKyB2LnllYXIgKyBcIjwvcD5cIjtcbiAgICAgICAgICAgIGRvbSArPSBcIjxwPiBEZXNjcmlwdGlvbjogXCIgKyB2LmRlc2NyaXB0aW9uICsgXCI8L3A+XCI7XG4gICAgICAgICAgICBkb20gKz0gXCI8aW1nIGNsYXNzPSdpbWFnZUluZm8nIHNyYz0nXCIgKyB2LmltYWdlICsgXCInLz5cIjtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9KVxuXG4gICAgZG9tICs9IFwiPC9kaXY+XCI7XG5cbiAgICAkKFwiLml0ZW1cIikuY3NzKFwiYm9yZGVyXCIsIFwiMHB4IHNvbGlkIHJnYigyNDAsIDIyOSwgMjE2KVwiKTtcbiAgICAkKHRoaXMpLmNzcyhcImJvcmRlclwiLCBcIjJweCBzb2xpZCByZ2IoMjQwLCAyMjksIDIxNilcIik7XG5cbiAgICAkKFwiI2luZm9cIikuaHRtbChkb20pO1xuXG59KTtcblxuJChkb2N1bWVudCkub24oXCJjbGlja1wiLCBcIi5idXR0b25DYXRcIiwgZnVuY3Rpb24oKXtcblxuICAgIHZhciBhdHRyID0gKCQodGhpcykuYXR0cignZGF0YV9pZCcpKTtcblxuICAgIGlmKGFwcC52ZW5kb3JDb25uZWN0ZWQgfHwgYXBwLmFkbWluID09IHRydWUpe1xuICAgICAgICBcbiAgICAgICAgJChcIi5jb250YWluZXJcIikuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XG4gICAgICAgICQoXCIuY29udGFpbmVyW2RhdGFfaWQ9J1wiICsgYXR0ciArIFwiJ11cIikuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIik7XG5cbiAgICB9XG4gICAgZWxzZXtcblxuICAgICAgICB2YXIgbmFtZTogc3RyaW5nID0gbnVsbDtcblxuICAgICAgICBhcHAuY2F0ZWdvcmllcy5mb3JFYWNoKChjYXQ6IGFueSkgPT4ge1xuXG4gICAgICAgICAgICBpZihjYXQuaWQgPT0gYXR0cil7XG5cbiAgICAgICAgICAgICAgICBuYW1lID0gY2F0Lm5hbWU7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgJChcIiN2Q29udGVudFwiKS5jaGlsZHJlbigpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xuICAgICAgICAkKFwiI3ZDb250ZW50XCIpLmNoaWxkcmVuKCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcyhuYW1lKSA9PSB0cnVlKXtcblxuICAgICAgICAgICAgICAgICQodGhpcykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcblxuICAgICAgICAkKFwiLmJ1dHRvbkNhdFwiKS5jc3MoXCJib3JkZXJcIiwgXCIwcHhcIik7XG4gICAgICAgICQodGhpcykuY3NzKFwiYm9yZGVyXCIsIFwiMnB4IHNvbGlkIHJnYigyNDAsIDIyOSwgMjE2KVwiKVxuICAgICAgICBcbiAgICB9XG5cblxufSk7XG5cbiJdfQ==
