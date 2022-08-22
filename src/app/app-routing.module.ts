import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { ThankYouComponent } from './thank-you/thank-you.component';

const routes: Routes = [
  {path: '',component:Form1Component},
  {path:'formTwo',component:Form2Component}, 
  {path:'formThree',component:Form3Component},
  {path:'formFour',component:Form4Component},
  {path:'thanks',component:ThankYouComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
