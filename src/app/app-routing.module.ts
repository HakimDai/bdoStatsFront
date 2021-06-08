import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GrindDataFormPageComponent} from "./grind-data/grind-data-form-page/grind-data-form-page.component";

const routes: Routes = [{path: '', component: GrindDataFormPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
