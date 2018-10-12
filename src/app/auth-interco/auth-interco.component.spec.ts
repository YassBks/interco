import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthIntercoComponent } from './auth-interco.component';

describe('AuthIntercoComponent', () => {
  let component: AuthIntercoComponent;
  let fixture: ComponentFixture<AuthIntercoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthIntercoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthIntercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
