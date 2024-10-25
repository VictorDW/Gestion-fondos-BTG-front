import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { TemplateComponent } from '../atomic-design/template/template.component';
import { ImageComponent } from '../atomic-design/atoms/image/image.component';
import { HeaderComponent } from '../atomic-design/molecules/header/header.component';
import { NavComponent } from '../atomic-design/molecules/nav/nav.component';
import { LinkComponent } from '../atomic-design/atoms/link/link.component';
import { MyFundsModule } from './pages/my-funds/my-funds.module';


@NgModule({
  declarations: [
    DashboardComponent,
    TemplateComponent,
    HeaderComponent,
    ImageComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MyFundsModule
  ]
})
export class DashboardModule { }
