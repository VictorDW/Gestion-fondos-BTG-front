import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsSubscritedRoutingModule } from './funds-subscrited-routing.module';
import { FundsSubscritedComponent } from './funds-subscrited.component';
import { ListSubscritendComponent } from 'src/app/atomic-design/organisms/list-subscritend/list-subscritend.component';
import { DecimalPointModule } from 'src/app/shared/pipe/decimal-point/decimal-point.module';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { ClientService } from 'src/app/shared/services/client/client.service';


@NgModule({
  declarations: [
    FundsSubscritedComponent,
    ListSubscritendComponent
  ],
  imports: [
    CommonModule,
    FundsSubscritedRoutingModule,
    DecimalPointModule
  ],
  providers: [
    {provide: IClientService, useClass: ClientService},
  ]
})
export class FundsSubscritedModule { }
