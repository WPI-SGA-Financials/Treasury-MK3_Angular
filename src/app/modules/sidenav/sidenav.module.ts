import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SharedMaterialComponentsModule } from '../../components/shared-material-components.module';
import { RouterModule } from '@angular/router';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';

@NgModule({
  declarations: [SidenavComponent, SidebarMenuComponent, AboutDialogComponent],
  imports: [CommonModule, SharedMaterialComponentsModule, RouterModule],
  exports: [SidenavComponent]
})
export class SidenavModule {}
