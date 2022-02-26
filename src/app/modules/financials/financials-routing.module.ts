import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialsComponent } from './financials.component';

const routes: Routes = [
  {
    path: '',
    component: FinancialsComponent,
    children: [
      {
        path: 'budgets',
        loadChildren: () => import('./budgets/budgets.module').then((m) => m.BudgetsModule)
      },
      {
        path: 'funding-requests',
        loadChildren: () => import('./funding-requests/funding-requests.module').then((m) => m.FundingRequestsModule)
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
