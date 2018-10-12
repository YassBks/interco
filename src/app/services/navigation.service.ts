import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class NavigationService { 

  activatedComponentSubject = new Subject<string>();

  navigationData(component:any) {
    this.activatedComponentSubject.next(component);
  }
}