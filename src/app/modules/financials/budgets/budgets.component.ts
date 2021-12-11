import { Component, OnInit } from '@angular/core';
import { Budget } from '../../../types/budget.model';
import { MatDialog } from '@angular/material/dialog';
import { BudgetPopupComponent } from '../../../components/popups/budget-popup/budget-popup.component';
import { BudgetService } from '../../../services/api-services/budget.service';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IActionEvent, IActions, ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../../../components/tables/types/table-enums';
import { IFilter } from '../../../components/filters/types/filter';
import { MetadataService } from '../../../services/api-services/metadata.service';
import { ProcessFilterSearchService } from '../../../services/process-filter-search.service';
import { PagedRequestModel } from '../../../types/paged-request.model';
import { AllMetadata } from '../../../components/filters/types/metadata.model';
import { ResponseModel } from '../../../types/response.model';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.scss']
})
export class BudgetsComponent implements OnInit {
  displayedColumns: ITableColumn[] = [
    {
      name: 'Name of Club',
      dataKey: 'nameOfClub'
    },
    {
      name: 'Fiscal Year',
      dataKey: 'fiscalYear'
    },
    {
      name: 'Number of Items',
      dataKey: 'numOfItems'
    },
    {
      name: 'Amount Requested',
      dataKey: 'amountRequested',
      type: ColumnTypes.CURRENCY
    },
    {
      name: 'Amount Proposed',
      dataKey: 'amountProposed',
      type: ColumnTypes.CURRENCY
    },
    {
      name: 'Amount Approved',
      dataKey: 'amountApproved',
      type: ColumnTypes.CURRENCY
    }
  ];
  dataSource: PagedResponseModel<Budget> = {} as PagedResponseModel<Budget>;
  isLoading: boolean = false;
  actionItems: IActions[] = [
    {
      displayName: 'View',
      actionType: ActionButtonType.VIEW
    }
  ];

  filters: IFilter[] = [];

  pagedRequest: PagedRequestModel = {
    acronym: [],
    classification: [],
    includeInactive: false,
    name: [],
    page: 1,
    rpp: 9,
    type: [],
    fiscalYear: [],
    minimumRequestedAmount: -1,
    maximumRequestedAmount: -1,
    description: []
  };

  metadata: AllMetadata = {
    clubClassifications: [],
    clubTypes: [],
    fiscalYears: []
  };

  constructor(
    private budgetService: BudgetService,
    private dialog: MatDialog,
    private metadataService: MetadataService,
    private filterService: ProcessFilterSearchService
  ) {}

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData() {
    this.isLoading = true;
    this.metadataService.getAllMetadata().subscribe((response: ResponseModel<AllMetadata>) => {
      this.metadata = response.data;
      this.budgetService.getBudgets().subscribe((response: PagedResponseModel<Budget>) => {
        this.dataSource = response;
        this.isLoading = false;
      });
    });
  }

  onButtonClicked($event: IActionEvent<Budget>) {
    if ($event.type === ActionButtonType.VIEW) {
      this.dialog.open(BudgetPopupComponent, {
        data: {
          id: $event.data.id,
          fromOrgView: false
        },
        maxWidth: '40%',
        minWidth: '30%'
      });
    }
  }

  onTableEvent($event: any) {
    if ($event.type === 'PageChange') {
      this.pagedRequest.page = $event.data.pageIndex + 1;

      this.updateTableData();
    }
  }

  handleRemove($event: IFilter) {
    let updateData;

    ({
      pagedRequest: this.pagedRequest,
      filters: this.filters,
      updateData: updateData
    } = this.filterService.removeFilter($event, this.pagedRequest, this.filters));
    if (updateData) {
      this.updateTableData();
    }
  }

  onSearch($event: IFilter) {
    let updateData;

    ({
      pagedRequest: this.pagedRequest,
      filters: this.filters,
      updateData: updateData
    } = this.filterService.addFilters($event, this.pagedRequest, this.filters));
    if (updateData) {
      this.updateTableData();
    }
  }

  private updateTableData() {
    this.isLoading = true;
    this.budgetService.getBudgets(this.pagedRequest).subscribe((response: PagedResponseModel<Budget>) => {
      this.isLoading = false;
      this.dataSource = response;
    });
  }
}
