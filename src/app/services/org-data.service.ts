import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrgDataService {
  private orgName: string = '';

  constructor() {}

  setOrgName(name: string) {
    this.orgName = name;
  }

  getOrgName(): string {
    return this.orgName;
  }
}
