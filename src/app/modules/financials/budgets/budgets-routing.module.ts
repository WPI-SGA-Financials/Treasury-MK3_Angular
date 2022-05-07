import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetsListComponent } from './budgets-list/budgets-list.component';
import { BudgetDetailedComponent } from './budget-detailed/budget-detailed.component';

const routes: Routes = [
    {
        path: '',
        component: BudgetsListComponent,
    },
    {
        path: ':id',
        component: BudgetDetailedComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BudgetsRoutingModule {}
