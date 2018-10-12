import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Consultant} from '../model/consultant';
import { Room} from '../model/room';

@Injectable()
export class DataBaseService {
    consultantsSubject = new Subject<Consultant[]>();
    consultants:Consultant[] = [];
    rooms:Room[]=[];
    roomsSubject = new Subject<Room[]>();
    
    constructor(private http: HttpClient) {
        this.http.get("./assets/data.json").subscribe((data:any) => { 
            for(let i = 0; i < data.consultants.length;i++){
              this.consultants.push(new Consultant(data.consultants[i].id,data.consultants[i].gender,data.consultants[i].firstname,data.consultants[i].lastname,data.consultants[i].profession,data.consultants[i].room, data.consultants[i].start_interco, data.consultants[i].infos)); 
            }
            
            for(let i = 0; i < data.rooms.length;i++){
              this.rooms.push(new Room(data.rooms[i].id,data.rooms[i].name,data.rooms[i].capacity)); 
            }
            this.roomsSubject.next(this.rooms);
            this.consultantsSubject.next(this.consultants);
            });

    }
    
    public roomContent(id:number):number{
    
        let content = 0;
        for(let i = 0; i<this.consultants.length;i++){
             if(this.consultants[i].room===id){
                content++;
             }
        }
        return content;
    }
    
    
    public isRoomEmpty(id:number):boolean{
    
        for(let i = 0; i<this.consultants.length;i++){
             if(this.consultants[i].room===id){
                return false;
             }
        }
        return true;
    }
    
    public isRoomFull(id:number):boolean{
        const room = this.rooms.find(
            (element) => {
                return element.id === id;
            }
        );
        
        let consultantsIn = 0;
        for(let i = 0; i<this.consultants.length;i++){
            if(this.consultants[i].room===id){
                consultantsIn++;
            }
        }
        if(room.capacity===consultantsIn){
            return true;
        }else{
            return false;
        }
    }
    
               
    public emitConsultants(consultants) {        
        if(consultants != null ) this.consultantsSubject.next(consultants);
    } 
    
    public emitRooms(rooms) {  
        if(rooms != null ){
            this.rooms = rooms;
            this.roomsSubject.next(rooms);
        }
    } 
    
    public getConsultantById(id: number): Consultant{
        const consultant = this.consultants.find(
            (s) => {
                return s.id === id;
            }
        );
        return consultant;
        
    }
    
    public updateConsultant(updateData:object[], id:number){
        for(var i= 0; i < updateData.length;i++){
            let keyChanged = Object.getOwnPropertyNames(updateData[i])[0];
            this.consultants[id-1][keyChanged] = updateData[i][keyChanged];
            this.emitConsultants(this.consultants); 
        }
    }
    
    public addConsultant(newData:Consultant){
    
        const consultant = newData;
        consultant.id = this.consultants.length + 1;
        this.consultants.push(consultant);
        this.emitConsultants(this.consultants);
    }    
    
    public deleteConsultant(consultant:Consultant){
        let indexToDelete = this.consultants.indexOf(consultant);
        if (indexToDelete !== -1) {
            this.consultants.splice(indexToDelete,1);
            this.emitConsultants(this.consultants);
        }
    }
    
    public addRoom(){
        let id = this.rooms.length + 1;
        let newRoom = new Room(id, "", 1);
        this.rooms.push(newRoom);
        this.emitRooms(this.rooms);
    }
    
    public deleteRoom(id:number){  
        
        for(let i = 0; i<this.rooms.length;i++){
            if(this.rooms[i].id===id){
             this.rooms.splice(i,1);
             this.emitRooms(this.rooms);
            }
        }
        
        let previousLength = this.consultants.length;
        for(let i = 0; i<this.consultants.length;i++){
            if(this.consultants[i].room===id){
                this.deleteConsultant(this.consultants[i]);
                i--;
            }
        }
        
        this.emitRooms(this.rooms);
        this.emitConsultants(this.consultants);
    }
}
