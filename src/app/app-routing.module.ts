import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {Path} from "./types/path.enum";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: Path.LOGIN
  },
  {
    path: Path.LOGIN,
    component: LoginComponent
  },
  {
    path: Path.CLUBS,
    loadChildren: () =>
      import("./components/clubs/clubs.module").then((m) => m.ClubsModule),
    canActivate: [AuthGuard]
  },
  {
    path: Path.FINANCIALS,
    loadChildren: () =>
      import("./components/financials/financials.module").then((m) => m.FinancialsModule),
    canActivate: [AuthGuard]
  },
  {
    path: Path.FIVIZ,
    loadChildren: () =>
      import("./components/fiviz/fiviz.module").then((m) => m.FivizModule),
    canActivate: [AuthGuard]
  },
  {
    path: "**",
    redirectTo: Path.CLUBS
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
