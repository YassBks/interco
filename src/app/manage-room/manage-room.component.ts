import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService} from '../services/data-base.service';
import { Subscription } from 'rxjs/Subscription';
import { Room} from '../model/room';
 

@Component({
  selector: 'manage-room',
  templateUrl: './manage-room.component.html',
  styleUrls: ['./manage-room.component.css']
})
export class ManageRoomComponent implements OnInit, OnDestroy {
  
  roomsSubscription:Subscription;
  rooms:Room[];
  popup:boolean=false;
  roomToDelete:Room;
  displayErrorCapacity:boolean = false;
  myAlert:boolean[]=[];
  
  constructor(private databaseService: DataBaseService) { }

  ngOnInit() { 
  this.roomsSubscription = this.databaseService.roomsSubject.subscribe(
    (rooms:Room[]) => {
        this.rooms = [];
        for(let i = 0; i<rooms.length;i++){
            this.rooms.push(new Room(rooms[i].id, rooms[i].name, rooms[i].capacity));
        }
    }
    );
     this.databaseService.emitRooms(this.databaseService.rooms.slice());
     for(let i = 0; i<this.rooms.length;i++){
        this.myAlert[i] = false;
     }
  }
  
  minValue(id:number):number{
  
    return this.databaseService.roomContent(id);
  }
  
  saveNewData(i:number){
    const room = this.rooms[i];
    let minValue = this.databaseService.roomContent(room.id);
    
    if(room.capacity < minValue || room.capacity >100){ 
        this.myAlert[i] = true;
    }else{
        this.myAlert[i] = false;
        }
    
    if(this.myAlert.every(element => element === false)){
        this.databaseService.emitRooms(this.rooms);
    }
  }
  
  toogleDisplayError(){
    this.displayErrorCapacity = false;
  }
  
  
  
  alertNotEmpty(room:Room){
    this.roomToDelete = room;
    if(!this.databaseService.isRoomEmpty(room.id)) {
        this.toggleModal();
    }else{
       this.deleteRoom(); 
    }
  }
  
  deleteRoom(){
    this.databaseService.deleteRoom(this.roomToDelete.id);    
  }
  
  toggleModal(){
    this.popup = !this.popup;
  }
  
  addRoom(){
     this.databaseService.addRoom();
  }
  
  ngOnDestroy() {
    this.roomsSubscription.unsubscribe();
  }
  

}
