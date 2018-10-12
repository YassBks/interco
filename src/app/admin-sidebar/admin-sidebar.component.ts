import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service'; 
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {
  
  activeBool:boolean[]=[false, false, false];
  activatedComponent: Subscription
  
  constructor(private navigation:NavigationService) { }

  ngOnInit() {
    this.activatedComponent = this.navigation.activatedComponentSubject.subscribe(
      (compo: string) => {
       switch(compo){
        case 'AdminHomeComponent':
            this.toggleActivate(0);
        break;
        case 'ManageConsultantsComponent':
            this.toggleActivate(1);
        break;
        case 'ManageRoomComponent':
            this.toggleActivate(2);
        break;
       }
      });
    }
  
  public toggleActivate(index:number):void{
  
  for(let i = 0; i<this.activeBool.length; i++){
         this.activeBool[i] = false;
  }
    this.activeBool[index-1] = true;
  }
  
  }


