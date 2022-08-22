import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.scss']
})
export class Form3Component implements OnInit {
  newForm3=new FormGroup({
    Buyer:new FormControl('',[Validators.required])
  })
  dataForm3(){
    console.log(this.newForm3.value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
