import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', component: DashboardComponent,
    children: [
      {
        path: 'funds', 
        loadChildren: () => import('./pages/funds/funds.module').then( module => module.FundsModule)
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
