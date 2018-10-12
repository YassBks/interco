export class Room {
    
    id?:number;
    name?:string;
    capacity?:number;

      
    constructor(id:number=0, name:string="", capacity:number=0){
        this.id = id;
        this.name = name;
        this.capacity = capacity;
    }
 
} 