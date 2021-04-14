import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import {SearchPatientComponent} from './pages/search-patient/search-patient.component';
import {PatientRegestrationComponent} from './pages/patient-regestration/patient-regestration.component';
import { PatientComponent } from './pages/patient/patient.component';
import { EncounterComponent } from './pages/encounter/encounter.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'searchPatint/dashboard/:id', component: DashboardComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'patient/:id', component: PatientComponent},
  { path: 'encounter/:id', component: EncounterComponent},
  { path: 'searchPatint', component: SearchPatientComponent},
  { path: 'regesterPatient', component: PatientRegestrationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
