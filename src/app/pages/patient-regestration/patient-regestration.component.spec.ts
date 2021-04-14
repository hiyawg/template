import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientRegestrationComponent } from './patient-regestration.component';

describe('PatientRegestrationComponent', () => {
  let component: PatientRegestrationComponent;
  let fixture: ComponentFixture<PatientRegestrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientRegestrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientRegestrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
