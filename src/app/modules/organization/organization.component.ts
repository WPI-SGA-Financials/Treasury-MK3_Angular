import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtendedOrganization } from '../../types/organization.model';
import { OrgDataService } from '../../services/org-data.service';
import { OrganizationService } from '../../services/api-services/organization.service';
import { ResponseModel } from '../../types/response.model';
import { IButton } from '../../components/button-group/button-group.component';
import { Path } from '../../types/path.enum';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  private _clubName: string = '';
  club: ExtendedOrganization = <ExtendedOrganization>{};

  buttons: IButton[] = [];

  constructor(
    private orgService: OrganizationService,
    private route: ActivatedRoute,
    private router: Router,
    private orgDataService: OrgDataService
  ) {
    this.route.params.subscribe((params) => {
      this._clubName = params.id;
      this.orgDataService.setOrgName(this._clubName);
    });
  }

  ngOnInit(): void {
    this.orgService.getOrganization(this._clubName).subscribe((response: ResponseModel<ExtendedOrganization>) => {
      if (response.data === null) {
        this.router.navigate([Path.ORGANIZATIONS]);
      } else {
        this.setClubData(response.data);
      }
    });
  }

  private setClubData(res: ExtendedOrganization) {
    this.club = res;

    this.buttons = [
      {
        name: 'Budgets',
        routerLink: `/${Path.ORGANIZATIONS}/${this._clubName}/budgets`
      },
      {
        name: 'Funding Requests',
        routerLink: `/${Path.ORGANIZATIONS}/${this._clubName}/funding-requests`
      },
      {
        name: 'Reallocations',
        routerLink: `/${Path.ORGANIZATIONS}/${this._clubName}/reallocations`
      }
    ];
  }
}
