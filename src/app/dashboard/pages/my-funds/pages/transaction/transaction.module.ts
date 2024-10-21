import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from './transaction.component';
import { ITransactionService } from 'src/app/shared/interface/IClientService';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { ListTransationComponent } from 'src/app/atomic-design/organisms/list-transation/list-transation.component';
import { DecimalPointModule } from 'src/app/shared/pipe/decimal-point/decimal-point.module';


@NgModule({
  declarations: [
    TransactionComponent,
    ListTransationComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,
    DecimalPointModule
  ],
  providers: [
    {provide: ITransactionService, useClass: ClientService},
  ]
})
export class TransactionModule { }
