import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { INavigationItem } from '../../../types/navigation.interface';
import { Path } from '../../../types/path.enum';
import { MatDialog } from '@angular/material/dialog';
import { AboutDialogComponent } from '../about-dialog/about-dialog.component';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  @Output() toggleNav = new EventEmitter<boolean>();

  constructor(public authService: AuthService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  closeNav(status: boolean) {
    this.toggleNav.emit(status);
  }

  standardNavItems: INavigationItem[] = [
    {
      title: 'Organization Data',
      path: Path.CLUBS,
      icon: 'group_work'
    },
    {
      title: 'Financial Data',
      path: Path.FINANCIALS,
      icon: 'account_balance',
      children: [
        {
          title: 'Budgets',
          path: '/budgets'
        },
        {
          title: 'Funding Requests',
          path: '/funding-requests'
        },
        {
          title: 'Reallocations',
          path: '/reallocations'
        }
      ]
    },
    {
      title: 'SGA Fi-Viz',
      path: Path.FIVIZ,
      icon: 'assessment'
    }
  ];

  openDialog() {
    this.dialog.open(AboutDialogComponent, { maxWidth: '40%' });
  }
}
