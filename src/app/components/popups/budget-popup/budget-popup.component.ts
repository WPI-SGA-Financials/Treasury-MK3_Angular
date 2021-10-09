import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../../../services/http.service';
import { Path, Path_Api } from '../../../types/path.enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { IExtendedBudget } from '../../../types/ibudget.interface';

@Component({
  selector: 'app-budget-popup',
  templateUrl: './budget-popup.component.html',
  styleUrls: ['./budget-popup.component.scss']
})
export class BudgetPopupComponent implements OnInit {
  extendedBudget: IExtendedBudget | null = null;
  @ViewChild(MatAccordion) accordion: any;
  public routerPath: string = '';

  constructor(
    private http: HttpService,
    public dialogRef: MatDialogRef<BudgetPopupComponent>,
    @Inject(MAT_DIALOG_DATA)
    public injectedData: {
      id: number;
      fromOrgView: boolean;
    }
  ) {}

  ngOnInit(): void {
    this.http.getRequest(`${Path_Api.SPECIFIC_BUDGET}/${this.injectedData.id}`).subscribe((res: IExtendedBudget) => {
      this.extendedBudget = res;
      this.routerPath = Path.ORGANIZATION + '/' + this.extendedBudget?.nameOfClub + '/budgets';
    });
  }
}
