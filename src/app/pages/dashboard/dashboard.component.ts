import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  patientId: any;
  encounters: any;
  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.patientId = this.route.snapshot.paramMap.get('id');
    if ( this.patientId != null ) {
        this.checkInPatient(this.patientId);
    }
  }

  public checkInPatient(id: any) {
    this.http.get('/patients/checkIn/' + id)
    .subscribe(
      data => {
        console.log('Check in success: ', data);
        this.router.navigate(['']);
      },
      error => {
        console.log('Error', error);
      }
    );
  }

}
