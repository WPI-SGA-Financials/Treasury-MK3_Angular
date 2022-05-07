import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FivizComponent } from './fiviz.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: FivizComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FivizRoutingModule {}
