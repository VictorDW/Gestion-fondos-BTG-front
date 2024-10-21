import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFundsRoutingModule } from './my-funds-routing.module';
import { MyFundsComponent } from './my-funds.component';


@NgModule({
  declarations: [
    MyFundsComponent
  ],
  imports: [
    CommonModule,
    MyFundsRoutingModule
  ]
})
export class MyFundsModule { }
