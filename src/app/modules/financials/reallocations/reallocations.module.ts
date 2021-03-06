import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedFiltersModule } from '@treasury-components/filters/shared-filters.module';
import { ReusableTableModule } from '@treasury-components/tables/reusable-table.module';
import { SharedAngularComponentsModule } from '@treasury-components/shared-angular-components.module';
import { CatNavModule } from '@treasury-components/cat-nav/cat-nav.module';
import { ReallocationsListComponent } from './reallocations-list/reallocations-list.component';
import { ReallocationsRoutingModule } from './reallocations-routing.module';

@NgModule({
    declarations: [ReallocationsListComponent],
    imports: [
        CommonModule,
        ReallocationsRoutingModule,
        SharedFiltersModule,
        ReusableTableModule,
        SharedAngularComponentsModule,
        CatNavModule,
    ],
})
export class ReallocationsModule {}
