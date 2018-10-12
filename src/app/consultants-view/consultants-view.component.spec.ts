import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsViewComponent } from './consultants-view.component';

describe('ConsultantsViewComponent', () => {
  let component: ConsultantsViewComponent;
  let fixture: ComponentFixture<ConsultantsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultantsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultantsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
