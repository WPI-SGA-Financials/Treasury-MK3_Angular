import { Component, Input, OnInit } from '@angular/core';
import { Organization } from '../../../types/organization.model';

@Component({
    selector: 'app-org-info',
    templateUrl: './info.component.html',
    styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
    @Input() orgData: Organization = <Organization>{};

    constructor() {}

    ngOnInit(): void {}
}
