import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ClubNameComponent} from "./club-name.component";



@NgModule({
  declarations: [ClubNameComponent],
  exports:[ClubNameComponent],
  imports: [
    CommonModule
  ]
})
export class ClubNameModule { }
