import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatNavModule } from '@treasury-components/cat-nav/cat-nav.module';
import { SharedAngularComponentsModule } from '@treasury-components/shared-angular-components.module';
import { FinancialsRoutingModule } from './financials-routing.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, FinancialsRoutingModule, CatNavModule, SharedAngularComponentsModule],
})
export class FinancialsModule {}
