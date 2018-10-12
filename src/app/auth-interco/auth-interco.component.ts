import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataBaseService} from '../services/data-base.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auth-interco',
  templateUrl: './auth-interco.component.html',
  styleUrls: ['./auth-interco.component.css']
})
export class AuthIntercoComponent implements OnInit {

authStatus: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onSignIn() {
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['admin-home']);
      }
    );
  }

  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;
  }

}
