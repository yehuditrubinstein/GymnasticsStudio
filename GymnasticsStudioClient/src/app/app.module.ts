
       
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './Components/log-in/log-in.component';
import { StudentPayDetailsComponent } from './Components/student-pay-details/student-pay-details.component';


import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import { MatMenuModule} from '@angular/material/menu';
import { StudentsListComponent } from './Components/students-list/students-list.component';
import { MatTableModule} from '@angular/material/table';
import { ScrollingModule} from '@angular/cdk/scrolling';
import { StudentDetailsComponent } from './Components/student-details/student-details.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTreeModule} from '@angular/material/tree';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { StudentScadulComponent } from './Components/student-scadul/student-scadul.component';
import { StudentAttendanceScadulComponent } from './Components/student-attendance-scadul/student-attendance-scadul.component';


// import { MaskedTextBoxModule } from '@progress/kendo-angular-inputs';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    StudentsListComponent,
    StudentDetailsComponent,
    StudentPayDetailsComponent,
    StudentScadulComponent,
    StudentAttendanceScadulComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    FormsModule,
    ReactiveFormsModule,

    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatTableModule,
    ScrollingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatGridListModule,
    MatExpansionModule,
    MatTreeModule,
    CommonModule,
    MatListModule,
    //MaskedTextBoxModule,
    HttpClientModule,

  ],
  
  exports: [ 
    
    MatToolbarModule,
    MatIconModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatMenuModule,
    MatTableModule,
    ScrollingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatOptionModule,
    MatGridListModule,
    MatExpansionModule,
    MatTreeModule,
    CommonModule,
    MatListModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
