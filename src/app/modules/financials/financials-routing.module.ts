import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialsComponent } from './financials.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundingRequestsComponent } from './funding-requests/funding-requests.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialsComponent,
    children: [
      {
        path: 'budgets',
        component: BudgetsComponent
      },
      {
        path: 'funding-requests',
        component: FundingRequestsComponent
      },
      {
        path: 'reallocations',
        loadChildren: () => import('./reallocations/reallocations.module').then((m) => m.ReallocationsModule)
      },
      {
        path: '**',
        redirectTo: 'budgets'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialsRoutingModule {}
