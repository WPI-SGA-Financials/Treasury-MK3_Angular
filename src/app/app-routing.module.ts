import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { Path } from './types/path.enum';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Path.LOGIN
  },
  {
    path: Path.LOGIN,
    component: LoginComponent
  },
  {
    path: Path.CLUBS,
    loadChildren: () => import('./modules/clubs/clubs.module').then((m) => m.ClubsModule),
    canActivate: [AuthGuard]
  },
  {
    path: Path.FINANCIALS,
    loadChildren: () => import('./modules/financials/financials.module').then((m) => m.FinancialsModule),
    canActivate: [AuthGuard]
  },
  {
    path: Path.FIVIZ,
    loadChildren: () => import('./modules/fiviz/fiviz.module').then((m) => m.FivizModule),
    canActivate: [AuthGuard]
  },
  {
    path: Path.ORGANIZATION + '/:id',
    loadChildren: () => import('./modules/organization/organization.module').then((m) => m.OrganizationModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: Path.CLUBS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
