import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants } from 'src/app/shared/enums/enums';
import { FundsSubscritedComponent } from './funds-subscrited.component';

const routes: Routes = [
  {
    path: Constants.EMPTY_STRING, component: FundsSubscritedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundsSubscritedRoutingModule { }
