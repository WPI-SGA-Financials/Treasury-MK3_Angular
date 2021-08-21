import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FinancialsComponent} from "./financials.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: FinancialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialsRoutingModule { }
