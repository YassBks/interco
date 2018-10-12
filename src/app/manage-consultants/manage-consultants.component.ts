import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataBaseService} from '../services/data-base.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-manage-consultants',
  templateUrl: './manage-consultants.component.html',
  styleUrls: ['./manage-consultants.component.css']
})
export class ManageConsultantsComponent implements OnInit, OnDestroy{
  
  consultants:Object[];
  consultantsSubscription:Subscription;
    
  constructor(private databaseService: DataBaseService) { }

  ngOnInit() {
    this.consultantsSubscription = this.databaseService.consultantsSubject.subscribe(
      (consultants: any[]) => {
        this.consultants = consultants;
      }
    );
    this.databaseService.emitConsultants(this.databaseService.consultants);
  }
  
  deleteConsultant(consultant) {
    this.databaseService.deleteConsultant(consultant);
  }
   
  ngOnDestroy() {
    this.consultantsSubscription.unsubscribe();
  }

}
 