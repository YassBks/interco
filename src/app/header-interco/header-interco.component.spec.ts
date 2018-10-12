import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderIntercoComponent } from './header-interco.component';

describe('HeaderIntercoComponent', () => {
  let component: HeaderIntercoComponent;
  let fixture: ComponentFixture<HeaderIntercoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderIntercoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderIntercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
