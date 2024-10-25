import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Constants } from '../shared/enums/enums';

const routes: Routes = [
  { 
    path: Constants.EMPTY_STRING, component: DashboardComponent,
    children: [
      {
        path: 'funds', 
        loadChildren: () => import('./pages/funds/funds.module').then( module => module.FundsModule)
      },
      {
        path: 'my-funds', 
        loadChildren: () => import('./pages/my-funds/my-funds.module').then( module => module.MyFundsModule)
      },
      {
        path: '**',
        redirectTo: 'funds',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
