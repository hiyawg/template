import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientCheckedInComponent } from './patient-checked-in.component';

describe('PatientCheckedInComponent', () => {
  let component: PatientCheckedInComponent;
  let fixture: ComponentFixture<PatientCheckedInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientCheckedInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientCheckedInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
