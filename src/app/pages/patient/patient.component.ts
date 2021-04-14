import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {

  patientId: any;
  patient: any;
  patientAddresses: any;
  encounters: any;
  insurances: any;
  emergencyContacts: any;
  charges: any;
  error: any;
  encounter: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    console.log('patient id: ', this.patientId);
    this.getPatientById(this.patientId);
  }

  /**
   * name
   */
  public getPatientById(id: string) {
    // patient
    this.http.get('/patients/' + id)
    .subscribe(
      data => {
        this.patient = data;
      },
      error => {
        console.log('error: getPatientById', error);
      }
    );

    // address
    this.http.get('/patients/address/' + id)
    .subscribe(
      data => {
        this.patientAddresses = data;
      },
      error => {
        console.log('error: getPatientById', error);
      }
    );

    // encounters
    this.http.get('/patients/encounters/' + id)
    .subscribe(
      data => {
        this.encounters = data;
      },
      error => {
        console.log('error: getPatientById', error);
      }
    );

    // insurances
    this.http.get('/patients/insurances/' + id)
    .subscribe(
      data => {
        this.insurances = data;
      },
      error => {
        console.log('error: getPatientById', error);
      }
    );

    // emergencyContacts
    this.http.get('/patients/emergencyContacts/' + id).subscribe(
      data => {
        this.emergencyContacts = data;
      },
      error => {
        console.log('error: getPatientById', error);
      }
    );

  }

  public getPatientEncounterById(encounterId: string) {
      // patient
      this.http.get('/encounters/' + encounterId)
      .subscribe(
        data => {
          this.encounter = data;
        },
        error => {
          console.log('error: getPatientEncounterById', error);
        }
      );
  }
}
