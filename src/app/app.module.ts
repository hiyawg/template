import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TopComponent } from './pages/top/top.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './pages/footer/footer.component';
import { FrontdeskComponent } from './pages/frontdesk/frontdesk.component';
import { DoctorComponent } from './pages/doctor/doctor.component';
import { PatientWFNComponent } from './pages/patient-wfn/patient-wfn.component';
import { PatientCheckedInComponent } from './pages/patient-checked-in/patient-checked-in.component';
import { SearchPatientComponent } from './pages/search-patient/search-patient.component';
import { PatientRegestrationComponent } from './pages/patient-regestration/patient-regestration.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatInputModule, MatNativeDateModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { PatientComponent } from './pages/patient/patient.component';
import { EncounterComponent } from './pages/encounter/encounter.component';
import { DataTablesModule } from 'angular-datatables';
import { EmployeeComponent } from './pages/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopComponent,
    DashboardComponent,
    FooterComponent,
    FrontdeskComponent,
    DoctorComponent,
    PatientWFNComponent,
    PatientCheckedInComponent,
    SearchPatientComponent,
    PatientRegestrationComponent,
    PatientComponent,
    EncounterComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
