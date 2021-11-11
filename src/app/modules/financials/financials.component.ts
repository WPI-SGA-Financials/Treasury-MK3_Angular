import { Component, OnInit } from '@angular/core';
import { IButton } from '../../components/button-group/button-group.component';

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent implements OnInit {
  buttons: IButton[] = [
    {
      name: 'Budgets',
      routerLink: '/financials/budgets'
    },
    {
      name: 'Funding Requests',
      routerLink: '/financials/funding-requests'
    },
    {
      name: 'Reallocations',
      routerLink: '/financials/reallocations'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
