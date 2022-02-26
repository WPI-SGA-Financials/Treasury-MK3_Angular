import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinancialsComponent } from './financials.component';
import { CatNavModule } from '@treasury-components/cat-nav/cat-nav.module';
import { FinancialsRoutingModule } from './financials-routing.module';
import { SharedAngularComponentsModule } from '@treasury-components/shared-angular-components.module';

@NgModule({
  declarations: [FinancialsComponent],
  imports: [CommonModule, FinancialsRoutingModule, CatNavModule, SharedAngularComponentsModule]
})
export class FinancialsModule {}
