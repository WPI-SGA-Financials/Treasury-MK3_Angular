import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReallocationsListComponent } from './reallocations-list/reallocations-list.component';

const routes: Routes = [
  {
    path: '',
    component: ReallocationsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReallocationsRoutingModule {}
