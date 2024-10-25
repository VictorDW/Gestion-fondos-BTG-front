import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundsComponent } from './funds.component';
import { Constants } from 'src/app/shared/enums/enums';

const routes: Routes = [
  {
    path: Constants.EMPTY_STRING, component: FundsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundsRoutingModule { }
