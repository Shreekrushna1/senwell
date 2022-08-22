import { Component, Injectable, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; 
import{FormDataService} from '../form-data.service';

@Component({
  selector: 'app-form4', 
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.scss']
})   

export class Form4Component implements OnInit {
  // @Output('app-form1') newForm:any ;
  // @Output('app-form2') newForm2: any;
  // @Output('app-form3') newForm3: any;
newForm4=new FormGroup({
  Statement:new FormControl(''),
  Id1:new FormControl(''),
  Id2:new FormControl(''),
  Add1:new FormControl(''),
  Add2:new FormControl(''),
})
dataForm4(){ 
  console.log(this.newForm4.value);
   
}

  constructor( ) {
     
   }

  ngOnInit(): void {  
     
  }

}  
