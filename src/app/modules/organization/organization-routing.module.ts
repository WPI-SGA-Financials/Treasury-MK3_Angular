import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizationComponent } from './organization.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundingRequestsComponent } from './funding-requests/funding-requests.component';
import { ReallocationsComponent } from './reallocations/reallocations.component';
import { OrganizationListComponent } from './organization-list/organization-list.component';

const routes: Routes = [
    {
        path: '',
        component: OrganizationListComponent,
    },
    {
        path: ':id',
        component: OrganizationComponent,
        children: [
            {
                path: 'budgets',
                component: BudgetsComponent,
            },
            {
                path: 'funding-requests',
                component: FundingRequestsComponent,
            },
            {
                path: 'reallocations',
                component: ReallocationsComponent,
            },
            {
                path: '**',
                redirectTo: 'budgets',
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OrganizationRoutingModule {}
