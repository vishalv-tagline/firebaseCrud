import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment.development';
import { StudentDetailsComponent } from './features/components/student-details/student-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { CalendarModule } from 'primeng/calendar';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut: 1200,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
        closeButton: true, progressBar: true,
        progressAnimation: 'decreasing'
      }
    ),
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    RippleModule,
    CalendarModule,
    RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
