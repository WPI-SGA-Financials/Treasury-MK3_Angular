import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CatNavComponent } from './cat-nav.component';
import { SharedMaterialComponentsModule } from '../shared-material-components.module';
import { SharedAngularComponentsModule } from '../shared-angular-components.module';

@NgModule({
    declarations: [CatNavComponent],
    exports: [CatNavComponent],
    imports: [CommonModule, SharedMaterialComponentsModule, RouterModule, SharedAngularComponentsModule],
})
export class CatNavModule {}
