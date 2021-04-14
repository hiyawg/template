import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AnimationDurations } from '@angular/material';

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit {

  encounter: any;
  encounterId: any;
  fullname: any;
  dob: any;
  pulse: any;
  temp: any;
  sat: any;
  respRate: any;
  weight: any;
  roomNbr: any;
  diagnosis: any;
  chiefComplaint: any;
  treatment: any;
  remark: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.encounterId = this.route.snapshot.paramMap.get('id');
    console.log('encounter id: ', this.encounterId);
    this.getencounterById(this.encounterId);
  }

  /**
   * name
   */
  public getencounterById(id: any) {
     // patient
     this.http.get('/encounters/' + id)
     .subscribe(
       data => {
         this.encounter = data;
         this.fullname = this.encounter.patient.fname + ' ' + this.encounter.patient.lname;
         this.dob = this.encounter.patient.dob;
         this.pulse = this.encounter.pulse;
         this.temp = this.encounter.temp;
         this.sat = this.encounter.sat;
         this.respRate = this.encounter.respRate;
         this.weight = this.encounter.weight;
         this.roomNbr = this.encounter.roomNbr;
         this.remark = this.encounter.remark;
         this.chiefComplaint = this.encounter.chiefComplaint;
         this.treatment = this.encounter.treatment;
       },
       error => {
         console.log('error: getencounterById', error);
       }
     );
  }

  public updateEncounterBasic(form: any) {
    this.http.post('/encounters', form)
    .subscribe(
      data => {
        this.encounter = data;
        this.encounterId = this.encounter.encounterId;
        this.fullname = this.encounter.patient.fname + ' ' + this.encounter.patient.lname;
        this.dob = this.encounter.patient.dob;
        this.pulse = this.encounter.pulse;
        this.temp = this.encounter.temp;
        this.sat = this.encounter.sat;
        this.respRate = this.encounter.respRate;
        this.weight = this.encounter.weight;
        this.roomNbr = this.encounter.roomNbr;
        this.remark = this.encounter.remark;
        this.chiefComplaint = this.encounter.chiefComplaint;
        this.treatment = this.encounter.treatment;
      },
      error => {
        console.log('error: ', error);
      }
    );
  }

  public addEncounterNote(form: any) {
    this.http.post('/encounters/notes', form)
    .subscribe(
      data => {
        this.encounter = data;
        this.encounterId = this.encounter.encounterId;
        this.fullname = this.encounter.patient.fname + ' ' + this.encounter.patient.lname;
        this.dob = this.encounter.patient.dob;
        this.pulse = this.encounter.pulse;
        this.temp = this.encounter.temp;
        this.sat = this.encounter.sat;
        this.respRate = this.encounter.respRate;
        this.weight = this.encounter.weight;
        this.roomNbr = this.encounter.roomNbr;
        this.remark = this.encounter.remark;
        this.chiefComplaint = this.encounter.chiefComplaint;
        this.treatment = this.encounter.treatment;
      },
      error => {
        console.log('error: ', error);
      }
    );
  }
}
