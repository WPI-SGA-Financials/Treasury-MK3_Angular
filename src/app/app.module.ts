import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialComponentsModule } from './components/shared-material-components.module';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { HttpClientModule } from '@angular/common/http';
import { BudgetPopupComponent } from './components/popups/budget-popup/budget-popup.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, BudgetPopupComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, SharedMaterialComponentsModule, SidenavModule, HttpClientModule],
  providers: [],
  exports: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
