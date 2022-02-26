import { Component, OnDestroy, OnInit } from '@angular/core';
import { BudgetService } from '@treasury-services/api-services/budget.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-budget-detailed',
  templateUrl: './budget-detailed.component.html',
  styleUrls: ['./budget-detailed.component.scss']
})
export class BudgetDetailedComponent implements OnInit, OnDestroy {
  private routeSub: Subscription;
  budgetID: number;

  constructor(private budgetService: BudgetService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params: Params) => {
      this.budgetID = params['id'];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
