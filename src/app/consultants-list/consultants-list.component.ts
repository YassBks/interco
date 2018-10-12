import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Consultant} from '../model/consultant';

declare var jQuery:any;

@Component({
  selector: 'consultants-list',
  templateUrl: './consultants-list.component.html',
  styleUrls: ['./consultants-list.component.css']
})
export class ConsultantsListComponent implements OnInit {
  @Input("consultants") consultants:Consultant[];
  popup:boolean = false;
  @Output() consultantDeleted = new EventEmitter<Consultant>();
  consultantToDelete:Consultant;
  
  
  constructor() { }

  ngOnInit() {
    // AJOUT DE TRI PAR DATE FORMATEE
    jQuery.tablesorter.addParser({ 
        // set a unique id 
        id: 'dateformat', 
        is: function(s) { 
            return false; 
        }, 
        format: function(s) { 
            var d = new Date(s[6]+s[7]+s[8]+s[9]+"-"+s[3]+s[4]+"-"+s[0]+s[1]);
            return Date.parse(d.toISOString()); 
        }, 
        type: 'numeric' 
    });
    
    setTimeout(function() {jQuery("#myTable").tablesorter({ 
            headers: { 
                3: { 
                    sorter:'dateformat' 
                } 
            } 
        }); }, 500);
  }
  
  toggleModal(){
    this.popup = !this.popup;
  }
  
  
  toDelete(consultant){
    this.consultantToDelete = consultant;
  }
   
  deleteConsultantEvent(){
    this.consultantDeleted.emit(this.consultantToDelete);
  } 
}
