import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFundsRoutingModule } from './my-funds-routing.module';
import { MyFundsComponent } from './my-funds.component';
import { TabsNavComponent } from 'src/app/atomic-design/molecules/tabs-nav/tabs-nav.component';
import { LinkComponent } from 'src/app/atomic-design/atoms/link/link.component';


@NgModule({
  declarations: [
    MyFundsComponent,
    TabsNavComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    MyFundsRoutingModule
  ],
  exports: [LinkComponent]
})
export class MyFundsModule { }
