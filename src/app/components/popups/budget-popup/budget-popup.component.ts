import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Path } from '../../../types/path.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { ExtendedBudget } from '../../../types/budget.model';
import { BudgetService } from '../../../services/api-services/budget.service';
import { ResponseModel } from '../../../types/response.model';

@Component({
  selector: 'app-budget-popup',
  templateUrl: './budget-popup.component.html',
  styleUrls: ['./budget-popup.component.scss']
})
export class BudgetPopupComponent implements OnInit {
  extendedBudget: ExtendedBudget | null = null;
  @ViewChild(MatAccordion) accordion: any;
  public routerPath: string = '';

  constructor(
    private budgetService: BudgetService,
    public dialogRef: MatDialogRef<BudgetPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public injectedData: {
      id: number;
      fromOrgView: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.budgetService.getBudget(this.injectedData.id).subscribe((response: ResponseModel<ExtendedBudget>) => {
      this.extendedBudget = response.data;
      this.routerPath = `${Path.ORGANIZATION}/${this.extendedBudget?.nameOfClub}/budgets`
    })
  }
}
