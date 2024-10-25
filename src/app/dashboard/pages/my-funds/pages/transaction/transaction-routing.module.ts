import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from 'src/app/shared/enums/enums';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
  {
    path: Constants.EMPTY_STRING, component: TransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
