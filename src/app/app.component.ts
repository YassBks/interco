import { Component } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NavigationService } from './services/navigation.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interco';
  
  constructor(private navigation:NavigationService){
  
  }
}
