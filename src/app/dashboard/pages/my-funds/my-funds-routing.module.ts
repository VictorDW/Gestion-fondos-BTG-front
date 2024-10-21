import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from 'src/app/shared/enums/enums';
import { MyFundsComponent } from './my-funds.component';

const routes: Routes = [
  {
    path: Constants.EMPTY_STRING, component: MyFundsComponent,
    children: [
      {
        path: 'transactions',
        loadChildren: () => import('./pages/transaction/transaction.module').then( module => module.TransactionModule)
      },
      {
        path: '**',
        redirectTo: 'transactions',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFundsRoutingModule { }
