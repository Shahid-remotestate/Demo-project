import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import { DashboardComponent } from './components/dashboard/dashboard.component';

const SHARED_COMPONENTS = [
]
const MATERIAL_MODULE = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule
]

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ...MATERIAL_MODULE
  ],
  exports:[
    ...MATERIAL_MODULE
  ]
})
export class SdkModule { }
