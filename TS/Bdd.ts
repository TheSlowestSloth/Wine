export const Bdd:{
    categories : { id:number, name:string}[],
    vins : { id:number, name:string, categorieId:number }[],
    vendeurs : { id:number, name:string, products:number[] }[]
 }
    = {

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
    vins : [
        {
            id : 1,
            name : "bordeaux",
            categorieId : 1
        },
        {
            id : 2,
            name : "rivesalte",
            categorieId : 3
        }
    ],
    vendeurs : [
        {
            id: 1,
            name: "Paul",
            products : [ 1, 2 ]
        },
        {
            id: 2,
            name: "Jeremy",
            products : [ 1 ]
        },
        {
            id: 3,
            name: "Stephane",
            products : [ 2 ]
        }

   ]


}