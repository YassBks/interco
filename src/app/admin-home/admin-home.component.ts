import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService} from '../services/data-base.service';
import { Subscription } from 'rxjs/Subscription';
import { Consultant} from '../model/consultant';
import { Room} from '../model/room';

@Component({
  selector: 'admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit, OnDestroy {
  
  consultantsSubscription:Subscription;
  consultants:Consultant[];
  consultantsByRoom = new Array();
  
  
  roomsSubscription:Subscription;
  rooms:Room[] = [];
  twosRooms:Object[];
  
  constructor(private databaseService: DataBaseService) { 
  
  }

  ngOnInit() {
    
    this.roomsSubscription = this.databaseService.roomsSubject.subscribe(
    (rooms:Room[]) => {
        this.rooms = rooms;
        this.twosRooms = new Array(Math.round(this.rooms.length));
    }
    );
    
    
    this.consultantsSubscription = this.databaseService.consultantsSubject.subscribe(
      (consultants: Consultant[]) => {
        this.consultants = consultants;
                
        this.consultantsByRoom = [];
        
        for(let i = 0;i<this.rooms.length;i++){
            this.consultantsByRoom.push([]);
            for(let j = 0; j<this.consultants.length;j++){
                if(this.consultants[j].room===this.rooms[i].id){
                    this.consultantsByRoom[i].push(this.consultants[j]);
                }
            }
        }
      }
    );
    
    this.databaseService.emitRooms(this.databaseService.rooms);
    this.databaseService.emitConsultants(this.databaseService.consultants);
  }
  
  ngOnDestroy() {
    this.consultantsSubscription.unsubscribe();
    this.roomsSubscription.unsubscribe();
  }
  
  }

