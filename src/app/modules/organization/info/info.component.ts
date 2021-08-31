import { Component, Input, OnInit } from '@angular/core';
import { IClub } from '../../../types/iclub.interface';

@Component({
  selector: 'app-org-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() orgData: IClub = <IClub>{};

  constructor() {}

  ngOnInit(): void {}
}
