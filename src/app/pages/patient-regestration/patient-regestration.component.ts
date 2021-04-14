import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-regestration',
  templateUrl: './patient-regestration.component.html',
  styleUrls: ['./patient-regestration.component.scss']
})
export class PatientRegestrationComponent implements OnInit {

  states = ['District of Colombia', 'Maryland', 'Virginia'];

  success: string;
  error: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  /**
   * name
   */
  public regesterPatient(form: any) {
    this.http.post('/patients', form)
    .subscribe(
      data => {
        console.log('Patient Regestration is successful ', data);
        this.success = 'You have successfully regestered ' + form.patientFirstName + ' ' + form.patientLastName;
    },
    error => {
        console.log('Error', error);
        this.error = error;
    }
    );
  }

  public destroy() {
    this.error = null;
    this.success = null;
  }

}
