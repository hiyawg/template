import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.scss']
})
export class SearchPatientComponent implements OnInit {

  patientSearchResult: any;
  constructor(private http: HttpClient) {}

  ngOnInit() {
  }

  /**
   * searchPatient
   */
  public searchPatient (search: any) {
    this.http.post('/patients/search', search)
        .subscribe(
            data => {
                console.log('POST Request is successful ', data);
                this.patientSearchResult = data;
            },
            error => {
                console.log('Error', error);
            }
        );
  }
}
