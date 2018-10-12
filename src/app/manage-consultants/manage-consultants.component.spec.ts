import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageConsultantsComponent } from './manage-consultants.component';

describe('ManageConsultantsComponent', () => {
  let component: ManageConsultantsComponent;
  let fixture: ComponentFixture<ManageConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
