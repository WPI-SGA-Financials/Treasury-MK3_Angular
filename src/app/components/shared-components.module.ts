import {NgModule} from '@angular/core';
import {SharedMaterialComponentsModule} from "./shared-material-components.module";
import {ClubsModule} from "./clubs/clubs.module";
import {FivizModule} from "./fiviz/fiviz.module";
import {FinancialsModule} from "./financials/financials.module";


@NgModule({
  imports: [SharedMaterialComponentsModule, ClubsModule, FivizModule, FinancialsModule],
  exports: [SharedMaterialComponentsModule, ClubsModule, FivizModule, FinancialsModule]
})
export class SharedComponentsModule {
}
