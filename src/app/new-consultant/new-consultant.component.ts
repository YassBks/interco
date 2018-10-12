import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { DataBaseService} from '../services/data-base.service';
import {Location} from '@angular/common';
import { Consultant} from '../model/consultant';
import { Room} from '../model/room';

import {DateAdapter, MAT_DATE_FORMATS} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MyDateAdapter, MY_DATE_FORMATS} from '../date-adapter/my-date-adapter';

@Component({
  selector: 'new-consultant',
  templateUrl: './new-consultant.component.html',
  styleUrls: ['./new-consultant.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MyDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS},
  ]
})
export class NewConsultantComponent implements OnInit {
  
  consultantForm:FormGroup;
  displayError:boolean = false;
  roomFull:boolean = false;
  rooms:Room[]= [];
  
  constructor(private formBuilder:FormBuilder, private databaseService: DataBaseService, private location: Location) { }

  ngOnInit() {
  this.rooms = this.databaseService.rooms;
  this.initForm();
  }
  
  initForm() {
    this.consultantForm = this.formBuilder.group({
      gender: 1,
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      profession: 'MOE',
      room: 1,
      start_interco: new Date(),
      infos: ""
    });
  }
  
  onSubmitForm(){
    if(this.consultantForm.controls.firstname.valid && this.consultantForm.controls.firstname.valid){
        if(this.databaseService.isRoomFull(this.consultantForm.value.room)===false){
            
            const newConsultant = new Consultant(0, this.consultantForm.value.gender, 
            this.consultantForm.value.firstname,
            this.consultantForm.value.lastname, 
            this.consultantForm.value.profession,
            this.consultantForm.value.room,
            this.consultantForm.value.start_interco,
            this.consultantForm.value.infos);
            
            this.databaseService.addConsultant(newConsultant);
            this.goBack();
        } else {
            this.roomFull= true;    
        }
    } else {
      this.toogleValid();
    }
  }
  
   goBack(){
    this.location.back();
   }
   
   toogleValid(){
    this.displayError = !this.displayError;
   }
   
   removeErrorRoomFull(){
    this.roomFull = false;
   }

}
