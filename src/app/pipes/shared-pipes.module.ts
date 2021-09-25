import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveClubPipe } from './active-club/active-club.pipe';

@NgModule({
  declarations: [ActiveClubPipe],
  exports: [ActiveClubPipe],
  imports: [CommonModule]
})
export class SharedPipesModule {}
