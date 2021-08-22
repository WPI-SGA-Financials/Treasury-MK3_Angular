import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedMaterialComponentsModule } from './components/shared-material-components.module';
import { SharedComponentsModule } from './components/shared-components.module';
import { SidenavModule } from './modules/sidenav/sidenav.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedMaterialComponentsModule,
    SharedComponentsModule,
    SidenavModule,
    HttpClientModule
  ],
  providers: [],
  exports: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
