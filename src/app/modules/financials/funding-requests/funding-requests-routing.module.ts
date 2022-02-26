import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundingRequestsListComponent } from './funding-requests-list/funding-requests-list.component';

const routes: Routes = [
  {
    path: '',
    component: FundingRequestsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundingRequestsRoutingModule {}
