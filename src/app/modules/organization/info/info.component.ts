import { Component, Input, OnInit } from '@angular/core';
import { IOrganization } from '../../../types/iorganization.interface';

@Component({
  selector: 'app-org-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() orgData: IOrganization = <IOrganization>{};

  constructor() {}

  ngOnInit(): void {}
}
