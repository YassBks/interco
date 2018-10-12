import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service'; 
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import {Router} from '@angular/router';
import { NavigationService } from '../services/navigation.service'; 

import{
    map,
    debounceTime,
    distinctUntilChanged,
    switchMap,
    tap
} from "rxjs/operators";

@Component({
  selector: 'header-interco',
  templateUrl: './header-interco.component.html',
  styleUrls: ['./header-interco.component.css']
})
export class HeaderIntercoComponent implements OnInit {
    activatedComponent: Subscription;
    isHome:boolean = false;
    name:string = "yass";
    authStatus:boolean = false;
    isAuthSubscription: Subscription;

    
  constructor(private authService: AuthService,  private router: Router, private navigation:NavigationService) { }
  
  ngOnInit() {
  this.isAuthSubscription = this.authService.isAuthSubject.subscribe(
      (authStatusSubject: boolean) => {
        this.authStatus = authStatusSubject;
      }
    );
    
  this.activatedComponent = this.navigation.activatedComponentSubject.subscribe(
      (compo: string) => {
        if(compo.indexOf('Home') != -1) {
            this.isHome = true;
        }else{
            this.isHome = false;
        }
      }
    );
  }
  
  exitApp(){
  this.authService.signOut();
  this.router.navigate(['auth']);
  } 
  
  ngOnDestroy() {
    this.isAuthSubscription.unsubscribe();
  }
  

}
