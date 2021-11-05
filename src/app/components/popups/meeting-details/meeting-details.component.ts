import { Component, Input, OnInit } from '@angular/core';
import { FundingRequest } from '../../../types/funding-request.model';
import { Reallocation } from '../../../types/reallocation.model';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.scss']
})
export class MeetingDetailsComponent implements OnInit {
  // TODO Change to some sort of interface
  /*
  {
    meetingID: number,
    requestType: {
      type: ...,
      id: ...
    }
  }*/

  // Temporary Input
  @Input() extendedFundingRequest: FundingRequest | null = null;
  @Input() extendedReallocation: Reallocation | null = null;

  // TODO Inject httpservice for getting meeting details
  constructor() {
  }

  ngOnInit(): void {
  }
}
