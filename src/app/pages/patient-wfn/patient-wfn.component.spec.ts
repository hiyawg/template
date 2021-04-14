import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientWFNComponent } from './patient-wfn.component';

describe('PatientWFNComponent', () => {
  let component: PatientWFNComponent;
  let fixture: ComponentFixture<PatientWFNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientWFNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientWFNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
