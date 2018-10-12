import { Component, OnInit, AfterContentInit, Input } from '@angular/core';
import { Consultant} from '../model/consultant';

@Component({
  selector: 'room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  @Input('consultants') consultants:Consultant[];
  @Input('capacity') capacity:number;
  
  offices:Consultant[] = [];
  
  constructor() { }

  ngOnInit() {
    let emptyOffice = new Consultant(0, 3) ;
    if(this.consultants != undefined){ // prevent Cannot read property of undefined
        for(let i = 0; i<this.capacity;i++){
            if(this.consultants[i] != undefined){
                this.offices.push(this.consultants[i]);
            }else{
                this.offices.push(emptyOffice);

            }
        }
    }
  }


}
