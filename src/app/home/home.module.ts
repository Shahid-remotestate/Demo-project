import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home.component";
import {HeaderComponent} from "../sdk/components/header/header.component";
import {SdkModule} from "../sdk/sdk.module";
import {DashboardComponent} from "../sdk/components/dashboard/dashboard.component";



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent
      }
    ]),
    SdkModule
  ]
})
export class HomeModule { }
