import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundsRoutingModule } from './funds-routing.module';
import { FundsComponent } from './funds.component';
import { ListFundsComponent } from 'src/app/atomic-design/organisms/list-funds/list-funds.component';
import { IClientService } from 'src/app/shared/interface/IClientService';
import { ClientService } from 'src/app/shared/services/client/client.service';
import { IFundService } from 'src/app/shared/interface/IFundService';
import { FundService } from 'src/app/shared/services/fund/fund.service';
import { DecimalPointModule } from 'src/app/shared/pipe/decimal-point/decimal-point.module';
import { SelectComponent } from 'src/app/atomic-design/molecules/select/select.component';
import { ButtonComponent } from 'src/app/atomic-design/atoms/button/button.component';
import { FormComponent } from 'src/app/atomic-design/organisms/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FundsComponent,
    ListFundsComponent,
    SelectComponent,
    ButtonComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FundsRoutingModule,
    DecimalPointModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    {provide: IClientService, useClass: ClientService},
    {provide: IFundService, useClass: FundService},
  ]
})
export class FundsModule { }
