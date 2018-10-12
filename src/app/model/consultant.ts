export class Consultant {
    
    id?:number;
    gender?:number;
    firstname?:string;
    lastname?:string;
    profession?:string;
    room?:number;
    start_interco?:Date;
    infos?:string;
      
    constructor(id:number=0, gender:number=0, firstname:string="", lastname:string="", profession:string="", room:number=0, start_interco:Date= new Date(), infos:string = ""){
        this.id = id;
        this.gender = gender;
        this.firstname = firstname;
        this.lastname = lastname;
        this.profession = profession;
        this.room = room;
        this.start_interco = start_interco;
        this.infos = infos;
    }
 
} 