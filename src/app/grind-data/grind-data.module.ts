import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrindDataRoutingModule } from './grind-data-routing.module';
import { GrindDataFormPageComponent } from './grind-data-form-page/grind-data-form-page.component';


@NgModule({
  declarations: [
    GrindDataFormPageComponent
  ],
  imports: [
    CommonModule,
    GrindDataRoutingModule
  ]
})
export class GrindDataModule { }
