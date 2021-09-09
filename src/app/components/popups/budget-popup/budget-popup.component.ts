import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path_Api } from '../../../types/path.enum';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';

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

@Component({
  selector: 'app-budget-popup',
  templateUrl: './budget-popup.component.html',
  styleUrls: ['./budget-popup.component.scss']
})
export class BudgetPopupComponent implements OnInit {
  extendedBudget: IExtendedBudget | null = null;
  @ViewChild(MatAccordion) accordion: any;

  constructor(private http: HttpService, @Inject(MAT_DIALOG_DATA) public injectedData: { id: number }) {}

  ngOnInit(): void {
    this.http.getRequest(`${Path_Api.SPECIFIC_BUDGET}/${this.injectedData.id}`).subscribe((res: IExtendedBudget) => {
      this.extendedBudget = res;
    });
  }
}
