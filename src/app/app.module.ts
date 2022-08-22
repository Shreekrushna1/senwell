import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import  { MatInputModule } from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import { Form2Component } from './form2/form2.component';
import { Form1Component } from './form1/form1.component';
 import {MaterialExampleModule} from '../material.module';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { ThankYouComponent } from './thank-you/thank-you.component'; 
 

@NgModule({
  declarations: [
    AppComponent,
    Form2Component,
    Form1Component,
    Form3Component,
    Form4Component,
    ThankYouComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MaterialExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
