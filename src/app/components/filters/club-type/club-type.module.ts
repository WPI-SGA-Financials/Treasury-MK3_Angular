import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClubTypeComponent } from './club-type.component';

@NgModule({
  declarations: [ClubTypeComponent],
  exports: [ClubTypeComponent],
  imports: [CommonModule]
})
export class ClubTypeModule {}
