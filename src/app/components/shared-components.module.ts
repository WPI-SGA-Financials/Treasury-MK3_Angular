import { NgModule } from '@angular/core';
import { SharedMaterialComponentsModule } from './shared-material-components.module';
import { ClubsModule } from '../modules/clubs/clubs.module';
import { FivizModule } from '../modules/fiviz/fiviz.module';
import { FinancialsModule } from '../modules/financials/financials.module';

@NgModule({
  imports: [SharedMaterialComponentsModule, ClubsModule, FivizModule, FinancialsModule],
  exports: [SharedMaterialComponentsModule, ClubsModule, FivizModule, FinancialsModule]
})
export class SharedComponentsModule {}
