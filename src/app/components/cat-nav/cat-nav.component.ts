import { Component, OnInit } from '@angular/core';
import { IButton } from '../button-group/button-group.component';

@Component({
  selector: 'app-cat-nav',
  templateUrl: './cat-nav.component.html',
  styleUrls: ['./cat-nav.component.scss']
})
export class CatNavComponent implements OnInit {
  buttons: IButton[] = [
    {
      name: 'Organization Data',
      routerLink: '/clubs',
      matIcon: 'group_work'
    },
    {
      name: 'Financial Data',
      routerLink: '/financials',
      matIcon: 'account_balance'
    },
    {
      name: 'SGA Fi-Viz',
      routerLink: '/fiviz',
      matIcon: 'assessment'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
