import { Component, Input, OnInit } from '@angular/core';
import { IFundingRequest } from '../../../types/ifunding-request.interface';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {
  // TODO Change Input to meeting ID and FR ID in order to call meeting details
  @Input() extendedFundingRequest: IFundingRequest | null = null;

  // TODO Inject httpservice for getting meeting details
  constructor() { }

  ngOnInit(): void {
  }

}
