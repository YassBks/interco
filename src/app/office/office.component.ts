import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import { Consultant} from '../model/consultant';
 
@Component({
  selector: 'office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
  
  @Input('office') office:Consultant;
  srcImg:String
  constructor(private router: Router) { }

  ngOnInit() {
   switch(this.office.gender){
      case 1:
        this.srcImg = "../assets/man.png";
        break;
      case 2:
        this.srcImg = "../assets/woman.png";
        break;
      case 3:
        this.srcImg = "../assets/empty.png";
        break;
  } 
  
  }
  
  toConsultant(id:number){
    this.router.navigate(['admin-home/consultants/'+id]);
  }

}
