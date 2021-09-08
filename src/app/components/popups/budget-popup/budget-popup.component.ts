import { Component, Inject, OnInit } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface IExtendedBudget {
  id: number;
  nameOfClub: string;
  fiscalYear: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  approvedAppeal: number;
  amountApproved: number;
  amountSpent: number;
  budgetSections: IBudgetSections[];
}

export interface IBudgetSections {
  budgetID: number;
  nameOfClub: string;
  fiscalYear: string;
  sectionName: string;
  numOfItems: number;
  amountRequested: number;
  amountProposed: number;
  approvedAppeal: number;
  amountApproved: number;
  amountSpent: number;
}

export interface IBudgetDate {
  id: number
}

@Component({
  selector: 'app-budget-popup',
  templateUrl: './budget-popup.component.html',
  styleUrls: ['./budget-popup.component.scss']
})
export class BudgetPopupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
