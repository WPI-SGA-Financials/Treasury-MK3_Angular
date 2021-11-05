import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExtendedOrganization } from '../../types/organization.model';
import { OrgDataService } from '../../services/org-data.service';
import { OrganizationService } from '../../services/api-services/organization.service';
import { ResponseModel } from '../../types/response.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  private _clubName: string = '';
  club: ExtendedOrganization = <ExtendedOrganization>{};

  constructor(private orgService: OrganizationService, private route: ActivatedRoute, private router: Router, private orgDataService: OrgDataService) {
    this.route.params.subscribe((params) => {
      this._clubName = params.id;
      this.orgDataService.setOrgName(this._clubName);
    });
  }

  ngOnInit(): void {
    this.orgService.getOrganization(this._clubName).subscribe((response: ResponseModel<ExtendedOrganization>) => {
      if(response.data === null) {
        this.router.navigate(['/clubs']);
      } else {
        this.setClubData(response.data)
      }
    })
  }

  private setClubData(res: ExtendedOrganization) {
    this.club = res;
  }
}
