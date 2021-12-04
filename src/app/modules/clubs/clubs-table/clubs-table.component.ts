import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { OrganizationService } from '../../../services/api-services/organization.service';
import { Path_Api } from '../../../types/path.enum';
import { Organization } from '../../../types/organization.model';
import { Router } from '@angular/router';
import { PagedResponseModel } from '../../../types/paged-response.model';
import { IActionEvent, IActions, ITableColumn } from '../../../components/tables/types/table-interfaces';
import { ActionButtonType, ColumnTypes } from '../../../components/tables/types/table-enums';
import { IFilter } from '../../../components/filters/types/filter';
import { PagedRequestModel } from '../../../types/paged-request.model';
import { MetadataService } from '../../../services/api-services/metadata.service';
import { ResponseModel } from '../../../types/response.model';
import { AllMetadata } from '../../../types/metadata.model';
import { ProcessFilterSearchService } from '../../../services/process-filter-search.service';

@Component({
  selector: 'app-clubs-table',
  templateUrl: './clubs-table.component.html',
  styleUrls: ['./clubs-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ClubsTableComponent implements OnInit {
  displayedColumns: ITableColumn[] = [
    {
      name: 'Name of Club',
      dataKey: 'nameOfClub',
      isSortable: false
    },
    {
      name: 'Classification',
      dataKey: 'classification'
    },
    {
      name: 'Type of Club',
      dataKey: 'typeOfClub'
    },
    {
      name: 'Club Acronym',
      dataKey: 'acronym'
    },
    {
      name: 'Active?',
      dataKey: 'inactive',
      type: ColumnTypes.INACTIVE
    }
    // {
    //   name: 'Last Modified',
    //   dataKey: 'timestamp',
    //   type: ColumnTypes.DATE
    // }
  ];
  dataSource: PagedResponseModel<Organization> = {} as PagedResponseModel<Organization>;
  isLoading: boolean = true;
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
    type: []
  };

  metadata: AllMetadata = {
    clubClassifications: [],
    clubTypes: []
  };

  constructor(
    private router: Router,
    private orgService: OrganizationService,
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
      this.orgService.getOrganizations(this.pagedRequest).subscribe((response: PagedResponseModel<Organization>) => {
        this.dataSource = response;
        this.isLoading = false;
      });
    });
  }

  onButtonClicked($event: IActionEvent<Organization>) {
    if ($event.type === ActionButtonType.VIEW) {
      this.router.navigate([`${Path_Api.ORGANIZATION}/${$event.data.nameOfClub}`]);
    }
  }

  onTableEvent($event: any) {
    if ($event.type === 'PageChange') {
      this.pagedRequest.page = $event.data.pageIndex + 1;

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
    this.orgService.getOrganizations(this.pagedRequest).subscribe((response: PagedResponseModel<Organization>) => {
      this.isLoading = false;
      this.dataSource = response;
    });
  }
}
