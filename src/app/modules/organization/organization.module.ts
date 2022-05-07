import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import { OrganizationComponent } from './organization.component';
import { InfoComponent } from './info/info.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { FundingRequestsComponent } from './funding-requests/funding-requests.component';
import { ReallocationsComponent } from './reallocations/reallocations.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { ReusableTableModule } from '../../components/tables/reusable-table.module';
import { SharedAngularComponentsModule } from '../../components/shared-angular-components.module';
import { OrganizationListComponent } from './organization-list/organization-list.component';
import { CatNavModule } from '../../components/cat-nav/cat-nav.module';
import { SharedFiltersModule } from '../../components/filters/shared-filters.module';

@NgModule({
    declarations: [
        OrganizationListComponent,
        OrganizationComponent,
        InfoComponent,
        BudgetsComponent,
        FundingRequestsComponent,
        ReallocationsComponent,
    ],
    exports: [OrganizationComponent],
    imports: [
        CommonModule,
        OrganizationRoutingModule,
        SharedMaterialComponentsModule,
        ReusableTableModule,
        SharedAngularComponentsModule,
        CatNavModule,
        SharedFiltersModule,
    ],
})
export class OrganizationModule {}
