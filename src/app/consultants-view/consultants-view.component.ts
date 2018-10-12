import { Component, OnInit, OnChanges } from '@angular/core';
import { DataBaseService} from '../services/data-base.service';
import {ActivatedRoute, Router} from "@angular/router";
import { Observable } from 'rxjs/Observable';
import {Location} from '@angular/common';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
import { Consultant} from '../model/consultant';
import { Room} from '../model/room';

import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MyDateAdapter, MY_DATE_FORMATS} from '../date-adapter/my-date-adapter';



@Component({
  selector: 'app-consultants-view',
  templateUrl: './consultants-view.component.html',
  styleUrls: ['./consultants-view.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ]
})

export class ConsultantsViewComponent implements OnInit {
  consultant:Consultant;
  rooms:Room[]= [];
  consultantForm:FormGroup;
  id:string;
  date:Date;   
  
  constructor(private databaseService: DataBaseService, private router:Router, private route:ActivatedRoute, private location: Location, private formBuilder:FormBuilder) { }

  ngOnInit() {
      this.rooms = this.databaseService.rooms;
      this.id = this.route.snapshot.params['id'];      
      this.consultant = this.databaseService.getConsultantById(+this.id);
      this.initForm(this.consultant);
      this.date = new Date(this.consultant.start_interco);
  }
  
  initForm(consultant) {
    this.consultantForm = this.formBuilder.group({
      lastname: consultant.lastname,
      firstname: consultant.firstname,
      profession: consultant.profession,
      room: consultant.room,
      start_interco: new Date(consultant.start_interco),
      infos: consultant.infos
    });
  }
  
  onSubmitForm() {
    const controls = this.consultantForm.controls;
    const controlsArray = Object.keys(controls);
    
    const updateData = [];
    for(var i=0; i < controlsArray.length;i++){
        if(controls[controlsArray[i]].dirty==true) {
            let controlChanged = new Object();
            controlChanged[controlsArray[i]] = controls[controlsArray[i]].value;
            updateData.push(controlChanged);
        }
    }
    this.databaseService.updateConsultant(updateData,+this.id);
    

    this.goBack(); 
  }

  
  goBack(){
    this.location.back();
  }

}
