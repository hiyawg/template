import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-checked-in',
  templateUrl: './patient-checked-in.component.html',
  styleUrls: ['./patient-checked-in.component.scss']
})
export class PatientCheckedInComponent implements OnInit {

  encounters: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCheckedInPatients();
  }

  private getCheckedInPatients() {
    this.http.get('/encounters').subscribe(
      data => {
        this.encounters = data;
        console.log('getCheckedInPatients: ', data);
      },
      error => {
        console.log('error: ', error);
      }
    );
  }

  public discharge(patientId: any) {
    this.http.get('/encounters/discharge/' + patientId).subscribe(
      data => {
        this.encounters = data;
      },
      error => {
        console.log('error: ', error);
      }
    );
  }

}
