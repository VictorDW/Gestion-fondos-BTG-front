import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DecimalPointPipe } from './decimal-point.pipe';



@NgModule({
  declarations: [DecimalPointPipe],
  imports: [
    CommonModule
  ],
  exports: [DecimalPointPipe],
})
export class DecimalPointModule { }
