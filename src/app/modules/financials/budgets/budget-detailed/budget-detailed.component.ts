import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BudgetService } from '@treasury-services/api-services/budget.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExtendedBudget } from '@treasury-types/budget.model';
import { ResponseModel } from '@treasury-types/response.model';
import { IActiveSort, ITableColumn } from '@treasury-components/tables/types/table-interfaces';
import { ColumnTypes } from '@treasury-components/tables/types/table-enums';
import { Path } from '@treasury-types/path.enum';
import { IButton } from '@treasury-components/button-group/button-group.component';

@Component({
    selector: 'app-budget-detailed',
    templateUrl: './budget-detailed.component.html',
    styleUrls: ['./budget-detailed.component.scss'],
})
export class BudgetDetailedComponent implements OnInit, OnDestroy {
    private routeSub: Subscription;

    budgetID: number;

    budgetDetailed: ExtendedBudget;

    routerPath: string = '';

    tableColumns: ITableColumn[] = [
        {
            name: 'Section Name',
            dataKey: 'sectionName',
        },
        {
            name: 'Number of Items',
            dataKey: 'numOfItems',
        },
        {
            name: 'Amt. Requested',
            dataKey: 'amountRequested',
            type: ColumnTypes.CURRENCY,
        },
        {
            name: 'Amt. Proposed',
            dataKey: 'amountProposed',
            type: ColumnTypes.CURRENCY,
        },
        {
            name: 'Amt. Approved',
            dataKey: 'amountApproved',
            type: ColumnTypes.CURRENCY,
        },
    ];

    activeSort: IActiveSort = {
        dataKey: 'sectionName',
        direction: 'asc',
    };

    buttons: IButton[] = [
        {
            name: 'View Org',
            routerLink: this.routerPath,
        },
        {
            name: 'View Budgets',
            routerLink: '/financials/budgets',
        },
    ];

    constructor(private budgetService: BudgetService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe((params: Params) => {
            this.budgetID = params.id;

            this.budgetService.getBudget(this.budgetID).subscribe((value: ResponseModel<ExtendedBudget>) => {
                this.budgetDetailed = value.data;
                this.routerPath = `/${Path.ORGANIZATIONS}/${this.budgetDetailed.nameOfClub}/budgets`;
            });
        });
    }

    ngOnDestroy(): void {
        this.routeSub.unsubscribe();
    }
}
