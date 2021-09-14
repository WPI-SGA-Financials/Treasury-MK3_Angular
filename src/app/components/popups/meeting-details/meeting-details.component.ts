import { Component, Input, OnInit } from '@angular/core';
import { IExtendedFR } from '../../../types/ifunding-request.interface';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {

  @Input() extendedFundingRequest: IExtendedFR | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
