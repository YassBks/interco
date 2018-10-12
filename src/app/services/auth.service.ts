import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class AuthService { 

  public isAuth = false;
  isAuthSubject = new Subject<boolean>();

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuth = true;
             this.isAuthSubject.next(this.isAuth);
            resolve(true);
          }, 1 //temps pour se co
        );
      }
    );
  }

  signOut() {
    this.isAuth = false;
    this.isAuthSubject.next(this.isAuth);
  }
}