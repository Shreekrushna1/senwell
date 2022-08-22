import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})

export class Form1Component implements OnInit {   

  userId:any={};
  userData:any={};

  newForm=new FormGroup ({
    borrowerId: new FormControl('',[Validators.required]),
    scenarioId:new FormControl('',[Validators.required]),
    Salutation:new FormControl('',[Validators.required]),
    FirstName:new FormControl('',[Validators.required]),
    LastName:new FormControl('',[Validators.required]),
    titleRole:new FormControl('',[Validators.required]),
    Address:new FormControl('' ),
    City:new FormControl('' ),
    State:new FormControl('' ), 
    PostCode:new FormControl('' ), 
    Email:new FormControl('' ), 
    PhoneNumber:new FormControl('' ), 
    DOB:new FormControl('' ), 
    PassportID:new FormControl('' ), 
    NameOnPassport:new FormControl('' ), 
    PassportExpiry:new FormControl('' ), 
    DLID:new FormControl('' ), 
    NameOnDL:new FormControl('' ), 
    StateOfInssuance:new FormControl('' ), 
    ABN:new FormControl('' ), 
    TaxFileNumber:new FormControl('' ), 
    SSID:new FormControl('' ), 
    CreditScore:new FormControl('' ), 
  })  
  
  form2() { 
    console.log(this.newForm.value );
     
  }
  PatchedData(){
    this.newForm.patchValue({
      borrowerId: '1245',
      scenarioId: '1245',
      Salutation: '1245',
      FirstName: '1245',
      LastName: '1245',
      titleRole: '1245',
      Address: '1245',
      City: '1245',
      State: '1245',
      PostCode: '1245',
      Email: '1245',
      PhoneNumber: '1245',
      DOB: '2001-08-07',
      PassportID: '1245',
      NameOnPassport: '1245',
      PassportExpiry: '2022-05-06',
      DLID: '1245',
      NameOnDL: '1245',
      StateOfInssuance: '1245',
      ABN: '1245',
      TaxFileNumber:'1245',
      SSID: '1245',
      CreditScore: '780'
    })
    console.log(this.PatchedData);
  }
     
  

  constructor(  ) { 
  }

  ngOnInit(): void {
    let tempUser = localStorage.getItem('borrowerId');
    if (tempUser) {
      this.userData = JSON.parse(tempUser);
      this.userId = this.userData.id;
    };
    this.newForm.patchValue({
      'borrowerId': this.userId.id,  
    });

  }

}
