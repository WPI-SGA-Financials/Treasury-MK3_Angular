import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { Path_Api } from '../../types/path.enum';
import { ActivatedRoute, Router } from '@angular/router';
import { IOrganizationExtended } from '../../types/iorganization.interface';
import { OrgDataService } from '../../services/org-data.service';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  private _clubName: string = '';
  club: IOrganizationExtended = <IOrganizationExtended>{};

  constructor(private http: HttpService, private route: ActivatedRoute, private router: Router, private orgDataService: OrgDataService) {
    this.route.params.subscribe((params) => {
      this._clubName = params.id;
      this.orgDataService.setOrgName(this._clubName);
    });
  }

  ngOnInit(): void {
    this.http.getRequest(`${Path_Api.ORGANIZATION}/${this._clubName}`).subscribe((res: IOrganizationExtended) => {
      if (res === null) {
        this.router.navigate(['/clubs']);
      } else {
        this.setClubData(res);
      }
    });
  }

  private setClubData(res: IOrganizationExtended) {
    this.club = res;
  }
}
