import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConsultantsComponent } from './search-consultants.component';

describe('SearchConsultantsComponent', () => {
  let component: SearchConsultantsComponent;
  let fixture: ComponentFixture<SearchConsultantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConsultantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
