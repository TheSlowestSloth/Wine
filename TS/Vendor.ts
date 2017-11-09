import { JsonSerializable } from "./JsonSerializable";

export class Vendor implements JsonSerializable{

    public id: number;
    public vin: JQuery[];

    constructor(id: number){

        this.id = id;
        this.vin = [];
        
    }

    jsonSerialize(): {} {
        throw new Error("Method not implemented.");
    }

}