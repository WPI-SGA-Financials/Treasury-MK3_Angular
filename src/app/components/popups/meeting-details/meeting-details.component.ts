import { Component, Input, OnInit } from '@angular/core';
import { IFundingRequest } from '../../../types/ifunding-request.interface';
import { IReallocation } from '../../../types/ireallocation.interface';

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
  @Input() extendedFundingRequest: IFundingRequest | null = null;
  @Input() extendedReallocation: IReallocation | null = null;

  // TODO Inject httpservice for getting meeting details
  constructor() {
  }

  ngOnInit(): void {
  }
}
