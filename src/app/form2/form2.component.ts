import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Form1Component } from '../form1/form1.component';
import { MaterialExampleModule } from "../../material.module";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Form3Component } from '../form3/form3.component'; 

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {
   newForm2=new FormGroup ({
    Guarantor:new FormControl('',[Validators.required]) 
   })
   toform3( ){
    console.log(this.newForm2.value);
     
   }

  constructor( ) { }

  ngOnInit(): void {
  }

}
