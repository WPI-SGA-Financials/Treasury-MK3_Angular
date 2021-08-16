import {NgModule} from '@angular/core';
import {SharedMaterialComponentsModule} from "./shared-material-components.module";
import {ClubsModule} from "./clubs/clubs.module";


@NgModule({
  imports: [SharedMaterialComponentsModule, ClubsModule],
  exports: [SharedMaterialComponentsModule, ClubsModule]
})
export class SharedComponentsModule {
}
