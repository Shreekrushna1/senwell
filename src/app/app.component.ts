import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,FormBuilder } from '@angular/forms';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-boot';    
}
